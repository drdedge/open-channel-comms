# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the SilentSpeak marketing website, built with React, TypeScript, Vite, and shadcn/ui components. The project was originally created with Lovable and is deployed to GitHub Pages at `/silentspeak-website/`.

## Essential Commands

```bash
# Install dependencies
npm i

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build
npm run preview

# Lint the codebase
npm run lint
```

## Architecture

### Deployment Configuration
- **Base path**: `/silentspeak-website/` - configured in both `vite.config.ts` (base) and `App.tsx` (BrowserRouter basename)
- Both configurations must match for routing to work correctly on GitHub Pages

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build tool**: Vite
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Data fetching**: TanStack Query (React Query)
- **Backend**: Supabase (client configured in `src/integrations/supabase/client.ts`)

### Project Structure
- `src/components/` - Reusable React components
  - `src/components/ui/` - shadcn/ui component library (managed by shadcn)
- `src/pages/` - Route-level page components
- `src/integrations/` - External service integrations (Supabase)
- `src/lib/` - Utility functions
- `src/hooks/` - Custom React hooks

### Routing
All routes are defined in `App.tsx`. The app uses:
- `BrowserRouter` with basename `/silentspeak-website/`
- Catch-all `*` route for 404 handling
- Custom routes must be added ABOVE the catch-all route

### Path Aliases
The `@/` alias points to `src/`, configured in `vite.config.ts`:
```typescript
import Component from "@/components/Component";
```

### Styling
- Uses Tailwind CSS with custom configuration in `tailwind.config.ts`
- shadcn/ui components use class-variance-authority (CVA) for variants
- Utility function `cn()` from `@/lib/utils` for conditional class merging