'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function Founder() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="glow-purple" style={{ top: '50%', right: '-20%' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            MEET THE FOUNDER
          </span>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card aspect-square rounded-3xl flex items-center justify-center">
                <User className="w-32 h-32 text-zinc-600" />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ben [Last Name]
            </h2>
            <p className="text-xl text-blue-400 mb-6">
              I help UK businesses stop guessing about AI.
            </p>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                [Placeholder: Ben's background paragraph 1 — why he started Momentum, his experience with AI and UK SMBs, what makes his approach different.]
              </p>
              <p>
                [Placeholder: Ben's background paragraph 2 — his philosophy on AI implementation, why he believes in audits over just "building stuff", commitment to no-jargon communication.]
              </p>
              <p>
                [Placeholder: Ben's background paragraph 3 — personal touch, what he's passionate about, why he's offering the launch price, vision for helping UK businesses compete using AI.]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
