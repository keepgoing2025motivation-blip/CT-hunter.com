import { Target, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-orange p-1.5 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter">CT HUNTER</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            The world's first opportunity-first CRM expansion. We don't just track leads; we hunt them down and bring them to your doorstep ready to close.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/#how-it-works" className="hover:text-brand-orange transition-colors">How It Works</Link></li>
            <li><Link to="/#pricing" className="hover:text-brand-orange transition-colors">Pricing Tiers</Link></li>
            <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Our Mission</Link></li>
            <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">The Tech</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-brand-orange transition-colors cursor-pointer text-brand-orange">Lead Detection Engine</li>
            <li className="hover:text-brand-orange transition-colors cursor-pointer">Real-Time Alerts</li>
            <li className="hover:text-brand-orange transition-colors cursor-pointer">Smart Automation</li>
            <li className="hover:text-brand-orange transition-colors cursor-pointer">CRM Integration</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Get In Touch</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-orange" />
              <span>sales@cthunter.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-orange" />
              <span>+1 (800) HUNT-LEADS</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
              <span>123 Opportunity Ave,<br />Silicon Valley, CA 94043</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2026 CT Hunter. All rights reserved. No leads were harmed in the making of this software.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
