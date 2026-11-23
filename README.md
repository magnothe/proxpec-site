# Proxpec — site de apresentação

Site em React (Vite) com duas telas:

- `/` — vídeo de demonstração e descrição do sistema
- `/equipe` — integrantes com foto e o que cada um fez

## Rodar

```bash
npm install
npm run dev
```

Build de produção: `npm run build` (gera a pasta `dist`).

## Editar

- Textos da equipe: `src/data/equipe.js`
- Fotos e vídeo: `public/media/`
  - Para pôr a foto de outro integrante, salve em `public/media/nome.jpg` e preencha `foto: '/media/nome.jpg'`.
- Deploy na Vercel: o `vercel.json` já faz a reescrita das rotas para o `index.html`.
