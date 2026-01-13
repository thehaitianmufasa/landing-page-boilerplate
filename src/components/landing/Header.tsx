"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface HeaderProps {
  transparent?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function Header({
  transparent = true,
  ctaText = siteConfig.cta.primary,
  ctaHref = "#register",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = transparent
    ? isScrolled
      ? "bg-white shadow-md"
      : "bg-transparent"
    : "bg-white shadow-sm";

  const textColor = transparent && !isScrolled ? "text-white" : "text-brand-primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className={`text-2xl font-bold ${textColor}`}>
            {siteConfig.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${textColor} hover:opacity-80 transition-opacity font-medium`}
              >
                {link.label}
              </a>
            ))}
            <a href={ctaHref} className="btn-accent">
              {ctaText}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${textColor}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {siteConfig.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-brand-primary hover:text-brand-accent transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={ctaHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block btn-accent text-center"
                >
                  {ctaText}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
