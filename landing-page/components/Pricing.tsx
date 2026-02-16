'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Pricing() {
  const included = [
    "90-minute AI systems audit",
    "AI Opportunity Map (revenue + efficiency wins)",
    "AI Risk Map (security + compliance gaps)",
    "30/60/90 day roadmap",
    "ROI snapshot with conservative estimates",
    "Implementation plan with exact tools",
    "Loom video walkthrough",
    "Zero ongoing commitment"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Pricing
          </h2>
          <p className="text-xl text-neutral-600">
            One-time audit. No ongoing commitment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-primary/20"
        >
          <div className="text-center mb-8">
            <p className="text-neutral-500 line-through text-2xl mb-2">£997</p>
            <p className="text-6xl font-bold text-primary mb-4">£497</p>
            <p className="text-neutral-600">One-time payment</p>
          </div>

          <div className="space-y-4 mb-8">
            {included.map((item, index) => (
              <div key={index} className="flex gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-neutral-700">{item}</p>
              </div>
            ))}
          </div>

          <Link
            href="#booking"
            className="block w-full bg-primary hover:bg-primary/90 text-white text-center font-semibold px-8 py-4 rounded-lg text-lg transition-colors mb-6"
          >
            Book Your AI Audit — £497
          </Link>

          <div className="border-t border-neutral-200 pt-6">
            <p className="text-sm text-neutral-600 mb-4 font-semibold">
              Comparison Context:
            </p>
            <ul className="text-sm text-neutral-600 space-y-2">
              <li>• Most UK AI agencies charge £800–£1,500 per day</li>
              <li>• Monthly retainers start at £2k+</li>
              <li>• This is a one-time £497 diagnostic with zero ongoing commitment</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg">
            <p className="text-sm text-neutral-700 text-center">
              <strong>ROI Framing:</strong> If we find you 5 hours/week back, that's £10k–£13k/year in saved time. The audit pays for itself in week one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
