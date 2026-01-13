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

/**
 * LANDING PAGE TEMPLATE
 * =====================
 * Customize the content below for each client.
 * All components are pre-built and ready to use.
 */

// ============================================
// CUSTOMIZE THIS CONTENT PER CLIENT
// ============================================

const heroContent = {
  headline: "Transform Your Visibility Into Revenue",
  subheadline:
    "Join our free training and learn the proven system to turn your expertise into a predictable client pipeline.",
  ctaText: "Reserve My Spot",
  ctaHref: "#register",
  secondaryCtaText: "Watch Preview",
  showVideo: true,
};

const featuresContent = {
  title: "What You'll Learn",
  subtitle: "In just 75 minutes, you'll discover the exact framework used by top experts",
  features: [
    {
      icon: "Video" as const,
      title: "Show Up Consistently",
      description:
        "Learn how to create video content without burnout or overthinking. Build a sustainable system.",
    },
    {
      icon: "Target" as const,
      title: "Content That Converts",
      description:
        "Turn one piece of content into a full ecosystem that drives visibility, trust, and inbound leads.",
    },
    {
      icon: "Users" as const,
      title: "Attract Ideal Clients",
      description:
        "Position yourself as the obvious choice so clients come to you already trusting your expertise.",
    },
    {
      icon: "Zap" as const,
      title: "Build Your System",
      description:
        "Create a simple visibility system that supports your business goals - not just vanity metrics.",
    },
  ],
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Coach",
    content:
      "This training completely changed how I approach content. I went from posting randomly to having a real system that brings in clients every week.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Consultant",
    content:
      "Finally, someone who explains visibility in a way that makes sense. The strategies are practical and I saw results within the first month.",
    rating: 5,
  },
  {
    name: "Amanda Torres",
    role: "Course Creator",
    content:
      "I was skeptical at first, but the framework is solid. My content now has a purpose and I'm getting way more qualified leads.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Who is this training for?",
    answer:
      "This training is designed for service-based business owners, coaches, consultants, and personal brands who want to use video content to attract more clients. It's perfect if you're past the beginner phase and ready for a real system.",
  },
  {
    question: "How long is the training?",
    answer:
      "The live training is 75 minutes. We cover the complete framework and leave time for Q&A at the end.",
  },
  {
    question: "Is there a replay available?",
    answer:
      "Yes! If you can't make it live, register anyway and we'll send you the replay within 24 hours.",
  },
  {
    question: "What if I'm not good on camera?",
    answer:
      "That's exactly why we created this training! You'll learn how to show up confidently on video, even if you've struggled with it before. No prior video experience required.",
  },
  {
    question: "Is this really free?",
    answer:
      "Yes, the training is completely free. We believe in providing real value upfront. You'll walk away with actionable strategies you can implement immediately.",
  },
];

// ============================================
// PAGE COMPONENT
// ============================================

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
                Ready to Build Your Visibility System?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Join hundreds of business owners who have transformed their content
                strategy and are now attracting clients on autopilot.
              </p>
              <ul className="space-y-3">
                {[
                  "Live 75-minute training",
                  "Actionable framework you can use immediately",
                  "Q&A session to get your questions answered",
                  "Free visibility system checklist",
                  "Replay access if you can't make it live",
                ].map((item) => (
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
              title="Save Your Seat"
              subtitle="Every other Sunday at 7:00 PM EST"
              ctaText="Register Now - It's Free"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        title="What Others Are Saying"
        subtitle="Real results from real business owners"
        testimonials={testimonials}
      />

      {/* FAQ */}
      <FAQ
        title="Got Questions?"
        subtitle="Here are answers to the most common questions"
        faqs={faqs}
      />

      {/* Final CTA */}
      <CTA
        title="Don't Miss This Free Training"
        subtitle="Limited spots available. Register now to secure your seat."
        ctaText="Reserve My Spot Now"
        ctaHref="#register"
      />

      <Footer />
    </main>
  );
}
