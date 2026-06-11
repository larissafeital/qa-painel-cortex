#!/usr/bin/env python3
"""
analise_qa.py — extrai dados dos PDFs de QA Sponsor da Cortex
Uso: python3 analise_qa.py arquivo1.pdf [arquivo2.pdf ...]
Saída: JSON no stdout com dados de cada cliente
"""

import sys
import json
import re
import os

try:
    import pdfplumber
except ImportError:
    print("Erro: instale pdfplumber com: pip3 install pdfplumber", file=sys.stderr)
    sys.exit(1)


def detect_type(filename: str) -> str:
    fname = os.path.basename(filename).lower()
    return "Ongoing" if "ongoing" in fname else "Onboarding"


def find_after(text, pattern, flags=re.IGNORECASE):
    """Retorna a primeira linha não-vazia após o match do pattern."""
    m = re.search(pattern, text, flags)
    if not m:
        return None
    rest = text[m.end():]
    for line in rest.split("\n"):
        line = line.strip()
        if line:
            return line
    return None


def find_inline(text, pattern, group=1, flags=re.IGNORECASE):
    m = re.search(pattern, text, flags)
    return m.group(group).strip() if m else None


def extract_int(text, pattern, flags=re.IGNORECASE):
    m = re.search(pattern, text, flags)
    if m:
        try:
            return int(m.group(1).strip())
        except ValueError:
            return None
    return None


def _extrair_trechos_fala(full: str) -> list:
    """
    Extrai parágrafos da entrevista que contêm atribuição direta a pessoas
    (verbos de fala + nome) ou expressões mais próximas da voz do cliente.
    Retorna lista de dicts {atribuicao, trecho} para uso na Voz do Cliente.
    """
    # Verbos e padrões que indicam fala atribuída
    padrao_atribuicao = re.compile(
        r"([A-ZÁÉÍÓÚÀÃÕÂÊÎÔÛÇ][a-záéíóúàãõâêîôûç]+(?:\s[A-ZÁÉÍÓÚÀÃÕÂÊÎÔÛÇ][a-záéíóúàãõâêîôûç]+)*)"
        r"\s+(?:menciona|mencionou|destaca|destacou|ressalta|ressaltou|explica|explicou|"
        r"avalia|avaliou|relata|relatou|observa|observou|afirma|afirmou|considera|considerou|"
        r"expressa|expressou|descreve|descreveu|sugere|sugeriu|reafirma|reafirmou)"
        r"\s+que\s+(.+?)(?=\n\n|\n[A-Z]|$)",
        re.DOTALL
    )

    trechos = []
    seen = set()
    for m in padrao_atribuicao.finditer(full):
        nome = m.group(1).strip()
        # Filtrar nomes genéricos / ruído
        if len(nome.split()) > 4 or nome.lower() in {"cortex", "tramontina", "volvo", "bhp"}:
            continue
        trecho = re.sub(r"\s+", " ", m.group(2)).strip()
        if len(trecho) < 30 or len(trecho) > 400:
            continue
        chave = trecho[:60]
        if chave in seen:
            continue
        seen.add(chave)
        trechos.append({"atribuicao": nome, "trecho": trecho})
        if len(trechos) >= 6:
            break
    return trechos


