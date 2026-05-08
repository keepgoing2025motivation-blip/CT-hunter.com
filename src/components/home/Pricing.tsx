import { Check, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const tiers = [
  {
    name: "Starter",
    price: "49",
    desc: "Perfect for solo hunters and small teams getting started.",
    features: [
      "Up to 500 Leads /mo",
      "Real-Time Slack Alerts",
      "Basic Detection Engine",
      "CRM Sync (HubSpot/Pipedrive)",
      "24/5 Email Support"
    ],
    cta: "Start Hunting",
    highlight: false
  },
  {
    name: "Pro",
    price: "149",
    desc: "The sweet spot for scaling teams and mid-market dominant players.",
    features: [
      "Unlimited Leads",
      "Priority Priority Scoring",
      "Advanced Behavior Tracking",
      "Multi-Channel Automation",
      "Salesforce Integration",
      "24/7 Priority Support"
    ],
    cta: "Go Pro Now",
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Bespoke detection infrastructure for global market leaders.",
    features: [
      "Custom Data Sources",
      "Dedicated Closing Consultant",
      "Unlimited Hunter Seats",
      "API Access for Developers",
      "On-Premise Options",
      "White-Glove Onboarding"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy">Scale Your Hunting Ground</h3>
          <p className="text-gray-500 text-lg">Transparent pricing for transparent results. Pick your tier and start winning.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 rounded-[3rem] border transition-all duration-300",
                tier.highlight 
                  ? "bg-brand-navy text-white border-brand-navy shadow-2xl shadow-brand-navy/30 scale-105 z-10" 
                  : "bg-white text-brand-navy border-gray-100 shadow-xl shadow-black/5"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-orange/40">
                  {tier.badge}
                </div>
              )}

              <div className="mb-8">
                <h4 className={cn("text-xl font-black uppercase tracking-widest mb-2", tier.highlight ? "text-brand-orange" : "text-brand-navy/60")}>
                  {tier.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  {tier.price !== "Custom" && <span className="text-2xl font-bold">$</span>}
                  <span className="text-6xl font-black tracking-tighter">{tier.price}</span>
                  {tier.price !== "Custom" && <span className={cn("text-lg font-medium", tier.highlight ? "text-white/60" : "text-gray-400")}>/mo</span>}
                </div>
                <p className={cn("mt-4 text-sm leading-relaxed", tier.highlight ? "text-white/70" : "text-gray-500")}>
                  {tier.desc}
                </p>
              </div>

              <ul className="space-y-4 mb-10 grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-sm font-medium">
                    <Check className={cn("w-5 h-5 shrink-0", tier.highlight ? "text-brand-orange" : "text-brand-orange")} />
                    <span className={tier.highlight ? "text-white/90" : "text-brand-navy/80"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg",
                tier.highlight 
                  ? "bg-brand-orange text-white hover:bg-white hover:text-brand-navy shadow-brand-orange/20" 
                  : "bg-brand-navy text-white hover:bg-brand-orange shadow-brand-navy/10"
              )}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 bg-brand-gray px-6 py-3 rounded-full">
             <Info className="w-4 h-4 text-brand-orange" />
             Average hunter gets positive ROI within 14 days of activation.
           </p>
        </div>
      </div>
    </section>
  );
}
