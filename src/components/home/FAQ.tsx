import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    q: "How fast is 'Real-Time' exactly?",
    a: "Our detection engine processes signals in under 200ms. Alerts are dispatched to your team's devices via Slack or SMS within 2-3 seconds of the interaction occurring. In the sales world, those seconds are the difference between a 'Yes' and a 'Who are you?'"
  },
  {
    q: "Do we need to replace our current CRM?",
    a: "Absolutely not. CT Hunter is designed to sit on top of your existing CRM (Salesforce, HubSpot, etc.). It acts as a super-charger, feeding high-intent data into your existing workflows without disrupting your team's routine."
  },
  {
    q: "What makes this different from regular Lead Gen?",
    a: "Regular lead gen gives you a static list of names. CT Hunter gives you dynamic behavior. We don't just tell you WHO they are; we tell you WHAT they are doing right now and HOW likely they are to buy today."
  },
  {
    q: "Is it difficult to set up?",
    a: "Most teams are fully configured in under 15 minutes. It's a simple script addition to your site and a 1-click integration with your CRM. Our onboarding specialists are also available to handle it for you on the Pro plan."
  },
  {
    q: "Does CT Hunter work for B2B or B2C?",
    a: "While our engine is most lethal in high-ticket B2B environments where individual lead value is high, it is successfully used by high-end real estate, luxury retail, and professional services in the B2C space."
  },
  {
    q: "What is 'Priority Scoring'?",
    a: "Our AI analyzes 50+ data points including past interaction history, company size, recent funding, and specific page behavior to assign a 'Hunting Score'. It tells your team exactly which lead is the 'Whale' and who is just 'Plankton'."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-brand-gray overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">Protocol Info</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy">Common Queries</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={cn(
                  "bg-white rounded-3xl border transition-all duration-300",
                  isOpen ? "border-brand-orange shadow-xl shadow-brand-orange/5" : "border-gray-100 shadow-sm"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-8 flex justify-between items-center gap-4"
                >
                  <span className="text-lg font-bold text-brand-navy leading-tight">{faq.q}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center transition-colors shrink-0",
                    isOpen ? "bg-brand-orange text-white" : "bg-brand-gray text-brand-navy"
                  )}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-gray-500 leading-relaxed border-t border-gray-50 mt-[-1px]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
