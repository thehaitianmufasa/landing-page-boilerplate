"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

// Schema - customize fields as needed
const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  showPhone?: boolean;
  onSuccess?: (data: LeadFormData) => void;
  redirectUrl?: string;
  className?: string;
}

export function LeadCaptureForm({
  title = "Register Now",
  subtitle,
  ctaText = "Reserve My Spot",
  showPhone = false,
  onSuccess,
  redirectUrl,
  className = "",
}: LeadCaptureFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      reset();
      onSuccess?.(data);

      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`card max-w-md mx-auto ${className}`}
    >
      {title && (
        <h3 className="text-2xl font-bold text-brand-primary text-center mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-gray-600 text-center mb-6">{subtitle}</p>
      )}

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-8"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-brand-primary mb-2">
              You&apos;re Registered!
            </h4>
            <p className="text-gray-600">
              Check your email for confirmation details.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                className={`input-base ${
                  errors.name ? "border-red-500 focus:ring-red-500" : ""
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className={`input-base ${
                  errors.email ? "border-red-500 focus:ring-red-500" : ""
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field (Optional) */}
            {showPhone && (
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number{" "}
                  <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="input-base"
                  {...register("phone")}
                />
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full btn-accent py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </span>
              ) : (
                ctaText
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
