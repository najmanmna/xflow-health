"use client";

import { ArrowRight, Info, ShieldCheck } from "lucide-react";

const Pricing = () => {
  const treatments = [
    {
      category: "Complete Plan",
      title: "Weight Loss Programme + Wegovy®", // Updated Title
      desc: "Weekly injection. Clinically-proven results.",
      price: "199",
      unit: "/ month",
      image: "https://placehold.co/400x600/fdf2f8/db2777?text=Wegovy+Box", 
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      href: "https://app.xflowhealth.com/start?product=wegovy",
    },
    {
      category: "Complete Plan",
      title: "Weight Loss Programme + Mounjaro®", // Updated Title
      desc: "Weekly injection. Dual-action treatment.",
      price: "229",
      unit: "/ month",
      image: "https://placehold.co/400x600/fdf2f8/db2777?text=Mounjaro+Box",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      href: "https://app.xflowhealth.com/start?product=mounjaro",
    },
    {
      category: "Daily Support",
      title: "Side Effect Relief + Supplements",
      desc: "Anti-nausea & digestive comfort.",
      price: "15",
      unit: "/ bottle",
      image: "https://placehold.co/400x600/f0fdf4/16a34a?text=Relief+Pills",
      badgeColor: "bg-green-50 text-green-700 border-green-200",
      href: "#",
    },
    {
      category: "Diagnostics",
      title: "Weight Loss Blood Profile",
      desc: "Check liver, kidney & metabolic health.",
      price: "59",
      unit: "/ kit",
      image: "https://placehold.co/400x600/eff6ff/2563eb?text=Blood+Test+Kit",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      href: "#",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-surface-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
            Treatment Options
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Effective solutions for your journey
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            A complete ecosystem to change your weight, health, and habits.
          </p>
        </div>

        {/* Product Shelf Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1"
            >
              {/* Text Top */}
              <div className="text-center mb-6">
                {/* Category Badge */}
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border mb-3 ${item.badgeColor}`}>
                  {item.category}
                </span>
                
                {/* Title - Adjusted size for longer text */}
                <h3 className="text-lg font-heading font-bold text-primary mb-1 leading-tight min-h-[44px] flex items-center justify-center">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-3 line-clamp-1">
                  {item.desc}
                </p>
                <div className="flex justify-center items-baseline gap-1">
                  <span className="text-sm font-medium text-gray-400">From</span>
                  <span className="text-xl font-bold text-primary">£{item.price}</span>
                  <span className="text-sm font-medium text-gray-400">{item.unit}</span>
                </div>
              </div>

              {/* Product Image (Centered) */}
              <div className="flex-1 flex items-center justify-center mb-8 relative">
                <div className="relative w-40 h-40">
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
              </div>

              {/* Action Buttons - Light/Cyan Theme */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <a 
                  href={item.href}
                  // Changed to Cyan Background (bg-accent) with Navy Text (text-primary)
                  className="col-span-1 py-3 rounded-lg text-sm font-bold text-center flex items-center justify-center gap-1 transition-colors bg-accent text-primary hover:bg-[#33efff] shadow-md hover:shadow-cyan-200/50"
                >
                  Get Started <ArrowRight className="w-3 h-3" />
                </a>
                <button className="col-span-1 py-3 rounded-lg text-sm font-bold text-primary border border-gray-200 hover:border-accent hover:bg-surface-cyan transition-colors flex items-center justify-center">
                  Learn more
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;