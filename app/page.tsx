"use client";

import React, { useState } from "react";
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
  PauseCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Science from "@/components/Science";
import TrustMarquee from "@/components/TrustMarquee";
import CircularCare from "@/components/CircularCare";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-slate-900">
      <Navbar />

      <Hero />
      <TrustMarquee />

      <CircularCare />
      <Science />
           <HowItWorks />
      <Pricing />

 
    </div>
  );
}
