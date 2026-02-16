'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="booking" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20" />
      <div className="absolute inset-0 bg-neutral-950/80" />

      {/* Glows */}
      <div className="glow-blue" style={{ top: '20%', left: '20%' }} />
      <div className="glow-purple" style={{ bottom: '20%', right: '20%' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to See What AI Can Do for Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Book your audit today. Get your roadmap in 5 days.
          </p>

          <Link
            href="#booking"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-5 rounded-xl text-xl transition-all duration-300 cta-glow mb-6"
          >
            Book Your AI Audit — £497
          </Link>

          <p className="text-zinc-500 text-sm">
            Questions first? Email{' '}
            <a href="mailto:hello@momentum.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
              hello@momentum.ai
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
