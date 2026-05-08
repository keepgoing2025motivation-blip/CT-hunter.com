import { Shield, Zap, RefreshCw, BarChart3, Database, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Lead Detection Engine",
    desc: "Proprietary algorithms that scan web visits, social intent, and firmographic shifts in milliseconds."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-Time Alerts",
    desc: "Get notified via Slack, SMS, or Email the second a high-value prospect interacts with your brand."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Follow-Up Automation",
    desc: "Multi-channel sequences that feel personal, persistent, and perfectly timed to maximize response."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics Dashboard",
    desc: "Full visibility into your pipeline health, conversion velocities, and hunter performance metrics."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "CRM Integration",
    desc: "Seamlessly syncs with Salesforce, HubSpot, and Pipedrive. Your source of truth just got smarter."
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Priority Scoring",
    desc: "Don't just collect leads—rank them. Know exactly who to call first based on intent and potential value."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-orange/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">Lethal Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy">Built for the Closing Elite</h3>
          <p className="text-gray-500 text-lg">Every feature is designed with one goal: increasing your win rate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-brand-gray w-16 h-16 rounded-2xl flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-navy mb-4">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
