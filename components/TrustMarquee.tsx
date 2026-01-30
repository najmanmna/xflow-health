"use client";

import { Check, Star, Truck, Shield } from "lucide-react";

const TrustMarquee = () => {
  const items = [
    { icon: Star, text: "Rated Excellent 4.9/5" },
    { icon: Truck, text: "Free Discreet Delivery" },
    { icon: Shield, text: "UK Registered Pharmacy" },
    { icon: Check, text: "Clinically Proven Treatments" },
    { icon: Star, text: "Trusted by 500k+ Patients" },
    { icon: Shield, text: "GPhC Regulated" },
  ];

  return (
    <div className="w-full bg-surface-cyan border-y border-accent/10 overflow-hidden py-4">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-2 text-primary/80">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 px-6">
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-2 text-primary/80">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee { animation: marquee 50s linear infinite; }
        .animate-marquee2 { animation: marquee2 50s linear infinite; }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default TrustMarquee;