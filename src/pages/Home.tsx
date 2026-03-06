import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare, Phone, Mail, Globe, Layout, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const projects = [
  {
    id: 'royal-cuts',
    title: 'Royal Cuts Barbershop',
    description: 'A dark, luxury digital experience for a premium grooming lounge.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    tags: ['Luxury', 'Booking System', 'Dark Mode'],
    color: '#C7A46C'
  },
  {
    id: 'iron-forge',
    title: 'Iron Forge Fitness',
    description: 'High-energy, performance-driven website for a modern fitness community.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    tags: ['Fitness', 'Membership', 'Dynamic'],
    color: '#1A1A1A'
  },
  {
    id: 'bean-street',
    title: 'Bean Street Café',
    description: 'Warm, inviting, and cozy digital home for a local coffee roastery.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
    tags: ['Hospitality', 'Menu', 'Cozy'],
    color: '#8B5E3C'
  }
];

const services = [
  {
    title: 'Business Websites',
    description: 'Clean, modern websites tailored to your local business needs and goals.',
    icon: Globe
  },
  {
    title: 'Website Redesign',
    description: 'Modernize your outdated website with a fresh, professional look and feel.',
    icon: RefreshCw
  },
  {
    title: 'Landing Pages',
    description: 'High-converting pages designed specifically for your marketing promotions.',
    icon: Layout
  }
];

