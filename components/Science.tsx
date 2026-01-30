"use client";

import { Brain, Clock, Activity, Check, TrendingDown } from "lucide-react";

const Science = () => {
  return (
    // Reduced vertical padding for tighter viewport fit
    <section className="py-12 md:py-16 bg-surface-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Reduced gap from 16/20 to 8/12 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* --- LEFT COLUMN: VISUAL --- */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            {/* Cyan Backdrop Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-[80px] -z-10" />
            
            {/* Main Image Container - Constrained height/width */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl bg-white transform hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
                alt="Scientific research on metabolism"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white max-w-[260px] animate-float">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Effectiveness</span>
                </div>
                <p className="text-xs font-medium text-primary leading-relaxed">
                  GLP-1s are clinically proven to be <span className="font-bold text-accent">3x more effective</span> than diet and exercise alone.
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: COPY --- */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[9px] font-bold uppercase tracking-widest">
                <Brain className="w-3 h-3" />
                The Science
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary tracking-tight leading-[1.1]">
                It’s biology, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                  not willpower.
                </span>
              </h2>
              <p className="text-base lg:text-lg text-main/80 leading-relaxed max-w-lg">
                Your body fights weight loss by increasing hunger hormones. GLP-1 treatments work by mimicking natural signals to reset your biological set point.
              </p>
            </div>

            {/* Benefit List */}
            <div className="space-y-4">
              {[
                {
                  icon: Brain,
                  title: "Quiets 'Food Noise'",
                  desc: "Reduces constant thoughts about food by acting on appetite receptors in the brain."
                },
                {
                  icon: Clock,
                  title: "Keeps You Fuller, Longer",
                  desc: "Slows down gastric emptying so you feel satisfied with smaller portions."
                },
                {
                  icon: Activity,
                  title: "Metabolic Reset",
                  desc: "Helps regulate blood sugar levels and improves how your body processes energy."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-surface-cyan flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-300 shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-primary mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Note */}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                FDA & MHRA Approved Treatments Available
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Science;