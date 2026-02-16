'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function WhoThisIsFor() {
  const goodFit = [
    "You're a UK business owner doing £500K+ revenue",
    "Your team wastes hours on repetitive manual tasks",
    "You know AI is important but don't know where to start",
    "You want a clear, jargon-free plan — not a sales pitch"
  ];

  const notFit = [
    "You're looking for someone to build and implement AI systems (we plan, you execute)",
    "You want a generic ChatGPT tips PDF",
    "Your business is pre-revenue or very early stage",
    "You're not ready to invest in operational improvements"
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="glow-blue" style={{ top: '40%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            IS THIS RIGHT FOR YOU?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Who This Is For
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* This IS for you */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-8 border-green-500/20 bg-green-500/5"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400" />
              </span>
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* This is NOT for you */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 border-red-500/20 bg-red-500/5"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </span>
              This isn't for you if...
            </h3>
            <ul className="space-y-4">
              {notFit.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
