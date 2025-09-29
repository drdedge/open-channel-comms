# SilentSpeak Marketing Website

A professional fundraising website for SilentSpeak™ - a patent-pending AI tool that helps people express themselves when words are hard to find.

**Live Site**: Deployed to GitHub Pages at `/silentspeak-website/`

## About SilentSpeak

SilentSpeak gives every person a voice and a choice. It creates safe and authentic communication across therapy, healthcare, neurodiversity support, and beyond - helping anxious, shy, and neurodivergent individuals participate silently in group settings.

### Key Features

- **Research-Backed**: Content derived from clinical research paper with survey data (81% of teens said it would help)
- **Interactive Carousels**: Features and applications showcased with smooth navigation
- **Professional Design**: Warm Trust color theme optimized for fundraising (Navy, Sage Green, Gold)
- **Responsive Layout**: Mobile-first design with smooth animations
- **Demo Request Integration**: Supabase-powered form for partnership inquiries

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Backend**: Supabase
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## Development

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd silentspeak-website

# Install dependencies
npm i

# Start development server (runs on port 8080)
npm run dev
```

### Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run build:dev # Build in development mode
npm run preview   # Preview production build
npm run lint      # Lint the codebase
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Deployment Configuration:**
- Base path: `/silentspeak-website/`
- Configured in `vite.config.ts` and `App.tsx`
- GitHub Actions workflow: `.github/workflows/deploy.yml`

## Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # shadcn/ui components
│   ├── Layout.tsx    # Header + Footer wrapper
│   ├── Hero.tsx      # Landing page hero
│   ├── Features.tsx  # Features carousel
│   └── Solutions.tsx # Applications carousel
├── pages/            # Route components
│   ├── Index.tsx     # Home page
│   ├── About.tsx     # About page
│   └── NotFound.tsx  # 404 page
├── data/             # Content data
│   └── features.ts   # Features array
├── integrations/     # External services
│   └── supabase/     # Supabase config
├── assets/           # Images
└── index.css         # Global styles + design system
```

## Design System

### Colors (Warm Trust Theme)
- **Primary**: Navy/Indigo (#3f5d8f) - Professional, trustworthy
- **Secondary**: Sage Green (#7ea990) - Calm, growth
- **Accent**: Warm Gold (#e8a628) - Hope, optimism

### Custom Gradients
- `gradient-hero`: Primary gradient for buttons/headers
- `gradient-subtle`: Soft background gradient
- `gradient-warm`: Gold accent gradient

### Key Components
- **Interactive Carousels**: 3-card display with arrow navigation (desktop) and dot indicators (mobile)
- **Sticky Header**: With prominent tagline bar
- **Layout Component**: Consistent Header/Footer wrapper
- **Demo Request Dialog**: Supabase-integrated form

## Content Management

Content is research-backed from the SilentSpeak clinical paper. Key statistics:
- 81% of teens said SilentSpeak would make speaking up easier
- 76% preferred typing over talking
- Over 70% of healthcare sentinel events involve communication breakdowns

To update content:
- **Features**: Edit `src/data/features.ts`
- **Applications**: Edit `src/components/Solutions.tsx`
- **About Page**: Edit `src/pages/About.tsx`

## Contributing

When making changes:
1. Ensure both `vite.config.ts` and `App.tsx` maintain matching base paths
2. Test build locally before pushing: `npm run build`
3. Verify routes work correctly with GitHub Pages base path
4. Keep design system colors consistent across components

## License

All rights reserved. SilentSpeak is a patent-pending invention.
