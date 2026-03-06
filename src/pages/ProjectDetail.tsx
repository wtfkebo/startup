import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Phone, MapPin, Clock, Instagram, Facebook, Users, Award, Calendar } from 'lucide-react';

const projectDemos = {
  'royal-cuts': {
    id: 'royal-cuts',
    name: 'Royal Cuts Barbershop',
    tagline: 'The Modern Gentleman\'s Sanctuary',
    theme: {
      primary: '#C7A46C',
      bg: '#0A0A0A',
      surface: '#151515',
      text: '#FFFFFF'
    },
    hero: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1600',
    content: (
      <div className="space-y-32 py-20">
        <section className="container-custom grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-5xl font-serif mb-8 text-white">Crafting Confidence Since 2012</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              At Royal Cuts, we believe grooming is an art form. Our master barbers combine 
              traditional techniques with modern style to give you a look that's uniquely yours.
            </p>
            <button className="bg-[#C7A46C] text-black px-10 py-4 rounded-full font-bold hover:bg-white transition-all">
              Book Your Chair
            </button>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600" className="rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1621605815841-aa897bd439b4?auto=format&fit=crop&q=80&w=600" className="rounded-2xl mt-8" />
          </div>
        </section>

        <section className="bg-[#151515] py-24">
          <div className="container-custom">
            <h2 className="text-4xl font-serif text-center mb-16 text-white">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Classic Cut', price: '$45', desc: 'Precision haircut tailored to your head shape and style.' },
                { name: 'Beard Sculpting', price: '$35', desc: 'Expert shaping and lining with straight razor finish.' },
                { name: 'The Royal Treatment', price: '$95', desc: 'Haircut, beard trim, hot towel shave, and scalp massage.' },
                { name: 'Hot Towel Shave', price: '$40', desc: 'Traditional straight razor shave with premium oils.' }
              ].map(s => (
                <div key={s.name} className="flex justify-between items-start border-b border-white/10 pb-6">
                  <div>
                    <h4 className="text-xl font-bold text-[#C7A46C] mb-1">{s.name}</h4>
                    <p className="text-white/50 text-sm">{s.desc}</p>
                  </div>
                  <span className="text-2xl font-serif text-white">{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  },
  'iron-forge': {
    id: 'iron-forge',
    name: 'Iron Forge Fitness',
    tagline: 'Forging Strength, Building Community',
    theme: {
      primary: '#E63946',
      bg: '#121212',
      surface: '#1E1E1E',
      text: '#FFFFFF'
    },
    hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600',
    content: (
      <div className="space-y-32 py-20">
        <section className="container-custom text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-6xl font-serif mb-8 text-white">No Excuses. Just Results.</motion.h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
            Join the most elite fitness community in the city. Our state-of-the-art facility 
            and world-class trainers are here to help you crush your goals.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-[#E63946] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">Start Free Trial</button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">View Schedule</button>
          </div>
        </section>

        <section className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: 'Expert Coaching', desc: 'Personalized training plans from certified professionals.' },
            { icon: Award, title: 'Elite Equipment', desc: 'Top-of-the-line machines and free weights for all levels.' },
            { icon: Calendar, title: 'Dynamic Classes', desc: 'From HIIT to Yoga, we have a class for every goal.' }
          ].map(f => (
            <div key={f.title} className="bg-[#1E1E1E] p-10 rounded-3xl border border-white/5 text-center">
              <f.icon size={40} className="text-[#E63946] mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4 text-white">{f.title}</h3>
              <p className="text-white/50">{f.desc}</p>
            </div>
          ))}
        </section>

        <section className="bg-[#E63946] py-20 text-white overflow-hidden relative">
          <div className="container-custom flex flex-col md:flex-row items-center justify-between relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 md:mb-0">Ready to transform?</h2>
            <button className="bg-white text-[#E63946] px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all">Join Now</button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </section>
      </div>
    )
  },
  'bean-street': {
    id: 'bean-street',
    name: 'Bean Street Café',
    tagline: 'Artisanal Coffee & Local Soul',
    theme: {
      primary: '#8B5E3C',
      bg: '#FDFCF8',
      surface: '#FFFFFF',
      text: '#2C1810'
    },
    hero: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1600',
    content: (
      <div className="space-y-32 py-20">
        <section className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl" />
            <div className="absolute -bottom-10 -right-10 bg-[#8B5E3C] text-white p-10 rounded-[2rem] shadow-xl">
              <p className="text-3xl font-serif italic">"Best brew in town"</p>
              <p className="text-sm uppercase tracking-widest mt-2 opacity-70">- Local Foodie</p>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-5xl font-serif mb-8 text-[#2C1810]">Roasted with Love, Served with a Smile.</h2>
            <p className="text-[#2C1810]/70 text-lg leading-relaxed mb-10">
              We source our beans directly from sustainable farms across the globe. 
              Each batch is roasted in-house to bring out the unique flavor profile of every origin.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#8B5E3C] text-white px-10 py-4 rounded-full font-bold hover:shadow-lg transition-all">Order Online</button>
              <button className="border border-[#8B5E3C]/20 text-[#8B5E3C] px-10 py-4 rounded-full font-bold hover:bg-[#8B5E3C]/5 transition-all">Our Menu</button>
            </div>
          </motion.div>
        </section>

        <section className="bg-[#F5F1E9] py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-[#2C1810]">Today's Specials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Honey Lavender Latte', price: '$6.50', img: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=400' },
                { name: 'Avocado Sourdough', price: '$12.00', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400' },
                { name: 'Cold Brew Float', price: '$7.50', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400' }
              ].map(item => (
                <div key={item.name} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img src={item.img} className="w-full h-48 object-cover" />
                  <div className="p-6 flex justify-between items-center">
                    <h4 className="font-bold text-[#2C1810]">{item.name}</h4>
                    <span className="text-[#8B5E3C] font-serif font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const demo = projectDemos[id as keyof typeof projectDemos];

  if (!demo) return <Navigate to="/" />;

  return (
    <div 
      className="min-h-screen transition-colors duration-500" 
      style={{ backgroundColor: demo.theme.bg, color: demo.theme.text }}
    >
      {/* Demo Header */}
      <header className="fixed top-0 left-0 w-full z-[60] bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="container-custom h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center text-sm font-bold hover:opacity-70 transition-opacity text-white">
            <ArrowLeft className="mr-2" size={16} />
            Exit Preview
          </Link>
          <span className="text-xs uppercase tracking-widest font-bold opacity-50 text-white">Live Demo: {demo.name}</span>
          <div className="flex gap-4">
            <button className="text-xs font-bold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">Desktop</button>
            <button className="text-xs font-bold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">Mobile</button>
          </div>
        </div>
      </header>

      {/* Demo Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={demo.hero} 
          alt={demo.name} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">{demo.name}</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light italic">{demo.tagline}</p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <div className="w-px h-20 bg-white/30 mx-auto animate-bounce"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demo Content */}
      {demo.content}

      {/* Demo Footer */}
      <footer className="py-20 border-t border-white/10" style={{ backgroundColor: demo.theme.surface }}>
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif mb-6">{demo.name}</h3>
            <p className="opacity-60 text-sm leading-relaxed">
              Providing premium services to our local community with passion and excellence.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-40">Contact</h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-3"><Phone size={16} /> (555) 123-4567</p>
              <p className="flex items-center justify-center md:justify-start gap-3"><MapPin size={16} /> 123 Business Way, City</p>
              <p className="flex items-center justify-center md:justify-start gap-3"><Clock size={16} /> Mon - Sat: 9am - 8pm</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-40">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <Instagram size={20} className="hover:text-studio-gold cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-studio-gold cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="container-custom pt-10 mt-10 border-t border-white/5 text-center text-[10px] uppercase tracking-widest opacity-30">
          © {new Date().getFullYear()} {demo.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
