import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Connect Your Pipeline",
    desc: "Integrate CT Hunter with your website, social channels, and existing CRM in under 5 minutes."
  },
  {
    number: "02",
    title: "The Hunt Begins",
    desc: "Our engine scans for intent 24/7, scoring leads and triggering alerts the moment a whale enters the water."
  },
  {
    number: "03",
    title: "Close Deals Faster",
    desc: "Receive curated context for every lead, automated follow-ups, and everything you need to win."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-brand-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">The Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">Three Steps to<br /><span className="text-brand-orange">Total Dominance</span></h3>
          </div>
          <p className="text-gray-400 max-w-sm text-lg italic">"Success is where preparation meets opportunity. CT Hunter provides the opportunity."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 w-full h-1 bg-white/5 hidden md:block" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 space-y-6"
            >
              <div className="text-8xl font-black text-white/5 absolute -top-12 -left-4 select-none">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shadow-brand-orange/20">
                {i + 1}
              </div>
              <h4 className="text-2xl font-bold">{step.title}</h4>
              <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
