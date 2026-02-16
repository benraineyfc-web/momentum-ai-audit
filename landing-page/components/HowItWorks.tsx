'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, Search, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Phone,
      title: "Book a Call",
      description: "Quick 15-min chat to understand your business and goals"
    },
    {
      number: "2",
      icon: Search,
      title: "We Dive In",
      description: "Deep analysis of your workflows, tools, and pain points"
    },
    {
      number: "3",
      icon: FileText,
      title: "Your Audit is Built",
      description: "Bespoke AI roadmap crafted specifically for your business"
    },
    {
      number: "4",
      icon: Rocket,
      title: "You Get Your Blueprint",
      description: "Delivered with a Loom walkthrough and optional follow-up call"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="how-it-works" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            From Enquiry to AI Roadmap in 5 Days
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="glass-card p-6 text-center">
                    {/* Icon Circle */}
                    <div className="relative mx-auto w-16 h-16 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold mb-3">
                        STEP {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-blue-500/20" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-zinc-400 mt-12"
        >
          <span className="font-semibold text-white">Timeline:</span> Complete roadmap delivered within 5 business days
        </motion.p>
      </div>
    </section>
  );
}
