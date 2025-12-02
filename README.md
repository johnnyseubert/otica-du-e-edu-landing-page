# Ótica Du & Edu - Landing Page

Landing page construída com React, TypeScript, Vite e Tailwind CSS para apresentar a Ótica Du & Edu, sua história de 15 anos e as principais marcas de lentes trabalhadas.

## Tecnologias
- React + TypeScript
- Vite
- Tailwind CSS
- clsx para composição de classes

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse em `http://localhost:5173`.

Para gerar a versão otimizada para produção:
```bash
npm run build
```

## Estrutura principal
- `src/App.tsx`: seções da página (história, marcas, explicação da receita e contato).
- `src/index.css`: estilos globais com Tailwind.
- `tailwind.config.js`: configuração do Tailwind CSS.
- `vite.config.ts`: configuração do bundler Vite.