def extract_qa(pdf_path: str) -> dict:
    pages_text = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                pages_text.append(t)

    full = "\n".join(pages_text)

    # ── Cliente ──────────────────────────────────────────────────────────
    # Linha imediatamente após "CS - Quality Assurance (Sponsor) 2.0"
    client_raw = find_after(full, r"CS\s*-\s*Quality Assurance \(Sponsor\) 2\.0")
    if client_raw:
        # Remove sufixo " PR" e data se veio junto
        client_name = re.sub(r"\s+(PR|pr)\s*$", "", client_raw.split("Data de")[0]).strip()
        client_name = re.sub(r"\s+PR$", "", client_name, flags=re.IGNORECASE).strip()
    else:
        client_name = os.path.splitext(os.path.basename(pdf_path))[0]

    # ── Solução ───────────────────────────────────────────────────────────
    solution = find_inline(full, r"Solução Cortex:\s*([^\n]+)") or "Cortex PR"
    # pdfplumber às vezes extrai o chip como texto separado; normalizar
    solution = solution.strip()

    # ── Data ─────────────────────────────────────────────────────────────
    date_m = re.search(r"Data de publicação:\s*(\d{2}/\d{2}/\d{4})", full)
    date = date_m.group(1) if date_m else ""

    # ── NPS Num. ──────────────────────────────────────────────────────────
    nps = extract_int(full, r"NPS Num\.\s*[:\s]+(\d+)")

    # ── Impacto Num. ──────────────────────────────────────────────────────
    impacto = extract_int(full, r"Impacto Num\.\s*[:\s]+(\d+)")

    # ── Nota de Onboarding ────────────────────────────────────────────────
    # Pergunta: "Com base na sua experiência de onboarding, qual a probabilidade..."
    # Resposta: número logo abaixo
    onboarding = None
    tipo = detect_type(pdf_path)
    if tipo == "Onboarding":
        onboarding = extract_int(
            full,
            r"probabilidade de (?:você )?recomendar\s*\na?\s*Cortex a um amigo[^\n]*\n\s*(\d+)",
        )
        if onboarding is None:
            # fallback: busca mais ampla
            onboarding = extract_int(
                full,
                r"recomendar a\s*\nCortex a um amigo[^\n]*\n\s*(\d+)",
            )
        if onboarding is None:
            # segunda tentativa com texto em uma linha
            onboarding = extract_int(
                full,
                r"recomendar a Cortex a um amigo[^\n]*\n\s*(\d+)",
            )

    # ── Renovaria ─────────────────────────────────────────────────────────
    renovaria = find_after(full, r"renovaria\?") or "—"
    # Limpar: às vezes a resposta fica na mesma linha depois de ":"
    renovaria_inline = find_inline(full, r"renovaria\?\s*([^\n]+)")
    if renovaria_inline and not renovaria_inline.startswith("Se a"):
        renovaria = renovaria_inline

    # ── Feeling ───────────────────────────────────────────────────────────
    feeling_m = re.search(
        r"Feeling\s*\nentrevistador:\s*\n([^\n]+)", full, re.IGNORECASE
    )
    if feeling_m:
        feeling = feeling_m.group(1).strip()
    else:
        feeling_m2 = re.search(r"Feeling\s+entrevistador:\s*([^\n]+)", full, re.IGNORECASE)
        feeling = feeling_m2.group(1).strip() if feeling_m2 else "—"

    # ── Aspectos positivos e negativos ───────────────────────────────────
    pos_m = re.search(r"Aspectos positivos:\s*(.*?)(?=Aspectos negativos:|$)", full, re.DOTALL | re.IGNORECASE)
    positivos = pos_m.group(1).strip()[:300] if pos_m else ""

    neg_m = re.search(r"Aspectos negativos:\s*(.*?)(?=Foco agora|Resultado|$)", full, re.DOTALL | re.IGNORECASE)
    negativos = neg_m.group(1).strip()[:300] if neg_m else ""

    # ── Planos de ação ────────────────────────────────────────────────────
    planos_m = re.search(r"Planos de Ação:\s*(.*?)(?=App \(N\)|Autorização|$)", full, re.DOTALL | re.IGNORECASE)
    planos = planos_m.group(1).strip()[:400] if planos_m else ""

    # ── Observações CS ────────────────────────────────────────────────────
    obs_m = re.search(r"Observações/Orientações para Time CS:\s*(.*?)(?=Você autoriza|$)", full, re.DOTALL | re.IGNORECASE)
    obs = obs_m.group(1).strip()[:500] if obs_m else ""

    # ── Trechos de fala (para Voz do Cliente) ────────────────────────────
    # Captura parágrafos narrativos da entrevista atribuídos a pessoas nomeadas
    # ou com verbos de fala — mais próximos à voz real do cliente
    trechos = _extrair_trechos_fala(full)

    return {
        "cliente": client_name,
        "solucao": solution,
        "tipo": tipo,
        "data": date,
        "nps": nps,
        "impacto": impacto,
        "onboarding": onboarding,
        "renovaria": renovaria,
        "feeling": feeling,
        "aspectos_positivos": positivos,
        "aspectos_negativos": negativos,
        "planos_acao": planos,
        "observacoes_cs": obs,
        "trechos_fala": trechos,
        "arquivo": os.path.basename(pdf_path),
    }


def score_category(val):
    if val is None:
        return "N/A"
    if val >= 9:
        return "Promotor"
    if val >= 7:
        return "Inócuo"
    return "Detrator"


def main():
    if len(sys.argv) < 2:
        print("Uso: python3 analise_qa.py arquivo1.pdf [arquivo2.pdf ...]", file=sys.stderr)
        sys.exit(1)

    results = []
    for pdf_path in sys.argv[1:]:
        if not os.path.exists(pdf_path):
            print(f"⚠ Arquivo não encontrado: {pdf_path}", file=sys.stderr)
            continue
        try:
            data = extract_qa(pdf_path)
            results.append(data)
            onb = data["onboarding"]
            n_trechos = len(data.get("trechos_fala", []))
            print(
                f"✓ {data['cliente']} ({data['tipo']}) | "
                f"NPS: {data['nps']} | "
                f"Impacto: {data['impacto']} | "
                f"Onboarding: {onb} ({score_category(onb)}) | "
                f"Trechos de fala: {n_trechos}",
                file=sys.stderr,
            )
        except Exception as e:
            print(f"✗ Erro ao processar {pdf_path}: {e}", file=sys.stderr)

    print(json.dumps(results, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
