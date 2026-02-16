'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What exactly is an AI audit?",
      a: "It's a comprehensive analysis of your business operations to identify where AI and automation can save time, reduce costs, and improve results. You get a bespoke blueprint — not a generic report."
    },
    {
      q: "How long does it take?",
      a: "5 business days from your initial call to delivery of your full audit pack."
    },
    {
      q: "Do I need to be technical?",
      a: "Not at all. Everything is written in plain English with a personal video walkthrough."
    },
    {
      q: "What if AI isn't right for my business?",
      a: "That's genuinely useful to know — and we'll tell you. If the audit reveals AI isn't the right move yet, we'll explain why and what to consider first."
    },
    {
      q: "Do you implement the recommendations?",
      a: "The audit is the plan. Implementation is a separate conversation — but the roadmap is designed to be actionable whether you use us or someone else."
    },
    {
      q: "Is this just ChatGPT tips?",
      a: "No. This is a structured analysis of your specific business processes, tools, and workflows. We look at your entire operation, not just where to plug in a chatbot."
    }
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Questions? We've Got Answers.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
