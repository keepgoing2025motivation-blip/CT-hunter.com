import { ArrowRight, Play, CheckCircle2, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-gray/50 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-brand-orange/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            Available Now: Detection Engine v2.4
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy leading-[1.1] tracking-tight">
            Stop Missing <span className="text-brand-orange">Opportunities.</span><br />
            Start Hunting Them.
          </h1>
          
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
            CT Hunter finds, tracks, and converts high-value leads before your competition even sees them. Powered by real-time detection and predictive priority scoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact"
              className="bg-brand-orange text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-navy transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-orange/30 group"
            >
              Start Hunting Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="bg-white text-brand-navy border-2 border-brand-navy/10 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 hover:border-brand-orange transition-all group">
              <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              See How It Works
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {[
              '500+ Active Hunters',
              '98% Retention Rate',
              '24/7 Priority Detection',
            ].map((stat) => (
              <div key={stat} className="flex items-center gap-2 text-sm font-bold text-gray-500">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                {stat}
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          {/* Mockup / Visual */}
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden aspect-video lg:aspect-square flex items-center justify-center bg-gradient-to-br from-brand-navy to-[#1a2d4b]">
            <div className="absolute inset-0 opacity-20">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
            
            <div className="relative text-center p-12">
               <motion.div 
                 animate={{ y: [0, -10, 0] }} 
                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                 className="w-24 h-24 bg-brand-orange mx-auto rounded-full flex items-center justify-center shadow-2xl shadow-brand-orange/50 mb-6"
               >
                 <Target className="w-12 h-12 text-white" />
               </motion.div>
               <h3 className="text-2xl font-bold text-white mb-2">Lead Detected</h3>
               <p className="text-brand-orange text-sm font-bold tracking-widest uppercase mb-6">Value: $450k Annually</p>
               <div className="space-y-3 max-w-[240px] mx-auto">
                 <div className="h-3 bg-white/10 rounded-full w-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 2, delay: 1 }} className="h-full bg-brand-orange" />
                 </div>
                 <p className="text-white/60 text-[10px] font-medium italic">Targeting completion in 0.4s...</p>
               </div>
            </div>
          </div>
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-12 -right-8 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4 hidden sm:flex"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              $
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Total Pipeline</p>
              <p className="text-lg font-black text-brand-navy">$12.4M</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
