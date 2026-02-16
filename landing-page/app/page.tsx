import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import WhatYouGet from '@/components/WhatYouGet';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatYouGet />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
