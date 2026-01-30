"use client";

import { useState, useEffect } from "react";
import { Syringe, TestTube, Pill, MessageCircle, Activity, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CircularCare = () => {
  const features = [
    {
      id: 1,
      title: "GLP-1 Treatment",
      desc: "Weekly medications prescribed online.",
      // Image: Injection Pen (Visual match for Wegovy/Ozempic)
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=90&w=1200&auto=format&fit=crop", 
      icon: Syringe,
      accent: "bg-blue-500",
      text: "text-blue-400"
    },
    {
      id: 2,
      title: "Advanced Diagnostics",
      desc: "Monitor liver, kidney & metabolic health.",
      // Image: Person checking health app/data (Digital Health vibe)
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=90&w=1200&auto=format&fit=crop", 
      icon: TestTube,
      accent: "bg-purple-500",
      text: "text-purple-400"
    },
    {
      id: 3,
      title: "Side Effect Care",
      desc: "Immediate relief & digestive support.",
      // Image: Clean clinical supplement bottle (Relief/Comfort)
      image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=90&w=1200&auto=format&fit=crop", 
      icon: Pill,
      accent: "bg-orange-500",
      text: "text-orange-400"
    },
    {
      id: 4,
      title: "Clinician Chat",
      desc: "Unlimited support team access.",
      // Image: Friendly doctor on a screen/tablet
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=90&w=1200&auto=format&fit=crop", 
      icon: MessageCircle,
      accent: "bg-green-500",
      text: "text-green-400"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000); // Swaps every 3 seconds
    return () => clearInterval(timer);
  }, []);

  // Helper to get the active icon component
  const ActiveIcon = features[currentIndex].icon;

  return (
    <section className="py-12 md:py-16 bg-primary relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* --- LEFT: Content & Controls --- */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight leading-[1.1]">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Xflow Ecosystem.</span>
              </h2>
              <p className="text-base lg:text-lg text-gray-400 font-light leading-relaxed max-w-md">
                We don't just prescribe medication. We surround you with a complete system of diagnostics, support, and care.
              </p>
            </div>

            {/* Feature List (Acts as a progress bar) */}
            <div className="space-y-2">
              {features.map((item, index) => (
                <div 
                  key={item.id}
                  onClick={() => setCurrentIndex(index)} // Allow manual click
                  className={`
                    group flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-500 border border-transparent
                    ${index === currentIndex ? "bg-white/10 border-white/10" : "hover:bg-white/5"}
                  `}
                >
                  {/* Progress Indicator Line */}
                  <div className={`w-1 h-10 rounded-full transition-colors duration-500 ${index === currentIndex ? item.accent : "bg-white/10"}`} />
                  
                  <div className="flex-1">
                    <h3 className={`text-base font-bold transition-colors duration-300 ${index === currentIndex ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs transition-all duration-300 ${index === currentIndex ? "text-gray-300 opacity-100 h-auto mt-0.5" : "text-gray-600 opacity-0 h-0 overflow-hidden"}`}>
                      {item.desc}
                    </p>
                  </div>

                  <item.icon className={`w-5 h-5 transition-colors duration-300 ${index === currentIndex ? item.text : "text-gray-600"}`} />
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: Dynamic Visual (The "Ad" Swap) --- */}
          {/* Reduced Max Width & Aspect Ratio for compact fit */}
          <div className="relative aspect-square lg:aspect-[4/3] w-full max-w-[450px] mx-auto lg:h-[400px]">
            {/* Frame - Removed Z-index and blur that was covering image */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] bg-white/5" />
            
            {/* Image Swap Area - Added Z-20 to sit ON TOP of the frame */}
            <div className="absolute inset-2 rounded-[1.5rem] overflow-hidden bg-primary shadow-2xl z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Image - Increased Opacity for clarity */}
                  <img 
                    src={features[currentIndex].image} 
                    alt={features[currentIndex].title}
                    className="w-full h-full object-cover opacity-80" 
                  />
                  
                  {/* Gradient Overlay - Kept for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

                  {/* Text Overlay inside Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-3 ${features[currentIndex].text}`}>
                      <ActiveIcon className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{features[currentIndex].title}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
                      {features[currentIndex].desc}
                    </h3>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-3">
                      <motion.div 
                        className={`h-full ${features[currentIndex].accent}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Tech Elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent/30 rounded-tr-[2rem] -z-10" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent/30 rounded-bl-[2rem] -z-10" />

          </div>

        </div>
      </div>
    </section>
  );
};

export default CircularCare;