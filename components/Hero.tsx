"use client";

import { CheckCircle, ArrowRight, Star, Activity, Stethoscope, TestTube, Pill, TrendingDown, ShieldCheck, Syringe, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-12 lg:pt-32 lg:pb-20 lg:min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#E0F9FB] selection:bg-primary/20 selection:text-primary">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[80px] translate-x-1/4 -translate-y-1/4 animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* --- LEFT COLUMN --- */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Trust Badge */}
            <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-default bg-white border border-accent/20">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-[#00b67a] border-[1.5px] border-white flex items-center justify-center shadow-sm z-10 relative">
                      <Star className="w-2 h-2 text-white fill-white" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Trustpilot</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-primary">Rated Excellent</span>
                    <span className="text-[10px] font-medium text-gray-500">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4 fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary leading-[1.1] tracking-tight">
                Medical weight loss, <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">
                    engineered by doctors.
                  </span>
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-main/80 max-w-lg leading-relaxed font-medium">
                Access effective, science-backed <span className="font-bold text-primary">GLP-1 treatments</span> and holistic care prescribed online. 
                No waiting rooms. No judgment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://app.xflowhealth.com/start"
                className="group relative bg-accent hover:bg-[#33efff] text-primary text-base font-heading font-bold py-3.5 px-8 rounded-full shadow-[0_10px_30px_-10px_rgba(0,234,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <span>Check Eligibility</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="/weight-loss"
                className="group bg-white hover:bg-white/80 text-primary border-2 border-transparent hover:border-accent/20 text-base font-heading font-bold py-3.5 px-8 rounded-full transition-all shadow-sm hover:shadow-lg flex items-center justify-center"
              >
                View Plans
              </a>
            </div>

            {/* --- UPGRADED ECOSYSTEM SHORTCUTS (Interactive Cards) --- */}
            <div className="fade-in-up pt-6" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-4 opacity-80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                  <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Explore our platform</h2>
                  <div className="h-px bg-primary/10 flex-1"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                {/* 1. Weight Loss Plans */}
                <a href="/weight-loss" className="group flex items-center justify-between p-3 bg-white border border-gray-200 hover:border-blue-400 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto">
                   <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                          <Syringe className="w-5 h-5" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs font-bold text-primary leading-tight group-hover:text-blue-700 transition-colors">Weight Loss</span>
                          <span className="text-[10px] text-gray-500 leading-tight">Clinical Programmes</span>
                       </div>
                   </div>
                   <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" />
                </a>

                {/* 2. Blood Tests */}
                <a href="/diagnostics" className="group flex items-center justify-between p-3 bg-white border border-gray-200 hover:border-purple-400 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto">
                   <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center transition-colors group-hover:bg-purple-600 group-hover:text-white">
                          <TestTube className="w-5 h-5" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs font-bold text-primary leading-tight group-hover:text-purple-700 transition-colors">Blood Tests</span>
                          <span className="text-[10px] text-gray-500 leading-tight">Health Insights</span>
                       </div>
                   </div>
                   <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-purple-600 transition-colors" />
                </a>

                {/* 3. Daily Support */}
                <a href="/supplements" className="group flex items-center justify-between p-3 bg-white border border-gray-200 hover:border-orange-400 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto">
                   <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center transition-colors group-hover:bg-orange-600 group-hover:text-white">
                          <Pill className="w-5 h-5" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs font-bold text-primary leading-tight group-hover:text-orange-700 transition-colors">Daily Support</span>
                          <span className="text-[10px] text-gray-500 leading-tight">Wellness & Relief</span>
                       </div>
                   </div>
                   <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-orange-600 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 fade-in-up h-full max-h-[400px] lg:max-h-[550px]" style={{ animationDelay: "0.5s" }}>
            <div className="absolute w-[95%] h-[95%] bg-white rounded-[2.5rem] rotate-3 opacity-40 -z-10" />
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white group bg-white">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
                alt="Confident healthy patient"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Floating Result Card */}
              <div className="absolute bottom-6 left-4 right-4 p-3 rounded-xl shadow-lg animate-float bg-white/95 backdrop-blur-md border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#E0F9FB] rounded-lg flex items-center justify-center text-primary border border-accent/20 shrink-0">
                    <Activity className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Clinical Results</p>
                    <p className="text-[11px] font-heading font-bold text-primary leading-tight">
                      Average weight loss of <span className="text-accent drop-shadow-sm font-extrabold">15-20%</span> observed in clinical trials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Verified Badge */}
            <div className="absolute -right-2 top-12 bg-white/90 backdrop-blur-md p-2 pr-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 animate-float z-20 border border-white">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-accent shadow-md">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[8px] font-bold text-gray-400 uppercase">Verified By</span>
                 <span className="text-[10px] font-heading font-bold text-primary">Medical Experts</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <style jsx>{`
        .fade-in-up { animation: fadeUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 1.5s infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
};

export default Hero;