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

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-xl">X</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Xflow</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition">How it Works</a>
              <a href="#safety" className="text-slate-600 hover:text-slate-900 font-medium transition">Safety</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 font-medium transition">Pricing</a>
              <a href="#reviews" className="text-slate-600 hover:text-slate-900 font-medium transition">Real Stories</a>
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <a href="/login" className="hidden md:block text-slate-900 font-medium hover:text-emerald-600">Login</a>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                Check Eligibility
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-slate-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-4">
            <a href="#how-it-works" className="block text-slate-600 font-medium">How it Works</a>
            <a href="#pricing" className="block text-slate-600 font-medium">Pricing</a>
            <a href="/login" className="block text-slate-600 font-medium">Login</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Copy */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                Regulated by CQC & GPhC
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                The Science of Weight Loss. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  The Safety of a Clinic.
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Effective GLP-1 treatments prescribed online by UK doctors. 
                No waiting rooms. No judgment. Free consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                  Check Eligibility (2 mins)
                </button>
                <button className="px-8 py-4 rounded-full font-medium text-white border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all">
                  View Treatments
                </button>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="flex text-emerald-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span>4.8/5 on Trustpilot based on 2,000+ reviews.</span>
              </div>
            </div>

            {/* Right: Visual (Mockup) */}
            <div className="relative">
              <div className="relative z-10 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-6 aspect-[4/3] flex items-center justify-center overflow-hidden group">
                 {/* Placeholder for Product Image */}
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-50" />
                 <div className="text-center z-10">
                    <p className="text-slate-500 text-sm mb-2">High-Fidelity Product Shot Here</p>
                    <div className="w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl mx-auto" />
                 </div>
              </div>
              {/* Decorative Ring */}
              <div className="absolute -inset-4 border border-slate-800/50 rounded-3xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* --- TRUST STACK --- */}
      <div className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm font-medium mb-6 uppercase tracking-wider">Trusted & Regulated By</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Replace with actual SVGs/Images */}
               <div className="font-bold text-slate-700 text-xl flex items-center gap-2"><ShieldCheck className="w-6 h-6"/> CQC Regulated</div>
               <div className="font-bold text-slate-700 text-xl flex items-center gap-2"><ClipboardCheck className="w-6 h-6"/> GPhC Registered</div>
               <div className="font-bold text-slate-700 text-xl flex items-center gap-2"><Star className="w-6 h-6"/> Trustpilot</div>
            </div>
        </div>
      </div>

      {/* --- HOW IT WORKS (Process Bar) --- */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Prescription weight loss, without the waiting room.</h2>
            <p className="text-lg text-slate-600">We’ve replaced the awkward clinic visit with a smart, secure digital experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop Only) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10" />

             {/* Step 1 */}
             <div className="text-center group">
                <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-emerald-500 group-hover:shadow-emerald-100 group-hover:shadow-lg transition-all duration-300">
                  <ClipboardCheck className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. The Assessment</h3>
                <p className="text-slate-600 leading-relaxed">Complete our 3-minute medical quiz. Our engine checks your eligibility instantly.</p>
             </div>

             {/* Step 2 */}
             <div className="text-center group">
                <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-emerald-500 group-hover:shadow-emerald-100 group-hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. The Review</h3>
                <p className="text-slate-600 leading-relaxed">A UK-registered clinician reviews your profile and approves your treatment.</p>
             </div>

             {/* Step 3 */}
             <div className="text-center group">
                <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-emerald-500 group-hover:shadow-emerald-100 group-hover:shadow-lg transition-all duration-300">
                  <Truck className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. The Delivery</h3>
                <p className="text-slate-600 leading-relaxed">Your medication arrives in discreet, temperature-controlled packaging next day.</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- REAL STORIES (Grid) --- */}
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Real People. Real Results.</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Story Card 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-1 text-emerald-500"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Verified Patient</span>
                    </div>
                    <p className="text-lg text-slate-800 italic mb-6">"I wanted to lose 10kg for my wedding. The coaching made the difference—I didn't just take the meds, I learned how to eat properly."</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                        <div className="w-10 h-10 bg-slate-200 rounded-full" /> {/* Avatar Placeholder */}
                        <div>
                            <p className="font-bold text-slate-900">Sarah J.</p>
                            <p className="text-sm text-slate-500">Lost 12kg in 3 months</p>
                        </div>
                    </div>
                </div>

                 {/* Story Card 2 */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-1 text-emerald-500"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Verified Patient</span>
                    </div>
                    <p className="text-lg text-slate-800 italic mb-6">"I was skeptical about online clinics. But Xflow was transparent about pricing from day one. No hidden consultation fees."</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                        <div className="w-10 h-10 bg-slate-200 rounded-full" /> {/* Avatar Placeholder */}
                        <div>
                            <p className="font-bold text-slate-900">Michael T.</p>
                            <p className="text-sm text-slate-500">Lost 15% body weight</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-slate-400 text-xs mt-8">*Results vary per individual. Medication is prescribed at the clinician's discretion.</p>
        </div>
      </section>

      {/* --- PRICING (Comparison) --- */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing. No Surprises.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* Competitor Card */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 opacity-80">
                    <h3 className="text-xl font-bold text-slate-500 mb-2">Traditional Clinics</h3>
                    <div className="text-3xl font-bold text-slate-400 mb-6">£300+<span className="text-sm font-normal">/mo</span></div>
                    
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-500">
                            <X className="w-5 h-5 text-red-300" /> Medication Cost
                        </li>
                        <li className="flex items-center gap-3 text-slate-500">
                            <X className="w-5 h-5 text-red-300" /> Consultation Fees (£50+)
                        </li>
                        <li className="flex items-center gap-3 text-slate-500">
                            <X className="w-5 h-5 text-red-300" /> Strict Contracts
                        </li>
                        <li className="flex items-center gap-3 text-slate-500">
                            <X className="w-5 h-5 text-red-300" /> Slow Appointment Booking
                        </li>
                    </ul>
                </div>

                {/* Xflow Card (Highlighted) */}
                <div className="bg-white rounded-2xl p-8 border-2 border-emerald-500 shadow-2xl relative transform scale-105">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">
                        Best Value
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">The Xflow Plan</h3>
                    <div className="text-4xl font-bold text-slate-900 mb-6">£199<span className="text-sm font-normal text-slate-500">/mo</span></div>
                    
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" /> All Medication Included
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Free Doctor Consultations
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Nutritional Coaching App
                        </li>
                        <li className="flex items-center gap-3 text-slate-900 font-bold bg-emerald-50 p-2 rounded-lg -ml-2">
                            <PauseCircle className="w-5 h-5 text-emerald-600" /> Pause or Cancel Anytime
                        </li>
                    </ul>

                    <button className="w-full mt-8 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all">
                        Get Started
                    </button>
                </div>

            </div>
        </div>
      </section>

      {/* --- FOOTER (Compliance) --- */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <span className="text-white font-bold text-2xl tracking-tight block mb-4">Xflow</span>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Xflow Health is a trading name of [Legal Entity]. 
                        Registered in England & Wales. 
                        We are regulated by the Care Quality Commission (CQC) and the General Pharmaceutical Council (GPhC).
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Patient Safety</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-emerald-400">Treatment Policy</a></li>
                        <li><a href="#" className="hover:text-emerald-400">Complaints Procedure</a></li>
                        <li><a href="#" className="hover:text-emerald-400">Emergency Support</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-emerald-400">Terms of Sale</a></li>
                        <li><a href="#" className="hover:text-emerald-400">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 border-t border-slate-800 text-xs text-center">
                <p>&copy; 2026 Xflow Health. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}