'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Gradient Glows */}
      <div className="glow-blue" style={{ top: '10%', left: '10%' }} />
      <div className="glow-purple" style={{ bottom: '10%', right: '10%' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-8"
        >
          AI CONSULTING FOR UK BUSINESSES
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">Stop Losing £2,000+ Every Month</span>
          <br />
          <span className="text-white">to Manual Processes</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          Get a personalised AI roadmap that shows exactly where automation will save you time, cut costs, and unlock growth — in just 5 days.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            href="#booking"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 cta-glow"
          >
            Book Your AI Audit — £497
          </Link>
          <Link
            href="#what-you-get"
            className="px-8 py-4 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
          >
            See What You'll Get
            <ChevronDown className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-zinc-500"
        >
          Join 50+ UK businesses already saving 15+ hours/week with AI
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
