/**
 * SHARED TYPE DEFINITIONS
 * =======================
 * Central location for all TypeScript interfaces and types.
 * Import from "@/types" throughout the application.
 */

// ============================================
// COMPONENT PROPS
// ============================================

export interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  showVideo?: boolean;
}

export interface FeatureItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface FeaturesProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export interface CTAProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// ============================================
// FORM TYPES
// ============================================

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
}

export interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  showPhone?: boolean;
  onSuccess?: (data: LeadFormData) => void;
  redirectUrl?: string;
  className?: string;
}

// ============================================
// ICON TYPES
// ============================================

export type IconName =
  | "Video"
  | "Target"
  | "Users"
  | "Zap"
  | "Star"
  | "Check"
  | "ArrowRight"
  | "Play"
  | "Mail"
  | "Phone"
  | "Calendar"
  | "Clock"
  | "Award"
  | "TrendingUp"
  | "Shield"
  | "Heart";

// ============================================
// API TYPES
// ============================================

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface LeadSubmission extends LeadFormData {
  source?: string;
  createdAt?: string;
}
