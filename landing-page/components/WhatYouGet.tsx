'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhatYouGet() {
  const deliverables = [
    {
      title: "AI Opportunity Map",
      description: "Revenue wins + efficiency gains ranked by impact and effort"
    },
    {
      title: "AI Risk Map",
      description: "Security gaps, compliance issues, and data exposure points"
    },
    {
      title: "30/60/90 Day AI Roadmap",
      description: "Prioritised action plan with quick wins and long-term strategy"
    },
    {
      title: "ROI Snapshot",
      description: "Time saved, cost saved, and revenue potential (conservative estimates)"
    },
    {
      title: "Implementation Plan",
      description: "Exact tools, timeline, and investment range (implement yourself or hire us)"
    }
  ];

  const process = [
    { step: "1", action: "Book", detail: "Fill out 5-min form" },
    { step: "2", action: "Intake Form", detail: "We scan your systems" },
    { step: "3", action: "90-Min Deep Dive", detail: "Zoom call walkthrough" },
    { step: "4", action: "Your Roadmap", detail: "Delivered within 48hrs" }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            What You Get
          </h2>
          <p className="text-xl text-neutral-600">
            A complete AI systems audit delivered in 48 hours
          </p>
        </motion.div>

        {/* Deliverables */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-4 relative">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{item.action}</h4>
                <p className="text-sm text-neutral-600">{item.detail}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-neutral-400 absolute right-0 top-4 -mr-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-600 mt-8">
            <strong>Timeline:</strong> Roadmap delivered within 48 hours of your call
          </p>
        </motion.div>
      </div>
    </section>
  );
}
