# TWA — Ficha 01

Tecnologias Web Avançadas · ISLA Gaia · 2026/27 · João Mouta (a22409272)

## Estrutura

- `twa-ficha01/` — Node + módulos ES
  - `utils.js` / `app.js` — primeiro módulo ES (`node app.js` → `tecnologias-web-avançadas`)
  - `api.js` — `fetch` à API do GitHub e gravação dos campos em `repo.json` com `fs/promises`
  - `rss.js` — extra: lê um feed RSS (XML) e imprime os 3 primeiros títulos
- `twa-vite/` — projeto Vite (template vanilla); o contador conta para baixo e mostra o valor no título do separador

## Como correr

```bash
cd twa-ficha01
node app.js
node api.js
node rss.js

cd ../twa-vite
npm install
npm run dev
```

Requisitos: Node 22.x (LTS), npm 10.x.
