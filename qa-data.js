// qa-data.js — dados dos clientes do painel QA Onboarding
// Edite apenas este arquivo ao adicionar novos clientes.
// O painel HTML carrega este arquivo automaticamente.

const CLIENTS      = ['Volvo', 'Tramontina', 'BHP', 'Unilever Foods', 'Skechers', 'Vulcabras', "Insper", "Cruzeiro do Sul", "Ajinomoto", "Sicredi", "BTG Pactual", "Banco PAN", "Iguatemi", "BYD", "Intelbras", "VLI", "Amaggi", "Unilever Beauty", "Thales", "CTG Brasil", "EMAE", "KPMG", "Iretail", "Carrefour", "JTI", "CCEE", "Alpargatas", "PetroReconcavo", "Cubo Itaú", "Ancar Ivanhoe", "Grandfood", "Cesbe", "Electrolux", "Mondelez", "Organon", "Americanas", "Ultrapar", "Yara", "Sendas", "ZF Automotive", "Heineken"]; // Yara: 2 QAs (abr e jul/2026) — ver HISTORICO['Yara'], valor atual = QA mais recente
const DATA_NPS     = [10, 6, 10, 8, 9, 1, 9, 5, 7, 8, 7, 7, 8, 5, 8, 5, 10, 10, 8, 10, 7, 2, 10, 10, 10, 9, 9, 9, 7, 8, 8, 9, 9, 8, 1, 8, 5, 7, 10, 3, 5];
const DATA_IMPACTO = [9,  8, 10, 8, 8, 7, 8, 7, 6, 6, 7, 7, 8, 5, 6, 8, 7, 9, 10, 8, 8, 1, 6, 9, 8, 8, 9, 8, 2, 7, 8, 8, 9, 6, 2, 7, 8, 7, 7, 3, 10];
const DATA_ONBOARD = [10, 6, 10, 8, 9, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; // null para clientes Ongoing
const DATA_RENOVACAO = ['2026-12-21', '2027-02-08', '2027-03-23', '2027-01-22', '2027-02-08', '2026-12-08']; // Skechers/Vulcabras: via Vitally — só clientes Onboarding têm data de renovação conhecida; Ongoing ainda não têm essa data mapeada

// Médias do ciclo anterior — atualizar antes de adicionar novos clientes
// null = sem ciclo anterior (não exibe)
// Nota: em 28/07/2026 a base passou a incluir 36 clientes "Ongoing" (QA recorrente),
// além dos 6 "Onboarding" originais — por isso NPS/Impacto têm uma quebra de série aqui
// (mistura de populações), enquanto Onboarding permanece só com os 6 originais.
const PREV_AVERAGES = { onboarding: 8.6, nps: null, impacto: null };

// Histórico por cliente — cada entrada = 1 ciclo de QA
// elogios/criticas: arrays com as etapas da jornada mencionadas pelo cliente
// Etapas canônicas: 'Produto' | 'Implantação' | 'Touchpoints' | 'Atendimento' | 'Escopo Contratado'
const HISTORICO = {
  'Volvo':          [{ data: '2026-05-23', nps: 10, impacto: 9,  onboarding: 10, elogios: ['Implantação', 'Produto'],  criticas: ['Touchpoints'] }],
  'Tramontina':     [{ data: '2026-05-23', nps: 6,  impacto: 8,  onboarding: 6,  elogios: [],                          criticas: ['Escopo Contratado', 'Atendimento'] }],
  'BHP':            [{ data: '2026-05-23', nps: 10, impacto: 10, onboarding: 10, elogios: ['Implantação', 'Produto'],  criticas: ['Touchpoints'] }],
  'Unilever Foods': [{ data: '2026-06-01', nps: 8,  impacto: 8,  onboarding: 8,  elogios: ['Produto'],                criticas: ['Touchpoints'] }],
  'Skechers':       [{ data: '2026-06-17', nps: 9,  impacto: 8,  onboarding: 9,  elogios: ['Produto'],                criticas: ['Escopo Contratado', 'Touchpoints'] }],
  'Vulcabras':      [{ data: '2026-06-19', nps: 1,  impacto: 7,  onboarding: 1,  elogios: ['Implantação'],            criticas: ['Atendimento', 'Touchpoints'] }],
  "Insper": [{ data: "2026-03-09", nps: 9, impacto: 8, onboarding: null, elogios: ["Touchpoints", "Atendimento"], criticas: ["Atendimento", "Touchpoints"] }],
  "Cruzeiro do Sul": [{ data: "2026-03-20", nps: 5, impacto: 7, onboarding: null, elogios: [], criticas: ["Produto", "Atendimento"] }],
  "Ajinomoto": [{ data: "2026-03-25", nps: 7, impacto: 6, onboarding: null, elogios: ["Produto"], criticas: ["Implantação", "Atendimento"] }],
  "Sicredi": [{ data: "2026-04-08", nps: 8, impacto: 6, onboarding: null, elogios: ["Produto"], criticas: ["Produto", "Produto"] }],
  "BTG Pactual": [{ data: "2026-04-14", nps: 7, impacto: 7, onboarding: null, elogios: ["Atendimento", "Escopo Contratado"], criticas: ["Produto", "Atendimento"] }],
  "Banco PAN": [{ data: "2026-04-14", nps: 7, impacto: 7, onboarding: null, elogios: ["Escopo Contratado", "Atendimento"], criticas: ["Produto", "Produto"] }],
  "Iguatemi": [{ data: "2026-04-17", nps: 8, impacto: 8, onboarding: null, elogios: ["Produto"], criticas: ["Produto", "Touchpoints"] }],
  "BYD": [{ data: "2026-04-22", nps: 5, impacto: 5, onboarding: null, elogios: ["Atendimento"], criticas: ["Produto", "Escopo Contratado"] }],
  "Intelbras": [{ data: "2026-04-23", nps: 8, impacto: 6, onboarding: null, elogios: ["Produto", "Touchpoints"], criticas: ["Atendimento"] }],
  "VLI": [{ data: "2026-04-24", nps: 5, impacto: 8, onboarding: null, elogios: ["Atendimento"], criticas: ["Produto", "Atendimento"] }],
  "Amaggi": [{ data: "2026-04-28", nps: 10, impacto: 7, onboarding: null, elogios: ["Produto", "Atendimento"], criticas: ["Produto"] }],
  "Unilever Beauty": [{ data: "2026-05-18", nps: 10, impacto: 9, onboarding: null, elogios: ["Escopo Contratado", "Produto"], criticas: ["Produto", "Produto"] }],
  "Thales": [{ data: "2026-05-19", nps: 8, impacto: 10, onboarding: null, elogios: ["Produto", "Atendimento"], criticas: ["Produto", "Touchpoints"] }],
  "CTG Brasil": [{ data: "2026-03-17", nps: 10, impacto: 8, onboarding: null, elogios: ["Produto", "Atendimento"], criticas: ["Atendimento"] }],
  "EMAE": [{ data: "2026-04-02", nps: 7, impacto: 8, onboarding: null, elogios: ["Produto"], criticas: ["Produto"] }],
  "KPMG": [{ data: "2026-04-11", nps: 2, impacto: 1, onboarding: null, elogios: [], criticas: ["Escopo Contratado", "Implantação"] }],
  "Iretail": [{ data: "2026-04-15", nps: 10, impacto: 6, onboarding: null, elogios: ["Produto"], criticas: ["Produto", "Touchpoints"] }],
  "Carrefour": [{ data: "2026-04-17", nps: 10, impacto: 9, onboarding: null, elogios: ["Escopo Contratado", "Produto"], criticas: ["Produto", "Touchpoints"] }],
  "JTI": [{ data: "2026-04-22", nps: 10, impacto: 8, onboarding: null, elogios: ["Atendimento"], criticas: ["Produto", "Atendimento"] }],
  "CCEE": [{ data: "2026-04-23", nps: 9, impacto: 8, onboarding: null, elogios: ["Produto", "Escopo Contratado"], criticas: ["Produto", "Produto"] }],
  "Alpargatas": [{ data: "2026-04-29", nps: 9, impacto: 9, onboarding: null, elogios: ["Atendimento", "Produto"], criticas: ["Atendimento", "Produto"] }],
  "PetroReconcavo": [{ data: "2026-04-30", nps: 9, impacto: 8, onboarding: null, elogios: ["Produto", "Atendimento"], criticas: ["Produto"] }],
  "Cubo Itaú": [{ data: "2026-05-08", nps: 7, impacto: 2, onboarding: null, elogios: ["Produto", "Atendimento"], criticas: ["Touchpoints"] }],
  "Ancar Ivanhoe": [{ data: "2026-06-15", nps: 8, impacto: 7, onboarding: null, elogios: ["Produto"], criticas: ["Produto", "Atendimento"] }],
  "Grandfood": [{ data: "2026-03-30", nps: 8, impacto: 8, onboarding: null, elogios: ["Escopo Contratado", "Produto"], criticas: ["Produto", "Atendimento"] }],
  "Cesbe": [{ data: "2026-04-07", nps: 9, impacto: 8, onboarding: null, elogios: ["Atendimento", "Produto"], criticas: ["Produto"] }],
  "Electrolux": [{ data: "2026-03-30", nps: 9, impacto: 9, onboarding: null, elogios: ["Produto", "Escopo Contratado"], criticas: ["Produto", "Atendimento"] }],
  "Mondelez": [{ data: "2026-04-06", nps: 8, impacto: 6, onboarding: null, elogios: ["Produto"], criticas: ["Produto", "Touchpoints"] }],
  "Organon": [{ data: "2026-04-17", nps: 1, impacto: 2, onboarding: null, elogios: ["Atendimento"], criticas: ["Produto", "Produto"] }],
  "Americanas": [{ data: "2026-04-17", nps: 8, impacto: 7, onboarding: null, elogios: ["Escopo Contratado"], criticas: ["Touchpoints", "Produto"] }],
  "Ultrapar": [{ data: "2026-04-22", nps: 5, impacto: 8, onboarding: null, elogios: ["Atendimento"], criticas: ["Produto", "Atendimento"] }],
  "Yara": [
    { data: "2026-04-29", nps: 9, impacto: 9, onboarding: null, elogios: ["Produto", "Atendimento"], criticas: ["Produto"] },
    { data: "2026-07-02", nps: 7, impacto: 7, onboarding: null, elogios: ["Produto", "Atendimento"], criticas: ["Produto"] }
  ],
  "Sendas": [{ data: "2026-04-30", nps: 10, impacto: 7, onboarding: null, elogios: ["Escopo Contratado", "Atendimento"], criticas: ["Produto", "Touchpoints"] }],
  "ZF Automotive": [{ data: "2026-05-19", nps: 3, impacto: 3, onboarding: null, elogios: ["Atendimento"], criticas: ["Produto", "Escopo Contratado"] }],
  "Heineken": [{ data: "2026-05-21", nps: 5, impacto: 10, onboarding: null, elogios: ["Atendimento"], criticas: ["Produto", "Touchpoints"] }],
};

// Descritivos por etapa — alimenta o modal de detalhe no gráfico
const INSIGHTS = {
  'Produto': {
    descricao: 'Performance do produto Cortex Brand',
    elogios: [
      { cliente: 'Volvo',          texto: 'Curadoria executiva de veículos — relevância em vez de volume, percebida como diferencial frente a clipadoras tradicionais.' },
      { cliente: 'BHP',            texto: 'Entrega executiva valorizada; curadoria de veículos alinhada ao contexto do negócio.' },
      { cliente: 'Unilever Foods', texto: 'Produto percebido como ferramenta estratégica de gestão de mídia.' },
      { cliente: 'Skechers',       texto: 'Qualidade do clipping e aderência ao perfil editorial reconhecidas como ponto forte do produto já no onboarding.' },
      { cliente: "Ajinomoto", texto: "Cliente elogia a parte de Reputação da plataforma, com comparação de NPS entre concorrentes." },
      { cliente: "Sicredi", texto: "Cliente considera a plataforma intuitiva no uso geral." },
      { cliente: "Iguatemi", texto: "Cliente avalia como alto o valor e o impacto da parceria para o negócio." },
      { cliente: "Intelbras", texto: "Cliente valoriza a usabilidade da plataforma e a qualidade do atendimento prestado." },
      { cliente: "Amaggi", texto: "Cliente considera que a plataforma atende plenamente aos objetivos de monitoramento, análise de dados e contexto." },
      { cliente: "Unilever Beauty", texto: "Cliente avalia positivamente a classificação das matérias feita pela plataforma." },
      { cliente: "Thales", texto: "Cliente elogia a precisão do monitoramento de notícias." },
      { cliente: "CTG Brasil", texto: "Cliente considera a ferramenta essencial para recuperar indicadores de comunicação da área." },
      { cliente: "EMAE", texto: "Cliente reconhece que a plataforma atende ao objetivo de mensuração e geração de relatórios." },
      { cliente: "Iretail", texto: "Cliente considera a qualidade dos dados e a valoração por alcance superiores à metodologia de outros fornecedores do mercado." },
      { cliente: "Carrefour", texto: "Cliente destaca o NPS como métrica universal e essencial para explicar o trabalho da área de comunicação." },
      { cliente: "CCEE", texto: "Cliente considera que a solução mudou completamente a forma como a equipe trabalha a leitura de resultados de imprensa." },
      { cliente: "Alpargatas", texto: "Cliente reconhece a redução de matérias lixo nos relatórios, atribuída ao novo agente de IA." },
      { cliente: "PetroReconcavo", texto: "Cliente confirma que a Cortex atendeu aos objetivos gerais da contratação, com serviço maduro e consolidado." },
      { cliente: "Cubo Itaú", texto: "Cliente reconhece que a plataforma viabilizou uma mensuração de reputação antes inexistente." },
      { cliente: "Ancar Ivanhoe", texto: "Cliente elogia a usabilidade e experiência geral da plataforma." },
      { cliente: "Grandfood", texto: "Cliente considera os dados quantitativos funcionais para a construção de uma base comparável de Share of Voice." },
      { cliente: "Cesbe", texto: "Cliente reconhece que a revisão da taxonomia e a criação do agente de clipping resolveram as falhas de captura anteriores." },
      { cliente: "Electrolux", texto: "Cliente destaca que a inteligência de dados da plataforma permitiu defender o valor da área de comunicação para o negócio." },
      { cliente: "Mondelez", texto: "Cliente reconhece boa performance da plataforma e valoriza os alertas por WhatsApp." },
      { cliente: "Yara", texto: "Cliente considera que o projeto cumpre plenamente os objetivos estratégicos de comunicação, com insights valiosos sobre marca e concorrentes." },
      { cliente: "Yara", texto: "Cliente reconhece que a recorrência de erros no clipping diminuiu e que a captura atingiu 99,9% de eficácia após ajustes." }
    ],
    criticas: [
      { cliente: "Cruzeiro do Sul", texto: "Cliente relata dados pouco fidedignos, com indicador de impacto com variações inexplicáveis que exigem ajuste manual." },
      { cliente: "Sicredi", texto: "Cliente relata erro grave de valoração (zero a mais) que comprometeu indicadores de um ano inteiro e as metas do ano seguinte." },
      { cliente: "Sicredi", texto: "Cliente aponta lentidão no carregamento de matérias para revisão de classificação e falta de intuitividade na busca da biblioteca de publicações." },
      { cliente: "BTG Pactual", texto: "Cliente relata bugs ocasionais na nova plataforma que impedem o carregamento de dashboards." },
      { cliente: "Banco PAN", texto: "Cliente relata bugs ocasionais na nova plataforma que impedem o carregamento de dashboards." },
      { cliente: "Banco PAN", texto: "Cliente sente falta de um painel centralizado para dados de PR e de treinamento para novos membros da equipe." },
      { cliente: "Iguatemi", texto: "Cliente aponta desafios na captura de dados e na tierização de veículos." },
      { cliente: "BYD", texto: "Cliente relata performance ruim da plataforma, com bugs e lentidão no carregamento de análises." },
      { cliente: "VLI", texto: "Cliente exige ajustes estruturais na classificação de sentimento para evitar retrabalho recorrente." },
      { cliente: "Amaggi", texto: "Cliente pede melhoria no SLA de captação de dados, importante para gestão de crises." },
      { cliente: "Unilever Beauty", texto: "Cliente relata falhas na captura de dados e duplicidade na curadoria do clipping, com matérias repetidas nas newsletters." },
      { cliente: "Unilever Beauty", texto: "Cliente pede ajuste de responsividade da newsletter para dispositivos móveis." },
      { cliente: "Thales", texto: "Cliente relata dificuldades com a classificação de veículos e a automação de relatórios." },
      { cliente: "EMAE", texto: "Cliente relata necessidade de acompanhamento manual devido a inconsistências pontuais, como falhas de classificação e atrasos." },
      { cliente: "Iretail", texto: "Cliente relata usabilidade e experiência de navegação ruins na plataforma." },
      { cliente: "Carrefour", texto: "Cliente aponta SLA de captação do impresso como ponto de melhoria." },
      { cliente: "JTI", texto: "Cliente relata regressão na qualidade do serviço após mudanças na equipe, com lacunas de monitoramento em veículos regionais." },
      { cliente: "CCEE", texto: "Cliente relata falhas nos alertas de WhatsApp e gargalos na velocidade de indexação de matérias." },
      { cliente: "CCEE", texto: "Cliente aponta discrepâncias em relatórios mensais que geram retrabalho." },
      { cliente: "Alpargatas", texto: "Cliente sente falta de dados comparativos de mercado para além do histórico interno." },
      { cliente: "PetroReconcavo", texto: "Cliente relata inconsistências iniciais nas notícias coletadas, como fontes incorretas ou notícias relevantes não capturadas." },
      { cliente: "Ancar Ivanhoe", texto: "Cliente relata falhas de captação, alcance e valoração, inclusive em conteúdos de TV." },
      { cliente: "Grandfood", texto: "Cliente relata lentidão na captura manual de mídia." },
      { cliente: "Cesbe", texto: "Cliente relata falhas de captura no início, com matérias publicadas que não entravam na newsletter mesmo citando o nome da empresa explicitamente." },
      { cliente: "Electrolux", texto: "Cliente aponta falhas na classificação e duplicação de matérias que comprometem a confiança nos dados." },
      { cliente: "Mondelez", texto: "Cliente considera o produto atual complexo de usar para o perfil da empresa." },
      { cliente: "Organon", texto: "Cliente relata falha de captação de matérias, erro de curadoria de clipping e problemas de classificação de notícias." },
      { cliente: "Organon", texto: "Cliente afirma ter perdido a confiança na Cortex por problemas básicos não resolvidos ao longo de duas vigências contratuais." },
      { cliente: "Americanas", texto: "Cliente relata insegurança com a confiabilidade dos dados, exigindo ajuste manual em volume maior de matérias do que no passado." },
      { cliente: "Ultrapar", texto: "Cliente relata painéis desatualizados e problemas graves na captura de matérias, como transcrição incorreta ou embaralhada." },
      { cliente: "Yara", texto: "Cliente relata necessidade de intervenção manual no processo de clipping, gerando custo operacional ineficiente." },
      { cliente: "Sendas", texto: "Cliente aponta que a usabilidade e o tempo de carregamento da plataforma precisam melhorar." },
      { cliente: "ZF Automotive", texto: "Cliente relata inconsistências recorrentes e retrabalho constante, com 156 solicitações técnicas reportadas." },
      { cliente: "Heineken", texto: "Cliente relata dificuldades na classificação precisa de resultados e falhas no tempo de atualização dos painéis." },
      { cliente: "Yara", texto: "Cliente relata dificuldade na interpretação de métricas de audiência, que ainda exige correções manuais recorrentes." }
    ]
  },
  'Implantação': {
    descricao: 'Setup da plataforma, aplicação do escopo contratado e tempo desta etapa',
    elogios: [
      { cliente: 'Volvo', texto: 'Equipe dedicada e nomeada desde o início; tempo investido no setup foi destacado como diferencial competitivo.' },
      { cliente: 'BHP',       texto: 'Dois meses de implantação cuidadosa e processo de setup personalizado ao contexto do cliente.' },
      { cliente: 'Vulcabras', texto: 'Cortex Day reconhecido como ponto positivo do onboarding — único aspecto avaliado favoravelmente pelo cliente.' }
    ],
    criticas: [
      { cliente: "Ajinomoto", texto: "Cliente relata implantação longa e desgastante para ajustar diferenças de metodologia com a agência FSB e adaptar o modelo à complexidade da empresa." },
      { cliente: "KPMG", texto: "Cliente pede mais clareza no cronograma de entregas customizadas." }
    ]
  },
  'Touchpoints': {
    descricao: 'Agendas realizadas: insights, treinamentos, alinhamentos e metodologia',
    elogios: [
      { cliente: "Insper", texto: "Cliente valoriza a condução comercial e a negociação do contrato, com bom atendimento por e-mail e WhatsApp." },
      { cliente: "Intelbras", texto: "Cliente reconhece maturidade analítica conquistada ao longo da parceria e maior proatividade do time comercial." }
    ],
    criticas: [
      { cliente: 'Volvo',          texto: 'Confusão com NPS e valoração — workshop de metodologia deveria ser conduzido no início do contrato para reduzir atrito.' },
      { cliente: 'BHP',            texto: 'Plataforma usada abaixo do potencial por ausência de trilha estruturada de treinamento e adoção.' },
      { cliente: 'Unilever Foods', texto: 'Agendas reativas, sem protagonismo analítico. Modelo proposto: 3 agendas operacionais + 1 reunião estratégica com liderança sênior para validações.' },
      { cliente: 'Skechers',       texto: 'Ausência de rotina estruturada de insights — cliente identificou a criação de um ritual regular de análise como próxima evolução necessária da parceria.' },
      { cliente: 'Vulcabras',      texto: 'Diferenças de metodologia Cortex não comunicadas adequadamente — cliente chegou ao onboarding sem entender as particularidades da abordagem.' },
      { cliente: "Insper", texto: "Cliente sente falta de sugestões proativas de insights e pede cadência mensal de apresentação de resultados." },
      { cliente: "Iguatemi", texto: "Cliente reconhece que ainda precisa consumir mais do potencial pleno da plataforma e pede mais treinamento." },
      { cliente: "Thales", texto: "Cliente pede explicação mais detalhada sobre a metodologia de valoração de anúncios." },
      { cliente: "Iretail", texto: "Cliente reconhece dificuldade em se engajar na jornada e pede mais proximidade e planos de ação concretos do CS." },
      { cliente: "Carrefour", texto: "Cliente reconhece que o time ainda precisa evoluir na adoção da metodologia." },
      { cliente: "Cubo Itaú", texto: "Cliente reconhece falta de priorização interna e de estratégia para apresentar os dados aos clientes finais." },
      { cliente: "Mondelez", texto: "Cliente pede atendimento mais consultivo e recorrente, compatível com o perfil enterprise da conta." },
      { cliente: "Americanas", texto: "Cliente relata falta de visão estratégica e proatividade no atendimento, com representante presente só na primeira metade das reuniões." },
      { cliente: "Sendas", texto: "Cliente pede insights mais analíticos, focados no porquê da repercussão dos temas." },
      { cliente: "Heineken", texto: "Cliente pede que as reuniões mensais evoluam para análises mais profundas, e reclama da perda de conhecimento causada pela rotatividade da equipe." }
    ]
  },
  'Atendimento': {
    descricao: 'Tempo de resposta, solicitações e proatividade',
    elogios: [
      { cliente: "Insper", texto: "Cliente destaca a iniciativa do CS de fazer uma videochamada para resolver uma dificuldade de comunicação." },
      { cliente: "BTG Pactual", texto: "Cliente elogia a evolução do atendimento com a chegada de uma profissional sênior, trazendo análises mais qualitativas." },
      { cliente: "Banco PAN", texto: "Cliente reconhece melhoria analítica trazida pela nova equipe de atendimento." },
      { cliente: "BYD", texto: "Cliente reconhece boa qualidade do atendimento de CS e do clipping fornecido pelos parceiros." },
      { cliente: "VLI", texto: "Cliente reconhece melhoria no cumprimento de SLA pelo suporte técnico e pelo atendimento direto de CS." },
      { cliente: "Amaggi", texto: "Cliente elogia o atendimento de suporte e de sucesso do cliente." },
      { cliente: "Thales", texto: "Cliente avalia positivamente a rapidez e efetividade do atendimento da conta." },
      { cliente: "CTG Brasil", texto: "Cliente elogia o suporte, avaliado como parceiro e muito ágil na resposta." },
      { cliente: "JTI", texto: "Cliente reconhece o esforço pessoal da equipe de CS no atendimento." },
      { cliente: "Alpargatas", texto: "Cliente elogia a proatividade do CS e a mudança no modelo de atendimento desde 2026." },
      { cliente: "PetroReconcavo", texto: "Cliente elogia a eficiência da plataforma na extração de dados e no atendimento." },
      { cliente: "Cubo Itaú", texto: "Cliente elogia a proatividade da Cortex em insistir e chamar para reuniões de acompanhamento." },
      { cliente: "Cesbe", texto: "Cliente elogia a prestatividade da CS e o bom relacionamento estabelecido com a equipe de assessoria." },
      { cliente: "Organon", texto: "Cliente reconhece qualidade no atendimento de CS." },
      { cliente: "Ultrapar", texto: "Cliente reconhece que o suporte funciona bem para pedidos mais básicos." },
      { cliente: "Yara", texto: "Cliente avalia com nota alta o atendimento e a frente comercial da conta." },
      { cliente: "Sendas", texto: "Cliente elogia a qualidade do atendimento de CS." },
      { cliente: "ZF Automotive", texto: "Cliente reconhece que a equipe de suporte e CS é solícita no atendimento via WhatsApp." },
      { cliente: "Heineken", texto: "Cliente reconhece qualidade no atendimento de CS e no SLA de captação." },
      { cliente: "Yara", texto: "Cliente elogia a melhoria nos canais de comunicação, como o WhatsApp, para o alinhamento do dia a dia." }
    ],
    criticas: [
      { cliente: 'Tramontina', texto: 'Processo para ajuste de classificações opaco — cliente ficou sem orientação clara para resolver problemas operacionais.' },
      { cliente: 'Vulcabras',  texto: 'Ausência de atendimento consultivo ao longo do onboarding — cliente sinalizou que esperava acompanhamento mais proativo e personalizado.' },
      { cliente: "Insper", texto: "Cliente pede mais agilidade em relatórios urgentes e mais transparência sobre quem está tratando cada solicitação." },
      { cliente: "Cruzeiro do Sul", texto: "Cliente relata que correções solicitadas não são refletidas no sistema, exigindo pedidos repetidos e causando atraso na entrega de relatórios." },
      { cliente: "Ajinomoto", texto: "Cliente ficou sem ponto focal de atendimento por um período longo entre a saída de um CS e a chegada do substituto." },
      { cliente: "BTG Pactual", texto: "Cliente expressa preocupação com a continuidade do atendimento após a saída da profissional sênior responsável pela conta." },
      { cliente: "Intelbras", texto: "Cliente faz ressalva ao atendimento de períodos anteriores da parceria." },
      { cliente: "VLI", texto: "Cliente aponta que o atendimento comercial precisa de mais proximidade e que mudanças na equipe da Cortex impactaram o projeto." },
      { cliente: "CTG Brasil", texto: "Cliente sente falta de acompanhamento e execução dos pontos definidos após as agendas." },
      { cliente: "JTI", texto: "Cliente percebe que o bom atendimento depende do esforço pessoal do CS, não de uma estrutura consistente da Cortex." },
      { cliente: "Alpargatas", texto: "Cliente pede mais agilidade e protocolos de suporte em tempo real durante situações de crise." },
      { cliente: "Ancar Ivanhoe", texto: "Cliente pede maior agilidade do suporte para demandas urgentes." },
      { cliente: "Grandfood", texto: "Cliente relata indisponibilidade do CS em alguns acionamentos e falta de reuniões e feedbacks às solicitações." },
      { cliente: "Electrolux", texto: "Cliente sente falta de recorrência de insights e mais agilidade na organização do atendimento." },
      { cliente: "Ultrapar", texto: "Cliente percebe queda na qualidade do atendimento após mudanças na equipe." }
    ]
  },
  'Escopo Contratado': {
    descricao: 'Expectativa entre venda e aplicação no dia a dia, escopo contratado',
    elogios: [
      { cliente: "BTG Pactual", texto: "Cliente valoriza a inclusão de concorrentes no escopo, que permitiu maior profundidade comparativa nas análises." },
      { cliente: "Banco PAN", texto: "Cliente valoriza o histórico de parceria desde 2018 e a unificação do serviço sob o mesmo fornecedor." },
      { cliente: "Unilever Beauty", texto: "Cliente considera que os objetivos seguem sendo plenamente atingidos pela parceria." },
      { cliente: "Carrefour", texto: "Cliente considera que a parceria superou expectativas, com forte reciprocidade interna no uso dos dados." },
      { cliente: "CCEE", texto: "Cliente reconhece que a solução atende bem às necessidades diárias de reporte e acompanhamento estratégico." },
      { cliente: "Grandfood", texto: "Cliente decidiu unificar todo o serviço de clipping com a Cortex, ampliando o investimento para centralizar dados." },
      { cliente: "Electrolux", texto: "Cliente valoriza a comparação com a concorrência, antes inexistente, para identificar temas e peso na mídia." },
      { cliente: "Americanas", texto: "Cliente considera valioso o conceito da solução de mensuração orientada a dados." },
      { cliente: "Sendas", texto: "Cliente confirma que suas expectativas foram atendidas e reconhece a consolidação de uma cultura orientada a dados." }
    ],
    criticas: [
      { cliente: 'Tramontina', texto: 'Limitações de cobertura descobertas apenas no onboarding — expectativa quebrada. Escopo deve ser detalhado e confirmado antes da assinatura.' },
      { cliente: 'Skechers',   texto: 'Necessidade de revisão de escopo e redesenho de GTM identificados como próximos passos — oportunidade de alinhar melhor o que é entregável com o que o cliente precisa.' },
      { cliente: "BYD", texto: "Cliente percebe descasamento entre o escopo contratado e sua maturidade de uso, com dificuldade em monitorar novas marcas chinesas concorrentes." },
      { cliente: "KPMG", texto: "Cliente relata expectativa de resultados descalibrada frente à proposta técnica contratada, com necessidade de redefinição de escopo." },
      { cliente: "ZF Automotive", texto: "Cliente percebe descasamento entre o escopo desenhado e a maturidade da conta, rejeitando a renovação pelo baixo valor entregue." }
    ]
  }
};
