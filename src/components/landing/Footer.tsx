"use client";

import { siteConfig } from "@/config/site";

interface FooterProps {
  showSocial?: boolean;
  showLinks?: boolean;
}

export function Footer({ showSocial = true, showLinks = true }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          {showLinks && (
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {siteConfig.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/70 text-sm">
              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              )}

              {/* Social Links */}
              {showSocial && (
                <div className="flex gap-4 pt-4">
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      Instagram
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      LinkedIn
                    </a>
                  )}
                  {siteConfig.social.youtube && (
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      aria-label="YouTube"
                    >
                      YouTube
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/50 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
