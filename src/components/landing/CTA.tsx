"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "default" | "gradient" | "dark";
}

export function CTA({
  title,
  subtitle,
  ctaText = "Get Started Now",
  ctaHref = "#register",
  variant = "gradient",
}: CTAProps) {
  const variants = {
    default: "bg-brand-primary",
    gradient:
      "bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_100%]",
    dark: "bg-brand-dark",
  };

  return (
    <section className={`relative overflow-hidden ${variants[variant]}`}>
      {/* Animated background */}
      {variant === "gradient" && (
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-primary))",
            backgroundSize: "200% 100%",
          }}
        />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 container-custom section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 mb-8">{subtitle}</p>
          )}

          <motion.a
            href={ctaHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn bg-white text-brand-primary hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
