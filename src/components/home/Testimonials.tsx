import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "VP of Sales",
    company: "DataStream AI",
    content: "We saw a 340% increase in qualified lead response time within the first week. CT Hunter doesn't just find leads—it finds the EXACT moment they are ready to talk.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "NextGen Logistics",
    content: "The Priority Scoring alone saved our team 20 hours a week of manual prospecting. We closed three $100k+ deals this month that we would have missed otherwise.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "David Miller",
    role: "Marketing Director",
    company: "CloudBound",
    content: "Best ROI of any sales tool in our stack. The Slack integration is lethal—our hunters are on leads in under 30 seconds. It feels like cheating.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">Hunter Success</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy">Reports from the Field</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-50 opacity-10 group-hover:text-brand-orange group-hover:opacity-10 transition-colors" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed italic">"{t.content}"</p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl bg-brand-gray border-2 border-white shadow-md shadow-black/5" />
                <div>
                  <h4 className="font-bold text-brand-navy">{t.name}</h4>
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-wider">{t.role} • {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
