'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingDown, Zap } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Drowning in Admin",
      description: "Hours lost on repetitive tasks that AI could handle in minutes"
    },
    {
      icon: TrendingDown,
      title: "Leads Slipping Through",
      description: "No automated follow-up means warm prospects go cold"
    },
    {
      icon: Zap,
      title: "Flying Blind on AI",
      description: "You know AI matters, but you don't know where to start or what to trust"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900" />
      <div className="glow-blue" style={{ top: '20%', left: '-10%' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            THE PROBLEM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Your Competitors Are Using AI.</span>
            <br />
            <span className="gradient-accent-text">You're Still Doing It Manually.</span>
          </h2>
        </motion.div>

        {/* Pain Point Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cost of Inaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card p-8 text-center border-red-500/20 bg-red-500/5"
        >
          <p className="text-lg text-zinc-400 mb-2">The real cost:</p>
          <p className="text-4xl md:text-5xl font-bold text-white mb-4">
            £2,000–£5,000<span className="text-zinc-500">/month</span>
          </p>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Most UK SMBs lose between £2,000–£5,000/month in wasted time and missed opportunities. That's <span className="text-red-400 font-semibold">£24,000–£60,000/year</span> walking out the door.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
