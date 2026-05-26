# RapYard S1JS

A full-stack monorepo powering the RapYard platform.

## Features
- Next.js App Router
- Supabase Auth (Email, OAuth, Magic Links)
- Supabase Storage (Audio Upload)
- Supabase Realtime (Cyphers + Battles)
- Zustand Global State
- GitHub Actions CI
- Vercel Deployment

## Dev
pnpm install  
pnpm --filter rapyard-web dev

## Build
pnpm --filter rapyard-web build

## Env Vars
SUPABASE_URL  
SUPABASE_SERVICE_ROLE_KEY  
NEXT_PUBLIC_SUPABASE_URL  
NEXT_PUBLIC_SUPABASE_ANON_KEY  
