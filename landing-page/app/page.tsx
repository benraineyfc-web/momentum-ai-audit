import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import WhatYouGet from '@/components/WhatYouGet';
import HowItWorks from '@/components/HowItWorks';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Founder from '@/components/Founder';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <WhatYouGet />
        <HowItWorks />
        <WhoThisIsFor />
        <Pricing />
        <FAQ />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
