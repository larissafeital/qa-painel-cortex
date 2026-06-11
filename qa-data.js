// qa-data.js — dados dos clientes do painel QA Onboarding
// Edite apenas este arquivo ao adicionar novos clientes.
// O painel HTML carrega este arquivo automaticamente.

const CLIENTS      = ['Volvo', 'Tramontina', 'BHP', 'Unilever Foods'];
const DATA_NPS     = [10, 6, 10, 8];
const DATA_IMPACTO = [9,  8, 10, 8];
const DATA_ONBOARD = [10, 6, 10, 8]; // null para clientes Ongoing
const DATA_RENOVACAO = ['2026-12-21', '2027-02-08', '2027-03-23', '2027-01-22']; // Unilever: data confirmada via Vitally

// Histórico por cliente — cada entrada = 1 ciclo de QA
// { data, nps, impacto, onboarding, elogios, criticas }
const HISTORICO = {
  'Volvo':          [{ data: '2026-05-23', nps: 10, impacto: 9,  onboarding: 10, elogios: 2, criticas: 1 }],
  'Tramontina':     [{ data: '2026-05-23', nps: 6,  impacto: 8,  onboarding: 6,  elogios: 0, criticas: 1 }],
  'BHP':            [{ data: '2026-05-23', nps: 10, impacto: 10, onboarding: 10, elogios: 2, criticas: 1 }],
  'Unilever Foods': [{ data: '2026-06-01', nps: 8,  impacto: 8,  onboarding: 8,  elogios: 1, criticas: 2 }],
};
