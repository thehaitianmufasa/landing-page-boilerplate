# Landing Page Boilerplate

**Type:** Reusable template for client landing pages
**Stack:** Next.js 15 + Tailwind CSS + Framer Motion + Supabase
**Package Manager:** bun

---

## Session Protocol (CMP v3)

**ALWAYS start sessions by reading `.cmp/` files:**

```bash
# Session Start (in order)
1. .cmp/handoff.md   # Where we left off
2. .cmp/context.md   # Project intent
3. .cmp/todos.md     # Remaining tasks
4. .cmp/issues.md    # Known problems
```

**During work:**
- Update `todos.md` after completing tasks
- Append to `insights.md` (never overwrite)
- Log issues immediately to `issues.md`

**Before ending session:**
- Update `.cmp/handoff.md` with current state
- Commit: `git add .cmp/ && git commit -m "Update CMP state"`

---

## Quick Start Commands

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Type checking
bun run typecheck

# Linting
bun run lint

# Format code
bun run format
```

---

## Development Workflow

### Starting a New Client Project

1. **Clone/Copy this template**
   ```bash
   cp -r landing-page-boilerplate client-name
   cd client-name
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Configure environment**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with Supabase credentials
   ```

4. **Customize for client**
   - Update `src/config/site.ts` with client info
   - Update `src/config/brand.ts` with colors/fonts
   - Update `src/app/globals.css` CSS variables
   - Modify `src/app/page.tsx` content

5. **Start development**
   ```bash
   bun run dev
   ```

---

## File Structure

```
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── api/leads/           # Lead capture API
│   │   ├── globals.css          # Global styles + CSS variables
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Landing page
│   ├── components/
│   │   ├── landing/             # Landing page components
│   │   │   ├── Hero.tsx         # Hero section with animations
│   │   │   ├── Features.tsx     # Features grid
│   │   │   ├── Testimonials.tsx # Testimonial cards
│   │   │   ├── FAQ.tsx          # Accordion FAQ
│   │   │   ├── CTA.tsx          # Call-to-action section
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   └── Footer.tsx       # Footer
│   │   └── forms/
│   │       └── LeadCaptureForm.tsx  # Lead capture form
│   ├── config/
│   │   ├── site.ts              # Site-wide configuration
│   │   └── brand.ts             # Brand colors/fonts
│   └── lib/
│       └── supabase.ts          # Supabase client
├── public/                      # Static assets
├── .env.local.example           # Environment template
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

---

## Customization Guide

### 1. Site Configuration (`src/config/site.ts`)

```typescript
export const siteConfig = {
  name: "Client Brand Name",
  description: "Client tagline/description",
  url: "https://clientdomain.com",
  email: "hello@clientdomain.com",
  // ... more options
};
```

### 2. Brand Colors (`src/config/brand.ts` + `globals.css`)

Update CSS variables in `globals.css`:
```css
:root {
  --color-primary: #1a1a2e;    /* Main brand color */
  --color-secondary: #16213e;  /* Secondary color */
  --color-accent: #e94560;     /* Accent/CTA color */
  --color-dark: #0f0f23;       /* Text color */
  --color-light: #f8f9fa;      /* Background */
}
```

### 3. Page Content (`src/app/page.tsx`)

Modify the content objects:
- `heroContent` - Headlines and CTAs
- `featuresContent` - What they'll learn
- `testimonials` - Client testimonials
- `faqs` - Frequently asked questions

---

## Supabase Setup

### 1. Create a Project
Go to https://supabase.com and create a new project.

### 2. Create Leads Table
Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  source TEXT DEFAULT 'landing-page',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit leads (write-only)
CREATE POLICY "Anyone can submit leads" ON leads
  FOR INSERT WITH CHECK (true);
```

### 3. Add Credentials
Copy your project URL and anon key to `.env.local`.

---

## Components Reference

### Hero
```tsx
<Hero
  headline="Your Main Headline"
  subheadline="Supporting text"
  ctaText="Button Text"
  ctaHref="#register"
/>
```

### Features
```tsx
<Features
  title="Section Title"
  features={[
    { icon: IconComponent, title: "Feature", description: "..." }
  ]}
/>
```

### LeadCaptureForm
```tsx
<LeadCaptureForm
  title="Form Title"
  subtitle="Optional subtitle"
  ctaText="Submit Button"
  showPhone={true}  // Optional phone field
/>
```

### Testimonials
```tsx
<Testimonials
  testimonials={[
    { name: "Name", role: "Role", content: "Quote", rating: 5 }
  ]}
/>
```

### FAQ
```tsx
<FAQ
  faqs={[
    { question: "Question?", answer: "Answer text" }
  ]}
/>
```

---

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
bun add -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Environment Variables
Set these in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Pre-Allowed Permissions

Add to `.claude/settings.json` for faster development:

```json
{
  "permissions": {
    "allow": [
      "Bash(bun run dev)",
      "Bash(bun run build)",
      "Bash(bun run typecheck)",
      "Bash(bun run lint)",
      "Bash(bun run format)",
      "Bash(bun install)",
      "Bash(git add:*)",
      "Bash(git commit:*)",
      "Bash(git push:*)",
      "Bash(git status)",
      "Bash(git diff:*)"
    ]
  }
}
```

---

## Verification Workflow

After making changes:
```bash
# 1. Type check
bun run typecheck

# 2. Lint
bun run lint

# 3. Build test
bun run build

# 4. Visual verification
bun run dev
# Open http://localhost:3000 in browser
```

---

## Common Tasks

### Add a New Section
1. Create component in `src/components/landing/`
2. Export from `src/components/landing/index.ts`
3. Import and add to `page.tsx`

### Change Colors
1. Update CSS variables in `src/app/globals.css`
2. Or update `src/config/brand.ts` for programmatic access

### Add New Form Fields
1. Update schema in `LeadCaptureForm.tsx`
2. Update API validation in `src/app/api/leads/route.ts`
3. Update Supabase table schema

---

**Last Updated:** January 13, 2026
