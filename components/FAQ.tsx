"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setCurrentIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need a prescription?",
      answer: "Yes. All GLP-1 treatments (Wegovy®, Mounjaro®) are prescription-only medicines. Our UK-registered clinicians will review your assessment and issue a prescription if you are eligible."
    },
    {
      question: "How fast will I lose weight?",
      answer: "Clinical trials show patients lose 15-20% of their body weight on average over 68 weeks. Most patients start seeing results within the first 4 weeks combined with lifestyle changes."
    },
    {
      question: "Is the packaging discreet?",
      answer: "100%. We ship in plain, unbranded packaging. There is no mention of weight loss or pharmacy on the outside of the box."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, anytime. There are no lock-in contracts. You can pause or cancel your plan instantly from your account dashboard."
    },
    {
      question: "Are the medications genuine?",
      answer: "Absolutely. We are a UK-registered pharmacy regulated by the GPhC. We source all medications directly from official UK manufacturers."
    }
  ];

  return (
    <section className="py-24 bg-surface-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Common questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about the treatment.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-white border-accent/50 shadow-lg shadow-blue-500/5" 
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setCurrentIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-heading font-bold text-lg ${activeIndex === index ? "text-primary" : "text-gray-600"}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? "bg-accent/10 text-accent" : "bg-gray-50 text-gray-400"}`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;