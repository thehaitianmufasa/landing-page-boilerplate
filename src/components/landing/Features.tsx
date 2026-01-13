"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface Feature {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function Features({
  title = "What You'll Learn",
  subtitle,
  features,
  columns = 3,
}: FeaturesProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section id="features" className="section-padding bg-white">
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

        {/* Features Grid */}
        <div className={`grid gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  // Get icon component from string name
  const IconComponent = Icons[feature.icon] as React.ComponentType<{
    className?: string;
  }>;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card-hover group"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent group-hover:scale-110 transition-all duration-300">
        {IconComponent && (
          <IconComponent className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors" />
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-brand-primary mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}
