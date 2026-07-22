# SAINA OS — Thinking Foundation

Production-ready Next.js foundation for sainababaei.com.

## Included
- Home page connected to the featured essay
- Markdown-based content system in `content/articles`
- 10 launch essays
- Dynamic article routes at `/thinking/[slug]`
- Article metadata, canonical URLs and Article JSON-LD
- Related articles and conversion CTAs
- Dynamic sitemap including every published essay
- Responsive editorial layout

## Publishing a new article
1. Duplicate a file in `content/articles`.
2. Change the frontmatter and body.
3. Commit and push to `main`.
4. Vercel automatically rebuilds and publishes the article.

## Local run
```bash
npm install
npm run dev
```

## Production
Vercel should use the repository root. No environment variables are required for this content-only release.
