import { AlertCircle, CheckCircle2, TrendingUp, Clock, EyeOff, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const pains = [
  {
    icon: <EyeOff className="w-6 h-6" />,
    title: "The Visibility Gap",
    desc: "Valuable leads are browsing your ecosystem right now, but remain completely invisible to your sales team."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Slow Follow-Up",
    desc: "A hot lead goes cold within 5 minutes. Most teams take 48+ hours to respond. That's money down the drain."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Wasted Sales Effort",
    desc: "Your closers are spending 80% of their time chasing low-value prospects instead of hunting whales."
  }
];

export default function ProblemSolution() {
  return (
    <section className="py-24 px-6 bg-brand-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
               <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange mb-4">The Revenue Leak</h2>
               <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
                 Your competition is eating your lunch.
               </h3>
            </div>
            
            <div className="space-y-8">
              {pains.map((pain, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="text-red-500 shrink-0">
                    <div className="bg-red-50 p-3 rounded-xl border border-red-100">
                      {pain.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">{pain.title}</h4>
                    <p className="text-gray-500 text-base leading-relaxed">{pain.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-brand-navy rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(10,22,40,0.4)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10 space-y-10">
              <div className="inline-block bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                The CT Hunter Solution
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Turn your pipeline into a <span className="text-brand-orange">hunting ground.</span>
              </h3>
              
              <ul className="space-y-8">
                {[
                  "Predictive Lead Scoring identifies the 20% of leads that generate 80% of your revenue.",
                  "Instant Mobile Alerts ensure your team is the first to say 'hello' while the lead is active.",
                  "Automated Persistence Engines keep hunting for the meeting so your team can focus on closing."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8">
                <button className="w-full bg-white text-brand-navy hover:bg-brand-orange hover:text-white transition-all py-4 rounded-xl font-black text-lg shadow-lg group">
                   Patch Your Leaks Now
                   <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
