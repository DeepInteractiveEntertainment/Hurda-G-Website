# HURDA-G

Official website: https://hurda-g.com

## Local development

Requires Node.js 22.

```sh
npm ci
npm run dev
```

## Production / Cloudflare Pages

```sh
npm ci
npm run build
```

Next.js exports the complete static site to `out/`. Cloudflare Pages uses `npm run build` with output directory `out`. No server or Functions are required.

The source, optimized public media, and dependency lockfile are versioned here. Generated builds, local settings, and model-export scratch files are excluded.

The contact form on the studio website opens the visitor's email application.
