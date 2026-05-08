import { motion } from 'motion/react';

const brands = [
  'TechCorp', 'GlobalFlow', 'NovaSaaS', 'PeakSystems', 'LevelAnalytics', 
  'CloudScale', 'HorizonApp', 'DataHunter', 'LeadGenius', 'VortexMedia'
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
          Trusted by high-performance hunters worldwide
        </p>
      </div>
      
      <div className="flex relative items-center">
        {/* Simple Marquee Implementation */}
        <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-24 items-center">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="text-2xl font-black text-brand-navy/20 hover:text-brand-orange/50 transition-colors cursor-default tracking-tighter">
              {brand}
            </div>
          ))}
        </div>
        
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
