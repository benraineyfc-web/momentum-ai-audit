'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Stop Guessing. Start Building.
          </h2>
          <p className="text-xl mb-8 text-white/90">
            90-minute audit. Clear roadmap. Zero obligation. £497.
          </p>

          <Link
            href="#booking"
            className="inline-block bg-white text-primary hover:bg-neutral-100 font-semibold px-10 py-5 rounded-lg text-xl transition-colors mb-8"
          >
            Book Your AI Audit Now
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mt-8">
            <span>✓ UK-Based</span>
            <span>✓ No Ongoing Commitment</span>
            <span>✓ Results in 48 Hours</span>
            <span>✓ Founder-Led</span>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-2">Founder</p>
            <p className="text-lg font-semibold">Ben Rainey</p>
            <p className="text-white/70 mt-4">
              I help UK businesses save 10–20hrs/week using AI—without the jargon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
