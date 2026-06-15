// qa-data.js — dados dos clientes do painel QA Onboarding
// Edite apenas este arquivo ao adicionar novos clientes.
// O painel HTML carrega este arquivo automaticamente.

const CLIENTS      = ['Volvo', 'Tramontina', 'BHP', 'Unilever Foods'];
const DATA_NPS     = [10, 6, 10, 8];
const DATA_IMPACTO = [9,  8, 10, 8];
const DATA_ONBOARD = [10, 6, 10, 8]; // null para clientes Ongoing
const DATA_RENOVACAO = ['2026-12-21', '2027-02-08', '2027-03-23', '2027-01-22']; // Unilever: data confirmada via Vitally

// Médias do ciclo anterior — atualizar antes de adicionar novos clientes
// null = sem ciclo anterior (não exibe)
const PREV_AVERAGES = { onboarding: 8.7, nps: 8.7, impacto: 9.0 };

// Histórico por cliente — cada entrada = 1 ciclo de QA
// elogios/criticas: arrays com as etapas da jornada mencionadas pelo cliente
// Etapas canônicas: 'Produto' | 'Implantação' | 'Touchpoints' | 'Atendimento' | 'Escopo Contratado'
const HISTORICO = {
  'Volvo':          [{ data: '2026-05-23', nps: 10, impacto: 9,  onboarding: 10, elogios: ['Implantação', 'Produto'],  criticas: ['Touchpoints'] }],
  'Tramontina':     [{ data: '2026-05-23', nps: 6,  impacto: 8,  onboarding: 6,  elogios: [],                          criticas: ['Escopo Contratado', 'Atendimento'] }],
  'BHP':            [{ data: '2026-05-23', nps: 10, impacto: 10, onboarding: 10, elogios: ['Implantação', 'Produto'],  criticas: ['Touchpoints'] }],
  'Unilever Foods': [{ data: '2026-06-01', nps: 8,  impacto: 8,  onboarding: 8,  elogios: ['Produto'],                criticas: ['Touchpoints'] }],
};

// Descritivos por etapa — alimenta o modal de detalhe no gráfico
const INSIGHTS = {
  'Produto': {
    descricao: 'Performance do produto Cortex Brand',
    elogios: [
      { cliente: 'Volvo',          texto: 'Curadoria executiva de veículos — relevância em vez de volume, percebida como diferencial frente a clipadoras tradicionais.' },
      { cliente: 'BHP',            texto: 'Entrega executiva valorizada; curadoria de veículos alinhada ao contexto do negócio.' },
      { cliente: 'Unilever Foods', texto: 'Produto percebido como ferramenta estratégica de gestão de mídia.' }
    ],
    criticas: []
  },
  'Implantação': {
    descricao: 'Setup da plataforma, aplicação do escopo contratado e tempo desta etapa',
    elogios: [
      { cliente: 'Volvo', texto: 'Equipe dedicada e nomeada desde o início; tempo investido no setup foi destacado como diferencial competitivo.' },
      { cliente: 'BHP',   texto: 'Dois meses de implantação cuidadosa e processo de setup personalizado ao contexto do cliente.' }
    ],
    criticas: []
  },
  'Touchpoints': {
    descricao: 'Agendas realizadas: insights, treinamentos, alinhamentos e metodologia',
    elogios: [],
    criticas: [
      { cliente: 'Volvo',          texto: 'Confusão com NPS e valoração — workshop de metodologia deveria ser conduzido no início do contrato para reduzir atrito.' },
      { cliente: 'BHP',            texto: 'Plataforma usada abaixo do potencial por ausência de trilha estruturada de treinamento e adoção.' },
      { cliente: 'Unilever Foods', texto: 'Agendas reativas, sem protagonismo analítico. Modelo proposto: 3 agendas operacionais + 1 reunião estratégica com liderança sênior para validações.' }
    ]
  },
  'Atendimento': {
    descricao: 'Tempo de resposta, solicitações e proatividade',
    elogios: [],
    criticas: [
      { cliente: 'Tramontina', texto: 'Processo para ajuste de classificações opaco — cliente ficou sem orientação clara para resolver problemas operacionais.' }
    ]
  },
  'Escopo Contratado': {
    descricao: 'Expectativa entre venda e aplicação no dia a dia, escopo contratado',
    elogios: [],
    criticas: [
      { cliente: 'Tramontina', texto: 'Limitações de cobertura descobertas apenas no onboarding — expectativa quebrada. Escopo deve ser detalhado e confirmado antes da assinatura.' }
    ]
  }
};
