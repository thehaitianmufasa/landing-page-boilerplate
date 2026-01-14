"use client";

import {
  Hero,
  Features,
  Testimonials,
  FAQ,
  CTA,
  Header,
  Footer,
} from "@/components/landing";
import { LeadCaptureForm } from "@/components/forms";
import {
  heroContent,
  featuresContent,
  registrationContent,
  testimonialsContent,
  testimonials,
  faqContent,
  faqs,
  ctaContent,
} from "@/content";

/**
 * LANDING PAGE
 * ============
 * Content is imported from @/content/landing.ts
 * Edit that file to customize for each client.
 */

export default function LandingPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero Section */}
      <Hero {...heroContent} />

      {/* Features/What You'll Learn */}
      <Features {...featuresContent} />

      {/* Registration Section */}
      <section id="register" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: Value Proposition */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                {registrationContent.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {registrationContent.description}
              </p>
              <ul className="space-y-3">
                {registrationContent.benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <LeadCaptureForm
              title={registrationContent.form.title}
              subtitle={registrationContent.form.subtitle}
              ctaText={registrationContent.form.ctaText}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        title={testimonialsContent.title}
        subtitle={testimonialsContent.subtitle}
        testimonials={testimonials}
      />

      {/* FAQ */}
      <FAQ
        title={faqContent.title}
        subtitle={faqContent.subtitle}
        faqs={faqs}
      />

      {/* Final CTA */}
      <CTA {...ctaContent} />

      <Footer />
    </main>
  );
}
