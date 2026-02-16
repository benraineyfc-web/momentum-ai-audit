'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      title: "Manual Processes Eating 10–20+ Hours/Week",
      description: "Every hour spent on repetitive admin is an hour not spent growing your business. If you're doing tasks a computer could handle, you're paying the 'manual tax' every single week."
    },
    {
      title: "Leads Falling Through Cracks",
      description: "Slow response times kill conversions. If you're not responding to leads within minutes, they're booking with competitors who are."
    },
    {
      title: "Competitors Using AI While You're Stuck in Spreadsheets",
      description: "Your competitors are automating lead capture, follow-ups, and customer onboarding. Every day you wait is a day they're pulling ahead."
    }
  ];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">
            You're Losing Time, Money, and Leads to Problems You Can't See
          </h2>
        </motion.div>

        <div className="space-y-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-neutral-800 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-3 text-secondary">
                {problem.title}
              </h3>
              <p className="text-neutral-300">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-red-900/20 border border-red-800 rounded-lg text-center"
        >
          <p className="text-xl font-semibold mb-2">Cost of Inaction:</p>
          <p className="text-3xl font-bold text-red-400">£2,000–£5,000/month</p>
          <p className="text-neutral-300 mt-2">
            Conservative estimate based on 15hrs/week @ £50/hr + missed revenue from slow lead response
          </p>
        </motion.div>
      </div>
    </section>
  );
}
