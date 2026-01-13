"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  content: string;
  image?: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  title = "What Our Clients Say",
  subtitle,
  testimonials,
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card-hover relative"
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-accent/20" />

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating!
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
            <span className="text-brand-accent font-semibold text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-brand-primary">{testimonial.name}</p>
          {(testimonial.role || testimonial.company) && (
            <p className="text-sm text-gray-500">
              {testimonial.role}
              {testimonial.role && testimonial.company && " at "}
              {testimonial.company}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
