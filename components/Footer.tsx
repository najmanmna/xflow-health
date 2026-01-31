"use client";

import { Facebook, Instagram, Twitter, ShieldCheck } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand Column (Takes up 2 cols on Large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <a href="/" className="flex items-center gap-2 group">
              <div className="text-3xl font-heading font-bold tracking-tight">
                xflow<span className="text-accent">.</span>
              </div>
            </a>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Medical weight loss, engineered by doctors. We combine clinical
              expertise with modern technology to help you live longer and
              better.
            </p>
            <div className="flex items-center gap-4">
              {/* Trust Badges - Simplified for Compliance */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold tracking-wide">
                    UK Registered Pharmacy
                  </span>
                </div>
                {/* Removed CQC Badge as requested */}
              </div>
            </div>
          </div>

          {/* Links Column 1 - COMPLIANCE UPDATE */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Treatments
            </h4>
            <ul className="space-y-3">
              {/* Generic names are 100% MHRA compliant */}
              <li>
                <a
                  href="/weight-loss"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Weight Loss Plans
                </a>
              </li>
              <li>
                <a
                  href="/weight-loss"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  GLP-1 Treatments
                </a>
              </li>
              <li>
                <a
                  href="/supplements"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Daily Support
                </a>
              </li>
              <li>
                <a
                  href="/diagnostics"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Blood Tests
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Medical Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Delivery Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {year} Xflow Health Ltd. All rights reserved. Registered in
            England & Wales.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Acceptable Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;