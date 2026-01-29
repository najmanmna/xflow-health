import Link from "next/link";
import { Facebook, Instagram, Twitter, ShieldCheck } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column (Takes up 2 cols on Large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="text-3xl font-heading font-bold tracking-tight">
                xflow<span className="text-accent">.</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Medical weight loss, engineered by doctors. We combine clinical
              expertise with modern technology to help you live longer and
              better.
            </p>
            <div className="flex items-center gap-4">
              {/* Trust Badges */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold tracking-wide">
                    CQC Regulated
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold tracking-wide">
                    GPhC Registered
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Column 1 - SAFETY UPDATE */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Treatments
            </h4>
            <ul className="space-y-3">
              {/* Generic names are 100% MHRA compliant */}
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Weight Loss Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  GLP-1 Injection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Daily Tablets
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Medical Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
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
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
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
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Acceptable Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
