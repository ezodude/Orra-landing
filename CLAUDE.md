# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Orra Landing is a Next.js-based marketing landing page for Orra, an infrastructure platform for resilient AI agent workflows. The site features a hero section, waitlist registration, and information about custom agent infrastructure services.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Opens development server at http://localhost:3000 with hot reload enabled.

### Building for Production
```bash
npm run build
```
Creates an optimized production build as a standalone output.

### Running Production Server
```bash
npm run start
```
Starts the production server on port 8080 (or PORT environment variable).

### Linting
```bash
npm run lint
```
Runs ESLint using Next.js configuration.

## Architecture

### Tech Stack
- **Framework**: Next.js 13 (Pages Router)
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Headless UI, Heroicons, FontAwesome
- **Analytics**: PostHog for event tracking and pageviews
- **Authentication**: Supabase Auth (configured but not actively used on landing page)
- **Database**: Airtable for waitlist email collection

### Project Structure

```
src/
├── components/
│   ├── alerts/           # Reusable alert components (Info, Error)
│   └── orra/landing/     # Landing page specific components
│       ├── Header.jsx    # Navigation header with branding and CTAs
│       ├── HeroLaunch.jsx # Main hero section with waitlist form
│       ├── HeroDiagram.jsx # Visual diagram component
│       ├── Footer.jsx    # Site footer
│       ├── Container.jsx # Layout container wrapper
│       └── NavLink.jsx   # Navigation link component
├── pages/
│   ├── _app.js          # App wrapper with PostHog and Supabase providers
│   ├── _document.js     # Custom document for fonts and meta tags
│   ├── index.js         # Homepage (single page application)
│   ├── 404.jsx          # Custom 404 page
│   └── api/
│       └── orra/waitlist/
│           └── registration.js # API endpoint for waitlist email submission
├── lib/
│   └── db/orra/
│       └── waitlist-server.js  # Supabase waitlist operations (not currently used)
└── styles/
    ├── global.css       # Global styles
    └── tailwind.css     # Tailwind imports
```

### Key Architecture Details

#### Single Page Application
The site is effectively a single-page application. The main entry point is `src/pages/index.js`, which renders:
- Header (navigation with GitHub link and demo booking CTA)
- HeroLaunch (hero section with waitlist form and "Get Started" section)
- Footer

#### Waitlist Flow
1. User clicks "Join Cloud Waitlist" button in HeroLaunch component
2. Form expands inline below the button
3. On submission, POST request sent to `/api/orra/waitlist/registration`
4. API endpoint stores email in Airtable using environment variables:
   - `AIRTABLE_TOKEN`
   - `AIRTABLE_LEADS_BASE_ID`
   - `AIRTABLE_LEADS_TABLE_ID`
5. Success/error messages displayed using alert components

#### Analytics Setup
PostHog is initialized in `_app.js` and configured to:
- Only run client-side (SSR-safe)
- Enable debug mode in development
- Manually capture pageviews on route changes
- Environment variables required:
  - `NEXT_PUBLIC_POSTHOG_KEY`
  - `NEXT_PUBLIC_POSTHOG_HOST` (defaults to https://app.posthog.com)

#### Styling Approach
- Tailwind CSS in JIT mode for optimal performance
- Custom theme extends default with:
  - Custom font sizes optimized for marketing copy
  - Inter for sans-serif, Lexend for display text
  - Extended spacing utilities (18, 112, 120)
  - Custom border radius (4xl)
- Color scheme: Rose/purple/black palette for branding
- Responsive design with mobile-first breakpoints

#### Supabase Integration
Supabase is configured with SessionContextProvider but not actively used on the landing page. The waitlist-server.js utility exists but the API endpoint uses Airtable directly instead.

### Environment Variables

Required for production:
```
# Airtable (Waitlist)
AIRTABLE_TOKEN=
AIRTABLE_LEADS_BASE_ID=
AIRTABLE_LEADS_TABLE_ID=

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# Supabase (configured but not actively used)
SUPABASE_SERVICE_URL=
SUPABASE_SERVICE_KEY=

# Optional
NEXT_PUBLIC_APP_HOST=  # Used in Header component for home link
```

See `.env-example` for template.

## Development Guidelines

### Component Patterns
- Landing page components live in `src/components/orra/landing/`
- Use functional components with hooks
- State management is component-local (useState)
- Form submissions use fetch API with JSON payloads

### Styling Conventions
- Use Tailwind utility classes directly in JSX
- Responsive modifiers: `sm:`, `md:`, `lg:` for breakpoints
- Custom colors reference Tailwind config or use inline `rgb(var(--variable))` for CSS custom properties
- Hover states are important for CTAs and links

### API Routes
- API routes follow Next.js Pages Router convention: `src/pages/api/`
- Only accept specific HTTP methods (return 405 for others)
- Use try-catch with appropriate error status codes
- Return JSON responses with consistent structure

### External Links
The site links to several external resources:
- GitHub: https://github.com/orra-dev/orra
- Engineering blog: https://blog.orra.dev
- Launch blog post: https://tinyurl.com/orra-launch-blog-post
- Demo booking: https://cal.com/orra-dev/agent-apps-to-prod

### Deployment
- Next.js configured with `output: 'standalone'` for containerized deployments
- Production server starts with `npm start` on PORT 8080 (configurable)
- Static assets and images support remote patterns for `**.orra.dev`
