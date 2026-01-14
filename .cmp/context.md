# Project Context

## Purpose
Reusable landing page boilerplate for rapid client project deployment. Build high-converting landing pages with lead capture, animations, and modern design.

## Success Criteria
- [ ] Clean, customizable component library
- [ ] Lead capture working with Supabase
- [ ] Fast load times (< 3s LCP)
- [ ] Mobile responsive design
- [ ] Easy brand customization via config files

## Key Constraints
- **Stack:** Next.js 15 + Tailwind CSS + Framer Motion + Supabase
- **Package Manager:** bun (not npm/yarn)
- **Deployment:** Vercel-optimized
- **No external UI libraries** - custom components for flexibility

## Scope
**In scope:**
- Landing page components (Hero, Features, Testimonials, FAQ, CTA)
- Lead capture form with Supabase integration
- Brand/site configuration system
- Animation system with Framer Motion
- SEO metadata setup

**Out of scope:**
- Authentication/user accounts
- Admin dashboard
- Payment processing
- Multi-page marketing sites

## Key Files
- `src/config/site.ts` - Site-wide configuration
- `src/config/brand.ts` - Brand colors/fonts
- `src/app/globals.css` - CSS variables
- `src/app/page.tsx` - Main landing page
- `src/components/landing/` - Reusable components
- `src/components/forms/LeadCaptureForm.tsx` - Lead form

## References
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase Docs](https://supabase.com/docs)

---
*Re-read this file after any memory compaction or session break*
