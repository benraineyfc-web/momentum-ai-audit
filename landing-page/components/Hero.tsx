'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
        >
          Stop Losing £X,XXX/Month to Problems You Can't See
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-700 mb-8"
        >
          90-minute AI audit shows you exactly where you're leaking time, money, and leads—with a clear 30/60/90 day plan to fix it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="#booking"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Book Your AI Audit — £497
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-neutral-600"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            UK-Based
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            No Ongoing Commitment
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Results in 48 Hours
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Founder-Led
          </span>
        </motion.div>
      </div>
    </section>
  );
}
