import { motion } from 'motion/react';
import { Target, Users, Zap, Shield, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: "Alex Hunter",
    role: "Founder & Chief Hunter",
    bio: "Spent 15 years in enterprise sales before realizing the tools we were using were built for filing, not winning.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Elena Vance",
    role: "Head of Detection Tech",
    bio: "Former intelligence analyst specializing in real-time signal processing and intent mapping.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    name: "Marcus Cole",
    role: "Director of Success",
    bio: "Obsessed with conversion velocities and helping hunters turn 'maybe' into 'definitely'.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusTeam"
  }
];

const values = [
  { icon: <Zap className="w-10 h-10" />, title: "Speed is Survival", desc: "In sales, being second is the same as being last." },
  { icon: <Target className="w-10 h-10" />, title: "Precision First", desc: "No noise. No fluff. Only clear, high-intent opportunities." },
  { icon: <Users className="w-10 h-10" />, title: "Hunter Centric", desc: "We build for the people in the arena, not the people in the skybox." },
  { icon: <Shield className="w-10 h-10" />, title: "Ironclad Ethics", desc: "We hunt aggressive, but we play by the rules of law and decency." }
];

export default function About() {
  return (
    <main className="pt-24">
      {/* Bio / Mission Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">Our Mission</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-navy leading-tight">
              We were tired of <span className="text-brand-orange">watching money</span> walk out the door.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Founded in 2023, CT Hunter was born from a simple frustration: CRM tools were great at recording the past, but terrible at predicting the future. We built the tool we needed 10 years ago. A tool that actually hunts.
            </p>
            <div className="flex items-center gap-6 p-8 bg-brand-gray rounded-3xl border border-gray-100">
               <div className="bg-white p-3 rounded-2xl shadow-sm">
                 <Heart className="w-6 h-6 text-brand-orange fill-brand-orange" />
               </div>
               <p className="text-sm font-bold text-brand-navy">
                 Our goal is to help 10,000 sales teams regain control of their pipelines by 2027.
               </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-brand-navy rounded-[4rem] flex items-center justify-center p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-brand-orange/10 blur-[100px]" />
              <Target className="w-48 h-48 text-white opacity-20 absolute top-0 right-0 -translate-y-1/4 translate-x-1/4" />
              <div className="relative z-10 text-center space-y-4">
                 <p className="text-brand-orange font-black text-8xl">10B+</p>
                 <p className="text-white text-xl font-bold uppercase tracking-widest">Signals Processed Annually</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">The Creators</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy uppercase italic tracking-tighter">The Alpha Pack</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-8 rounded-[2rem] bg-brand-gray overflow-hidden border-4 border-white shadow-xl shadow-black/5 group-hover:scale-105 transition-transform duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-2">{member.name}</h4>
                <p className="text-brand-orange font-black uppercase tracking-widest text-xs mb-6">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, i) => (
              <div key={i} className="space-y-6">
                <div className="text-brand-orange bg-brand-orange/10 w-20 h-20 rounded-[2rem] flex items-center justify-center border border-brand-orange/20">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-extrabold text-brand-navy">{v.title}</h4>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final About CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-brand-navy rounded-[3rem] p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0%,transparent_70%)]" />
          <h3 className="text-4xl md:text-5xl font-black text-white relative z-10">Stop Tracking. Start Hunting.</h3>
          <p className="text-white/60 text-xl max-w-xl mx-auto relative z-10">Ready to see why the highest-performing sales teams on the planet use CT Hunter?</p>
          <div className="relative z-10 pt-4">
            <Link to="/contact" className="bg-brand-orange text-white px-10 py-4 rounded-2xl text-lg font-black inline-flex items-center gap-2 hover:bg-white hover:text-brand-navy transition-all hover:scale-105">
              Let's Talk Strategy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