const process = [
  { step: '01', title: 'Discovery', description: 'We dive deep into your business goals, target audience, and unique value proposition.' },
  { step: '02', title: 'Design', description: 'Crafting a bespoke visual identity and layout that resonates with your brand.' },
  { step: '03', title: 'Development', description: 'Building a lightning-fast, responsive website using modern web technologies.' },
  { step: '04', title: 'Launch', description: 'Deploying your site with precision and ensuring everything is optimized for success.' }
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Owner, Royal Cuts',
    content: 'Lumina transformed our online presence. We saw a 40% increase in bookings within the first month of launching our new site.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, Iron Forge',
    content: 'The professionalism and attention to detail were unmatched. Our members love the new class schedule and trainer profiles.',
    image: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Elena Rossi',
    role: 'Manager, Bean Street',
    content: 'They captured the cozy vibe of our cafe perfectly. The digital menu is so easy for our customers to navigate on their phones.',
    image: 'https://i.pravatar.cc/150?u=elena'
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="min-height-[90vh] flex items-center pt-32 pb-20 bg-studio-bg dark:bg-dark-bg relative">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 text-studio-ink dark:text-white">
              Premium Websites for <span className="italic text-studio-gold">Modern</span> Local Businesses
            </h1>
            <p className="text-lg md:text-xl text-studio-ink/70 dark:text-white/70 mb-10 max-w-lg leading-relaxed">
              We design clean, fast, and professional websites that help local businesses 
              get discovered and convert customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#work" className="bg-studio-ink dark:bg-studio-gold dark:text-studio-ink text-white px-8 py-4 rounded-full font-medium flex items-center justify-center hover:bg-studio-gold dark:hover:bg-white transition-all duration-300 group">
                View Our Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#contact" className="border border-studio-ink/20 dark:border-white/20 dark:text-white px-8 py-4 rounded-full font-medium flex items-center justify-center hover:bg-studio-ink hover:text-white transition-all duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Web Design Studio"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Abstract Shapes */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-48 h-48 border-2 border-studio-gold/30 rounded-full -z-10"
            />
            <motion.div 
              animate={{ x: [0, 20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-studio-gold/10 rounded-2xl -z-10 blur-sm"
            />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-studio-gold/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-studio-ink/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="section-padding bg-white dark:bg-dark-surface">
        <div className="container-custom">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-studio-gold font-medium uppercase tracking-widest text-xs mb-4 block">Our Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-serif text-studio-ink dark:text-white">Selected Work</h2>
              </div>
              <p className="text-studio-ink/60 dark:text-white/60 max-w-md">
                A collection of digital experiences we've crafted for businesses that care about their brand.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/project/${project.id}`} className="block">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-studio-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-studio-ink px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-studio-gold px-2 py-1 bg-studio-gold/5 rounded border border-studio-gold/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-studio-gold transition-colors dark:text-white">{project.title}</h3>
                  <p className="text-studio-ink/60 dark:text-white/60 text-sm leading-relaxed">{project.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-studio-bg dark:bg-dark-bg">
        <div className="container-custom">
          <Reveal width="100%">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-studio-gold font-medium uppercase tracking-widest text-xs mb-4 block">Services</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 dark:text-white">What We Offer</h2>
              <p className="text-studio-ink/60 dark:text-white/60">
                We provide comprehensive digital solutions to help your business thrive in the modern landscape.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-dark-surface p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-studio-ink/5 dark:border-white/5"
              >
                <div className="w-14 h-14 bg-studio-gold/10 rounded-2xl flex items-center justify-center mb-8 text-studio-gold">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-4 dark:text-white">{service.title}</h3>
                <p className="text-studio-ink/60 dark:text-white/60 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-studio-ink text-white dark:bg-studio-gold dark:text-studio-ink">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-studio-gold font-medium uppercase tracking-widest text-xs mb-4 block dark:text-studio-ink/60">Our Method</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">How We Work</h2>
            <p className="text-white/60 dark:text-studio-ink/60">
              A streamlined, collaborative process designed to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {process.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-serif font-bold text-white/5 mb-6 dark:text-studio-ink/5">{item.step}</div>
                <h3 className="text-xl font-serif mb-4 text-studio-gold dark:text-studio-ink">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed dark:text-studio-ink/50">{item.description}</p>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-white/10 dark:bg-studio-ink/10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-studio-ink relative overflow-hidden dark:bg-dark-surface">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
              Ready to <span className="text-studio-gold italic">elevate</span> your business online?
            </h2>
            <button className="bg-studio-gold text-studio-ink px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-xl shadow-studio-gold/20">
              Start Your Project
            </button>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-studio-gold rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-studio-gold font-medium uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 dark:text-white">Let's build something great together.</h2>
              <p className="text-studio-ink/60 dark:text-white/60 text-lg mb-12 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-studio-bg dark:bg-dark-surface rounded-full flex items-center justify-center text-studio-ink dark:text-white group-hover:bg-studio-gold transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-studio-ink/40 dark:text-white/40 font-bold mb-1">Email Us</p>
                    <p className="text-lg font-medium dark:text-white">hello@lumina.studio</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-studio-bg dark:bg-dark-surface rounded-full flex items-center justify-center text-studio-ink dark:text-white group-hover:bg-studio-gold transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-studio-ink/40 dark:text-white/40 font-bold mb-1">Call Us</p>
                    <p className="text-lg font-medium dark:text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                <button className="flex items-center space-x-4 bg-emerald-500 text-white px-8 py-4 rounded-2xl hover:bg-emerald-600 transition-colors w-full sm:w-auto justify-center">
                  <MessageSquare size={20} />
                  <span className="font-bold">Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-studio-bg dark:bg-dark-surface p-10 rounded-3xl border border-studio-ink/5 dark:border-white/5"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-studio-ink/60 dark:text-white/60">Name</label>
                    <input type="text" className="w-full bg-white dark:bg-dark-bg dark:text-white border border-studio-ink/10 dark:border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-studio-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-studio-ink/60 dark:text-white/60">Email</label>
                    <input type="email" className="w-full bg-white dark:bg-dark-bg dark:text-white border border-studio-ink/10 dark:border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-studio-gold transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-studio-ink/60 dark:text-white/60">Business Name</label>
                  <input type="text" className="w-full bg-white dark:bg-dark-bg dark:text-white border border-studio-ink/10 dark:border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-studio-gold transition-colors" placeholder="Your Local Business" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-studio-ink/60 dark:text-white/60">Message</label>
                  <textarea rows={4} className="w-full bg-white dark:bg-dark-bg dark:text-white border border-studio-ink/10 dark:border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-studio-gold transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-studio-ink dark:bg-studio-gold dark:text-studio-ink text-white py-5 rounded-xl font-bold hover:bg-studio-gold dark:hover:bg-white transition-all duration-300">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
