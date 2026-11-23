// Dados retirados do Relatório Final — Etapa 3 (seções 11.1 e 11.2).
// Para adicionar uma foto, coloque o arquivo em public/media e preencha o campo "foto".

export const equipe = [
  {
    nome: 'Magno Rocha',
    matricula: '2510504',
    frente: 'Coordenação e integração',
    foto: '/media/magno.jpg',
    resumo:
      'Coordenou a equipe e garantiu que as partes do sistema se encaixassem do repositório até a publicação.',
    fez: [
      'Definiu o contrato de rotas da aplicação',
      'Revisou os Pull Requests antes de cada merge',
      'Cuidou do deploy na Vercel e do quadro de issues',
      'Sprint 1: repositório, autenticação e isolamento de carteira (RF01–RF03)',
    ],
  },
  {
    nome: 'Rodrigo Adelino de Moura',
    matricula: '2516236',
    frente: 'Dados e regras de negócio',
    foto: null,
    resumo:
      'Responsável pelo banco de dados e pelas regras que movem um lead pelas cinco etapas do funil.',
    fez: [
      'Modelou o banco no PostgreSQL (Supabase)',
      'Escreveu as políticas de segurança com Row Level Security',
      'Implementou as regras do funil e o histórico de movimentos',
      'Sprints 1 e 2: esquema com RLS, CRUD de leads e filtros',
    ],
  },
  {
    nome: 'Artur de Araújo Rodrigues Pereira',
    matricula: '2510430',
    frente: 'Integrações',
    foto: null,
    resumo:
      'Conectou o Proxpec ao mundo de fora: dados reais de comércios e importação de planilhas.',
    fez: [
      'Construiu a busca de comércios no OpenStreetMap',
      'Implementou a importação de leads por CSV',
      'Criou a função serverless que consulta o Overpass',
      'Sprints 2 e 3: importação de CSV, busca e templates',
    ],
  },
  {
    nome: 'Kévin Barbosa Bastos',
    matricula: '2510387',
    frente: 'Interface',
    foto: null,
    resumo:
      'Desenhou e construiu as telas, pensando primeiro no celular de quem prospecta na rua.',
    fez: [
      'Desenvolveu as telas e os componentes reutilizáveis',
      'Garantiu a responsividade mobile-first (360 px a 1920 px)',
      'Trabalhou no disparo via wa.me e no ajuste mobile',
      'Sprints 3 e 4: templates, disparo e layout responsivo',
    ],
  },
  {
    nome: 'Carlos Emanuel Pinho da Silva',
    matricula: '2510358',
    frente: 'Painel e qualidade',
    foto: '/media/carlos.jpg',
    resumo:
      'Cuidou dos números que mostram se a prospecção está funcionando e da qualidade da entrega.',
    fez: [
      'Construiu os indicadores de conversão do painel',
      'Conduziu os testes do sistema',
      'Escreveu o roteiro de demonstração',
      'Sprint 4: painel, exportação CSV e retenção automática (RF14, RF16, RF17)',
    ],
  },
]
