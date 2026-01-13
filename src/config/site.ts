/**
 * SITE CONFIGURATION
 * ==================
 * Customize these values per client.
 * This is the single source of truth for site-wide settings.
 */

export const siteConfig = {
  // Basic Info
  name: "Your Brand",
  description: "Transform your business with our proven system.",
  url: "https://yourdomain.com",
  author: "Your Name",
  keywords: ["business", "coaching", "consulting", "growth"],

  // Contact
  email: "hello@yourdomain.com",
  phone: "",

  // Social Links
  social: {
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  // Event/Webinar Details (if applicable)
  event: {
    name: "Free Training",
    tagline: "Learn the proven system",
    date: "", // e.g., "Every Sunday at 7PM EST"
    duration: "", // e.g., "75 minutes"
    platform: "Zoom",
  },

  // CTA Configuration
  cta: {
    primary: "Register Now",
    secondary: "Learn More",
  },

  // Navigation
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
