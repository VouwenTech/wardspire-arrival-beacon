# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build production bundle
- `npm run build:dev` - Build development bundle
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

## Tech Stack

This is a React TypeScript application built with:
- **Vite** - Build tool and dev server
- **React 18** - UI framework with React Router for routing
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library built on Radix UI
- **TanStack Query** - Data fetching and state management

## Project Structure

- `src/pages/` - Page components (Index.tsx is the main landing page)
- `src/components/ui/` - shadcn/ui components (complete set of UI primitives)
- `src/lib/` - Utility functions (`utils.ts` contains the `cn` helper)
- `src/hooks/` - Custom React hooks
- `public/` - Static assets
- `docs/` - Built assets for GitHub Pages deployment

## Key Architecture Notes

**Router Setup**: Uses React Router with catch-all route for 404s. Add custom routes ABOVE the catch-all `*` route in `App.tsx:19`.

**Styling System**: 
- Uses Tailwind with CSS variables for theming
- Custom design tokens defined in `tailwind.config.ts` including hero backgrounds and shadows
- Path alias `@/` maps to `src/` directory

**Component Library**: 
- Complete shadcn/ui setup with all components available
- Components use the `cn()` utility from `@/lib/utils` for conditional classes
- Configured for dark mode support via class strategy

**State Management**: 
- TanStack Query client configured globally
- Toast notifications available via Sonner and shadcn toast
- Tooltip provider wraps the entire app

## Current Application

The app is a "Coming Soon" landing page for WARDSPIRE featuring:
- Mountain hero background image
- Large typography with Inter display font
- Responsive design with backdrop-blur footer
- Copyright footer with current year

The main page is implemented as a single component at `src/pages/Index.tsx`.

## Configuration Notes

- TypeScript is configured with relaxed settings (no strict null checks, unused vars allowed)
- ESLint ignores unused variables and has React-specific rules
- Vite uses SWC for fast React compilation
- Development server hosts on `::` (all interfaces) port 8080