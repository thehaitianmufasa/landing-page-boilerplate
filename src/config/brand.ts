/**
 * BRAND CONFIGURATION
 * ===================
 * Customize colors, fonts, and visual identity per client.
 * These values are used throughout the components.
 */

export const brandConfig = {
  // Color Palette
  colors: {
    // Primary brand color (headers, CTAs, important elements)
    primary: "#1a1a2e",
    // Secondary color (backgrounds, supporting elements)
    secondary: "#16213e",
    // Accent color (highlights, buttons, links)
    accent: "#e94560",
    // Dark color (text, dark backgrounds)
    dark: "#0f0f23",
    // Light color (backgrounds, light text)
    light: "#f8f9fa",
    // Additional colors
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },

  // Typography
  fonts: {
    // Primary font for body text
    sans: "Inter, system-ui, sans-serif",
    // Font for headings (can be same as sans)
    heading: "Inter, system-ui, sans-serif",
  },

  // Border radius
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  },

  // Brand feel/personality (for AI/copy guidance)
  personality: {
    tone: "professional", // professional, friendly, bold, playful
    voice: "authoritative", // authoritative, conversational, inspiring
    keywords: ["trust", "systems", "results", "expertise"],
  },
} as const;

export type BrandConfig = typeof brandConfig;
