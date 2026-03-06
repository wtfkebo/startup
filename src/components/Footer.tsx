import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-studio-ink text-white/90 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-serif font-bold text-white mb-6 block">
              Lumina<span className="text-studio-gold">.</span>
            </Link>
            <p className="max-w-sm text-white/60 leading-relaxed mb-8">
              Handcrafting premium digital experiences for local businesses that value quality, 
              performance, and professional design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-studio-gold hover:text-studio-ink transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-studio-gold hover:text-studio-ink transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-studio-gold hover:text-studio-ink transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-studio-gold transition-colors">Home</Link></li>
              <li><a href="#work" className="hover:text-studio-gold transition-colors">Work</a></li>
              <li><Link to="/services" className="hover:text-studio-gold transition-colors">Services</Link></li>
              <li><a href="#contact" className="hover:text-studio-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-studio-gold" />
                <span>hello@lumina.studio</span>
              </li>
              <li>+1 (555) 123-4567</li>
              <li>123 Design Street<br />Creative City, ST 12345</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Lumina Web Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
