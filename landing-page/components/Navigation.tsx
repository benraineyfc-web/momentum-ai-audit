'use client';

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-accent-text">
          Momentum
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#how-it-works"
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#what-you-get"
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            What You Get
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            FAQ
          </Link>
        </div>

        <Link
          href="#booking"
          className="px-6 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg transition-all cta-glow"
        >
          Book Your Audit
        </Link>
      </div>
    </motion.nav>
  );
}
