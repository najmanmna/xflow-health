"use client";

import { Check, ArrowRight, Info, ShieldCheck } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Flexible Monthly",
      desc: "Pay as you go. Cancel anytime.",
      price: "229",
      period: "per month",
      isPopular: false,
      features: [
        "GLP-1 Medication (Wegovy® / Mounjaro®)",
        "Doctor consultation & approval",
        "Next-day refrigerated delivery",
        "Sharps bin & needles included",
        "24/7 Clinical support team",
      ],
      cta: "Select Monthly",
      href: "https://app.xflowhealth.com/start?plan=monthly",
    },
    {
      name: "3-Month Bundle",
      desc: "Commit to results & save money.",
      price: "199",
      period: "per month",
      isPopular: true, // Highlights this card
      saveLabel: "Save £90",
      features: [
        "Everything in Monthly",
        "Guaranteed stock reservation",
        "Priority clinician review",
        "Quarterly weight tracking report",
        "Free nutritional guide PDF",
      ],
      cta: "Select Bundle",
      href: "https://app.xflowhealth.com/start?plan=bundle",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-white skew-y-3 -translate-y-20 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-main/80">
            No hidden fees. No joining costs. Just effective treatment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                plan.isPopular
                  ? "bg-white border-2 border-accent shadow-xl scale-105 z-10"
                  : "bg-white/60 border border-gray-200 hover:border-gray-300 hover:bg-white"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-accent text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-primary">{plan.name}</h3>
                <p className="text-sm text-light mt-1">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">£{plan.price}</span>
                <span className="text-sm text-main font-medium">{plan.period}</span>
                {plan.saveLabel && (
                  <span className="ml-auto text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {plan.saveLabel}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-surface-gray flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-main">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.href}
                className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-accent hover:bg-accent/90 text-primary shadow-lg shadow-cyan-200/50"
                    : "bg-primary hover:bg-secondary text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
              
              {/* Micro-Copy */}
              <p className="text-center text-[10px] text-light mt-4 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Price includes medication & delivery
              </p>
            </div>
          ))}
        </div>

        {/* The "Included Value" Strip */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <p className="text-center text-xs font-bold text-light uppercase tracking-widest mb-10">
            Included in every plan
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Free Consultation", desc: "Online assessment review" },
              { title: "Ongoing Care", desc: "Unlimited clinician messaging" },
              { title: "Discreet Delivery", desc: "Plain, tracked packaging" },
              { title: "Cancel Anytime", desc: "No long-term contracts" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                <p className="text-xs text-main">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;