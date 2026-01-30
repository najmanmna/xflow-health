"use client";

import { FileText, Stethoscope, Package, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      Icon: FileText,
      title: "Complete Consultation",
      desc: "Answer a secure, 2-minute medical questionnaire. No video call required.",
      highlight: "2-minute",
    },
    {
      Icon: Stethoscope,
      title: "Clinician Review",
      desc: "Our UK-registered doctors review your eligibility and prescribe treatment within 24 hours.",
      highlight: "24 hours",
    },
    {
      Icon: Package,
      title: "Discreet Delivery",
      desc: "Your medication is delivered to your door in plain, unbranded packaging the next day.",
      highlight: "next day",
    },
  ];

  return (
    // Reduced vertical padding for tighter viewport fit
    <section id="how-it-works" className="py-12 md:py-16 bg-primary relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header - Compacted Margins */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
            Medical weight loss, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">simplified.</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 font-light">
            Skip the waiting room. Get the same clinical care from the comfort of your home.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              // Reduced padding (p-6 -> p-5) for compact cards
              className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-secondary/30 border border-white/5 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Step Number */}
              <span className="absolute top-2 right-4 text-6xl font-bold text-white/5 -z-10 select-none group-hover:text-accent/5 transition-colors duration-500">
                {index + 1}
              </span>

              {/* Icon Circle */}
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:rotate-6 transition-all duration-500 relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <step.Icon className="w-7 h-7 text-accent transition-colors duration-300 group-hover:text-primary" />
                </div>
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.desc.split(step.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="font-semibold text-accent">{step.highlight}</span>}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* CTA - Tighter spacing */}
        <div className="mt-8 text-center">
          <a
            href="https://app.xflowhealth.com/start"
            className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-primary text-primary text-base font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl shadow-cyan-500/20 transform hover:-translate-y-1"
          >
            Start your consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-xs text-gray-500">
            No commitment required. Takes 2 minutes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;