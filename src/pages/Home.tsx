import Hero from '@/src/components/home/Hero';
import SocialProof from '@/src/components/home/SocialProof';
import ProblemSolution from '@/src/components/home/ProblemSolution';
import Features from '@/src/components/home/Features';
import HowItWorks from '@/src/components/home/HowItWorks';
import Testimonials from '@/src/components/home/Testimonials';
import Pricing from '@/src/components/home/Pricing';
import FAQ from '@/src/components/home/FAQ';
import FinalCTA from '@/src/components/home/FinalCTA';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
