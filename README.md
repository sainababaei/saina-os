# SAINA OS — Next.js implementation v1

This repository converts the approved interactive prototype into a real Next.js application.

## Included now
- Public home
- Thinking index
- Article page
- Member workspace prototype
- Admin People / Editorial / Agents prototype
- Approved visual language and curator portrait
- Supabase schema blueprint for the next phase

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Import the repository into Vercel. No environment variables are required for the current UI-only phase.

## Next phase
1. Create Supabase project
2. Run `supabase/schema.sql`
3. Add environment variables from `.env.example`
4. Implement authentication and persistent CRUD
5. Protect `/member` and `/admin`
6. Connect booking, articles, events, identity evidence and CRM
