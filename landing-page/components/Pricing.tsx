'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Pricing() {
  const included = [
    "AI Opportunity Map",
    "AI Risk Assessment",
    "30/60/90 Day Roadmap",
    "ROI Snapshot with projected savings",
    "Personal Loom Video Walkthrough",
    "Optional follow-up call"
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="glow-purple" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            INVESTMENT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            One Audit. Clarity for Months.
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />

          <div className="relative glass-card p-8 md:p-12 border-2 border-blue-500/20">
            {/* Price */}
            <div className="text-center mb-10">
              <p className="text-zinc-500 line-through text-2xl mb-2">£997</p>
              <p className="text-6xl md:text-7xl font-bold gradient-accent-text mb-3">
                £497
              </p>
              <p className="text-zinc-400 text-lg">Launch price — limited availability</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {included.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-white">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#booking"
              className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 cta-glow mb-8"
            >
              Book Your AI Audit
            </Link>

            {/* Context Box */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-sm text-zinc-400 mb-4">
                <span className="text-white font-semibold">For comparison:</span> most agencies charge £800–£1,500/day. A single retainer starts at £2,000+/month.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
