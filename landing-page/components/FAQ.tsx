'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What if I don't know anything about AI?",
      a: "Perfect. That's exactly who this is for. I translate the tech into plain English actions—no jargon, no complexity. If you have customers and processes, AI can improve them."
    },
    {
      q: "Is this just a sales pitch for more services?",
      a: "No. You get a complete roadmap. Implement it yourself, hire anyone, or hire us. There's zero obligation. The audit is useful on its own."
    },
    {
      q: "What if my business is too small?",
      a: "If you have customers, you have opportunities AI can improve. Most SMEs waste 10–20hrs/week on manual tasks. That's £10k–£13k/year in saved time."
    },
    {
      q: "How is this different from a free ChatGPT session?",
      a: "This is a structured business diagnosis, not prompt engineering. I map your systems, score your readiness, identify risks, and give you a prioritised action plan."
    },
    {
      q: "Can I see examples of past audits?",
      a: "I'm building my case study portfolio now—hence the discounted rate for early clients. You'll be one of the first, which is why the price is £497 instead of £997."
    },
    {
      q: "What happens after the audit?",
      a: "That's up to you. Some clients implement the roadmap themselves. Some hire us to build it. Some do nothing and keep the roadmap for later. No pressure."
    },
    {
      q: "Is £497 worth it?",
      a: "If we find you 5 hours/week back (conservative), that's £10k–£13k/year in saved time. The audit pays for itself in week one. Plus, you get the revenue upside from faster lead response and better systems."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-neutral-900 pr-8">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-neutral-600">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
