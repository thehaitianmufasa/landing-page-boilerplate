# Landing Page Boilerplate

A lightweight, reusable landing page template built with modern technologies. Perfect for client projects that need a professional lead capture page without the complexity of a full SaaS framework.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Database:** Supabase (PostgreSQL)
- **Package Manager:** Bun

## Features

- Animated hero section with parallax effects
- Feature showcase grid
- Testimonial cards with ratings
- Accordion FAQ section
- Lead capture form with validation
- Responsive header with mobile menu
- Footer with social links
- API route for lead storage
- CSS variables for easy theming
- TypeScript throughout

## Quick Start

```bash
# Clone the template
git clone https://github.com/yourusername/landing-page-boilerplate.git client-name
cd client-name

# Install dependencies
bun install

# Set up environment
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Start development
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page.

## Customization

### 1. Update Site Config
Edit `src/config/site.ts` with your client's information:
- Business name
- Description
- Contact info
- Navigation links

### 2. Update Brand Colors
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --color-primary: #1a1a2e;
  --color-accent: #e94560;
  /* ... */
}
```

### 3. Update Page Content
Edit `src/app/page.tsx` to customize:
- Hero headlines
- Features
- Testimonials
- FAQs

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run the SQL from `CLAUDE.md` to create the leads table
3. Add your credentials to `.env.local`

## Project Structure

```
src/
├── app/
│   ├── api/leads/       # Lead capture API
│   ├── page.tsx         # Landing page
│   └── layout.tsx       # Root layout
├── components/
│   ├── landing/         # Hero, Features, Testimonials, etc.
│   └── forms/           # LeadCaptureForm
├── config/
│   ├── site.ts          # Site configuration
│   └── brand.ts         # Brand colors/fonts
└── lib/
    └── supabase.ts      # Database client
```

## Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

Don't forget to add environment variables in Vercel dashboard.

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run typecheck` | TypeScript type checking |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Biome |

## License

MIT - Use freely for client projects.

---

Built with care for fast, beautiful landing pages.
