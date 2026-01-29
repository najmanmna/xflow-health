"use client";

import { CheckCircle, ArrowRight, Star, ShieldCheck, Stethoscope, Activity } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-0 lg:pb-0 lg:h-screen lg:min-h-[600px] flex items-center overflow-hidden bg-surface-white selection:bg-accent/30 selection:text-primary">
      
      {/* --- BACKGROUND LAYER (z-0) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        {/* Ambient Glows - Adjusted positions to not block text */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* --- CONTENT LAYER (z-10) --- */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* --- LEFT COLUMN: COPY --- */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">

            {/* Trust Badge */}
            <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="glass inline-flex items-center gap-3 px-3 pr-5 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-default border border-gray-200 bg-white/80 backdrop-blur-md">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-[#00b67a] border-2 border-white flex items-center justify-center shadow-sm z-10 relative">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Trustpilot</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-primary">Rated Excellent</span>
                    <span className="text-xs font-medium text-gray-500">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4 fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary leading-[1.1] tracking-tight">
                Medical weight loss, <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-accent">
                    engineered by doctors.
                  </span>
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed font-light">
                Access effective, science-backed <span className="font-semibold text-primary">GLP-1 treatments</span> prescribed online. 
                {/* COMPLIANCE FIX: Changed "Just results" to "Expert care" */}
                No waiting rooms. No judgment. Expert care.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://app.xflowhealth.com/start"
                className="group relative bg-secondary hover:bg-blue-600 text-white text-lg font-heading font-bold py-3.5 px-8 rounded-full shadow-lg shadow-cyan-200/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span>Check Eligibility</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/weight-loss"
                className="group bg-white border-2 border-gray-100 hover:border-accent/30 text-primary text-lg font-heading font-bold py-3.5 px-8 rounded-full transition-all shadow-sm hover:shadow-md flex items-center justify-center"
              >
                View Treatment Plans
              </a>
            </div>

            {/* Benefits Pills - Grid for tightness */}
            <div className="pt-4 fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest  mb-3">Why choose us</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {[
                  "UK Registered Pharmacy",
                  "CQC Regulated Doctors",
                  "GLP-1 Treatments", // Compliance safe
                  "Free Next-Day Delivery",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group">
                    <CheckCircle className="w-4 h-4 text-accent fill-primary/5" />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: VISUAL --- */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 fade-in-up h-full max-h-[600px]" style={{ animationDelay: "0.5s" }}>
            
            {/* Abstract Shapes */}
            <div className="absolute w-[90%] h-[90%] bg-accent/5 rounded-[3rem] rotate-6 border border-accent/10 backdrop-blur-sm -z-10" />
            <div className="absolute w-[90%] h-[90%] bg-primary/5 rounded-[3rem] -rotate-3 border border-primary/10 backdrop-blur-sm -z-10" />

            {/* Main Image Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-primary/10 group bg-white">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
                alt="Patient smiling"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
              {/* Floating Card 1: Results (Bottom) */}
              <div className="absolute bottom-8 left-4 right-4 p-3.5 rounded-xl shadow-lg animate-float bg-white/95 backdrop-blur-md border border-white">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-primary border border-primary/5 shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Clinical Results</p>
                    <p className="text-xs font-heading font-bold text-primary leading-tight">
                      Average weight loss of <span className="text-accent drop-shadow-sm">15-20%</span> observed in clinical trials.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Verified (Top Right) */}
            <div className="absolute -right-2 top-20 bg-white/90 backdrop-blur-md p-2 pr-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 animate-float z-20 border border-white">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-accent shadow-md">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[8px] font-bold text-gray-400 uppercase">Verified By</span>
                 <span className="text-[10px] font-heading font-bold text-primary">Medical Experts</span>
              </div>
            </div>

             {/* Floating Card 3: Regulated (Left Center) */}
             <div className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur-md shadow-lg p-2.5 rounded-xl flex flex-col items-center gap-1 animate-float z-20 border border-white" style={{ animationDelay: '1s' }}>
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-[9px] font-bold text-gray-600">Regulated</span>
            </div>

          </div>
        </div>
      </div>
      
      <style jsx>{`
        .fade-in-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;