'use client';

import { motion } from 'framer-motion';
import { Map, Shield, Calendar, TrendingUp, Video } from 'lucide-react';

export default function WhatYouGet() {
  const deliverables = [
    {
      icon: Map,
      title: "AI Opportunity Map",
      description: "Every process in your business ranked by automation potential and ROI",
      size: "large"
    },
    {
      icon: Shield,
      title: "AI Risk Assessment",
      description: "What to automate, what to leave alone, and where to be careful",
      size: "small"
    },
    {
      icon: Calendar,
      title: "30/60/90 Day Roadmap",
      description: "Phased implementation plan so you know exactly what to do and when",
      size: "small"
    },
    {
      icon: TrendingUp,
      title: "ROI Snapshot",
      description: "Projected time and cost savings for each recommendation, with real numbers",
      size: "large"
    },
    {
      icon: Video,
      title: "Loom Video Walkthrough",
      description: "A personal video walking you through every recommendation, so nothing gets lost in translation",
      size: "full"
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
    <section id="what-you-get" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="glow-purple" style={{ top: '30%', right: '-10%' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            WHAT YOU GET
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Complete AI Opportunity Blueprint
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            Not a generic PDF. A bespoke, actionable plan built around your business.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            const colSpan = item.size === "large" ? "md:col-span-1" : item.size === "full" ? "md:col-span-2" : "md:col-span-1";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass-card p-8 ${colSpan}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
