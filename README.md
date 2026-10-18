# TaskMatrix — Sprint 14 MVP

**Week 14 · Track A: Next.js Authentication Architecture & Route Guards**

This walking skeleton provides account registration, sign-in, protected routing, and a responsive dashboard shell.

## Features
- Next.js App Router: `/login`, `/register`, and protected `/dashboard`
- Supabase Auth with server actions and SSR cookie sessions
- Middleware route guards and redirects for signed-in/signed-out users
- Zustand global auth store hydrated with the verified user payload
- Responsive interface, form validation, pending/error/success states, and sign out

## Setup
Requires Node.js 20.9+ and a Supabase project.

1. Run `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add your Supabase project URL and anon/publishable key.
4. Enable Email auth in Supabase. Configure the local site URL as `http://localhost:3000`.
5. Run `npm run dev` and open `http://localhost:3000`.

Required variables:
```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY
```
Never commit real credentials. If email confirmation is enabled, confirm the email before signing in.

## Route access
| Route | Access | Purpose |
|---|---|---|
| `/` | Public | Redirects to login |
| `/login` | Public | Email/password sign in |
| `/register` | Public | Create account |
| `/dashboard` | Protected | Verified user dashboard |

## Submission verification
- [ ] Register a new user and verify it appears in Supabase Authentication.
- [ ] Sign in and confirm the dashboard displays the current user's name/email.
- [ ] Visit `/dashboard` in a signed-out/incognito session and confirm redirect to login.
- [ ] Sign out and confirm the dashboard is protected again.
- [ ] Run `npm run lint` and `npm run build` after setting environment variables.

## Sprint boundary
This is the authentication and routing MVP, not the complete task manager. Task CRUD, database schema integration, and deployment configuration are follow-up work.