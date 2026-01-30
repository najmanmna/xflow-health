"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect for "Sticky & Glass" look
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Weight Loss", href: "/weight-loss" },
    { name: "Blood Tests", href: "/diagnostics" },
    { name: "Supplements", href: "/supplements" },
    { name: "How it Works", href: "/how-it-works" },
  ];

  return (
    <>
      {/* --- Main Navigation --- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 group">
            {/* Using text logo for safety if image is missing, swap to <img> if file exists */}
            {/* <div className="text-2xl font-heading font-bold text-primary tracking-tight">
              xflow<span className="text-accent">.</span>
            </div> */}
                  
            <img 
              src="/logo.png" 
              alt="Xflow Health" 
              className="h-8 w-auto md:h-10 object-contain" 
            /> 
           
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-main hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="https://app.xflowhealth.com/start" 
              className="bg-accent hover:bg-[#33efff] text-primary text-sm font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-200/50 flex items-center gap-2"
            >
              Start Consultation
              <ChevronRight className="w-4 h-4 text-primary" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] z-40 bg-white p-6 md:hidden flex flex-col gap-6 border-t border-gray-100"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-heading font-semibold text-primary border-b border-gray-100 pb-3 flex justify-between items-center"
                >
                  {link.name}
                  <ChevronRight size={16} className="text-accent" />
                </a>
              ))}
            </nav>

            <div className="mt-auto">
              <a
                href="#"
                className="w-full bg-accent text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
              >
                Start Consultation
              </a>
              {/* Removed CQC regulated text here too for compliance */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;