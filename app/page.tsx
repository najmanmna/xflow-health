'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  ClipboardCheck, 
  Star, 
  Menu, 
  X, 
  ChevronRight,
  ArrowRight,
  PauseCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-slate-900">
      
      {/* --- NAVBAR --- */}
      <Navbar />

      {/* --- HERO SECTION --- */}
    {/* <Hero /> */}
{/* <TrustStrip /> */}
     {/* --- HOW IT WORKS (Process Bar) --- */}
   {/* <HowItWorks /> */}

      {/* --- REAL STORIES (Grid) --- */}


      {/* --- PRICING (Comparison) --- */}
{/* <Pricing /> */}
      {/* --- FOOTER (Compliance) --- */}
      <Footer />
    </div>
  );
}