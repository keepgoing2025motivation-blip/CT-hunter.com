import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Target, Calendar } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="pt-24 min-h-screen">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Content & Form */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">Command Center</h2>
                <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight uppercase tracking-tighter">
                  Let's Talk <span className="text-brand-orange">Strategy</span>
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                  Ready to deploy CT Hunter? Fill out the form below or book a direct strategy audit with one of our Lead Commanders.
                </p>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl shadow-black/5 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6 relative z-10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Hunter" 
                            className="w-full bg-brand-gray border border-transparent focus:border-brand-orange outline-none p-4 rounded-2xl font-bold transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                          <input 
                            required
                            type="email" 
                            placeholder="jhunter@company.com" 
                            className="w-full bg-brand-gray border border-transparent focus:border-brand-orange outline-none p-4 rounded-2xl font-bold transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Company Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Hunter Enterprises Inc." 
                          className="w-full bg-brand-gray border border-transparent focus:border-brand-orange outline-none p-4 rounded-2xl font-bold transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message / Current Pain</label>
                        <textarea 
                          rows={4}
                          placeholder="Tell us about the leads you're currently losing..." 
                          className="w-full bg-brand-gray border border-transparent focus:border-brand-orange outline-none p-4 rounded-2xl font-bold transition-all resize-none"
                        ></textarea>
                      </div>
                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className={cn(
                          "w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all",
                          isSubmitting ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-brand-navy text-white hover:bg-brand-orange shadow-lg shadow-brand-navy/10"
                        )}
                      >
                        {isSubmitting ? "Dispatching Signal..." : (
                          <>
                            Send Deployment Request
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-6"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-black text-brand-navy">Signal Received!</h3>
                      <p className="text-gray-500 max-w-xs mx-auto">
                        Your request has been dispatched to our Command Center. A strategist will contact you within 4 hours.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-brand-orange font-black uppercase tracking-widest text-xs hover:underline decoration-2"
                      >
                        Send Another Signal
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl -z-0" />
              </div>
            </div>

            {/* Right: Sidebar & Map */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Email Us</h4>
                    <p className="text-sm text-gray-500">hunter@cthunter.com</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Call Command</h4>
                    <p className="text-sm text-gray-500">+1 (800) HUNT-LEADS</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy p-10 rounded-[3rem] text-white space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
                  <Calendar className="w-32 h-32" />
                </div>
                <h4 className="text-2xl font-black relative z-10">Prefer a Demo?</h4>
                <p className="text-white/60 relative z-10 leading-relaxed">
                  Book a live walkthrough of our detection engine. See CT Hunter in action with your own site data.
                </p>
                <div className="relative z-10">
                  <button className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white hover:text-brand-navy transition-all shadow-xl shadow-brand-orange/20">
                     Book Free Walkthrough
                     <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                  <span className="font-bold text-brand-navy">Hunting Grounds HQ</span>
                </div>
                <div className="h-64 bg-brand-gray rounded-[2.5rem] overflow-hidden border border-gray-100 relative group grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Mock Map Background */}
                  <div className="absolute inset-0 bg-[#e5e7eb]">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0A1628_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                       <div className="relative">
                         <div className="w-4 h-4 bg-brand-orange rounded-full animate-ping absolute inset-0" />
                         <div className="w-4 h-4 bg-brand-orange rounded-full relative z-10 shadow-[0_0_20px_rgba(255,107,0,0.5)] border-2 border-white" />
                       </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-brand-navy shadow-sm">
                    Silicon Valley, CA • HQ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
