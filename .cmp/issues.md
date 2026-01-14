# Issues Log

## Open Issues

| ID | Issue | First Seen | Impact | Workaround | Notes |
|----|-------|------------|--------|------------|-------|
| | | | | | |

## Resolved Issues

| ID | Issue | Solution | Date Resolved |
|----|-------|----------|---------------|
| | | | |

## Recurring Problems
*Patterns that keep appearing - document root causes*

| Problem Pattern | Root Cause | Prevention |
|-----------------|------------|------------|
| Hydration mismatch | Client-only code in SSR | Use `'use client'` + dynamic imports |
| Supabase CORS | Missing env vars | Check `.env.local` configuration |
| Tailwind not applying | CSS purge issue | Check `content` paths in tailwind config |

---
*Update immediately when issues arise or get resolved*
