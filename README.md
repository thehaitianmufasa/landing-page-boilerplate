# Landing Page Boilerplate

A ready-to-use template for building professional landing pages. Clone it, customize it, launch it.

## What's Included

- **Hero section** with smooth animations
- **Features grid** to showcase benefits
- **Testimonials** with star ratings
- **FAQ accordion** for common questions
- **Lead capture form** that saves to your database
- **Mobile-friendly** design out of the box

## Get Started

```bash
git clone https://github.com/thehaitianmufasa/landing-page-boilerplate.git my-project
cd my-project
bun install
bun run dev
```

Open http://localhost:3000 to see your page.

## Customize

**4 files to change:**

| File | What to update |
|------|----------------|
| `src/config/site.ts` | Business name, tagline, contact info |
| `src/config/brand.ts` | Brand colors |
| `src/app/globals.css` | Color variables |
| `src/app/page.tsx` | Headlines, features, testimonials, FAQs |

## Connect Your Database

1. Create a free project at [supabase.com](https://supabase.com)
2. Copy your project URL and key to `.env.local`
3. Leads from your form will save automatically

## Deploy

```bash
vercel --prod
```

Add your Supabase credentials in the Vercel dashboard.

## License

MIT — use freely for any project.
