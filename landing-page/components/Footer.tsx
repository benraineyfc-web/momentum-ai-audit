'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-bold gradient-accent-text">
              Momentum
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-zinc-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Momentum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
