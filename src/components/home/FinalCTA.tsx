import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-navy rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,22,40,0.5)]">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] -z-0" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 text-brand-orange px-4 py-2 rounded-full border border-white/10 text-sm font-black uppercase tracking-widest"
            >
              <Sparkles className="w-5 h-5 fill-current" />
              Limited Time: Free Closing Assessment
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to Hunt Your Next <span className="text-brand-orange">Big Client?</span>
            </h2>
            
            <p className="text-xl text-white/60">
              Join the ranks of the elite closers. Stop waiting for leads to find you. Go out and capture them with the most lethal tool in the sales stack.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link
                to="/contact"
                className="bg-brand-orange text-white px-12 py-5 rounded-2xl text-xl font-black flex items-center gap-3 hover:bg-white hover:text-brand-navy transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-orange/40 group"
              >
                Get Started Free
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest">
                No Credit Card Required • Instant Activation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
