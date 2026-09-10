# D'SAINTS — Landing Page

Cinematic landing page for **D'SAINTS**, a Filipino artisan dessert brand based in Doha, Qatar (est. 2020).

Live: [DSaints Landing Page](https://dsaints-landing-page.richwellerod.workers.dev)

See [`plan.md`](./plan.md) for the original design/creative brief.

## Stack

- React + TanStack Start (SSR) + TanStack Router
- Tailwind CSS
- Framer Motion
- Vite + Nitro (Cloudflare Workers preset)

## Development

Requires Node.js and npm.

\`\`\`sh
git clone https://github.com/Noia-kun/dsaints-landing-page.git
cd dsaints-landing-page
npm i
npm run dev
\`\`\`

## Deployment

Deploys to Cloudflare Workers via Git integration — pushes to \`main\` auto-build and deploy. Config: \`wrangler.jsonc\`.