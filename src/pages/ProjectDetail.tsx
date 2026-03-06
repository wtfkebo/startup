import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Smartphone, Monitor, Layout, Zap, Shield, MessageCircle } from 'lucide-react';

const projectData = {
  'royal-cuts': {
    title: 'Royal Cuts Barbershop',
    subtitle: 'Dark Luxury Grooming Experience',
    description: 'Royal Cuts required a digital presence that matched their high-end physical space. We crafted a dark, sophisticated website that emphasizes their premium services and makes booking effortless.',
    theme: {
      bg: '#0A0A0A',
      text: '#FFFFFF',
      accent: '#C7A46C',
      card: '#151515'
    },
    heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Interactive Service Menu',
      'Seamless WhatsApp Booking Integration',
      'High-Resolution Gallery',
      'Customer Testimonial Slider',
      'Mobile-Optimized Layout'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1621605815841-aa897bd439b4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512690196252-751d3948f4cc?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'iron-forge': {
    title: 'Iron Forge Fitness',
    subtitle: 'Performance-Driven Community Hub',
    description: 'Iron Forge needed a website that radiated energy and strength. We built a high-performance platform featuring trainer profiles, membership management, and a dynamic class schedule.',
    theme: {
      bg: '#1A1C20',
      text: '#FFFFFF',
      accent: '#E63946',
      card: '#25282E'
    },
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Dynamic Class Schedule',
      'Trainer Profile Pages',
      'Membership Plan Comparison',
      'Integrated Contact Forms',
      'Performance Analytics'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'bean-street': {
    title: 'Bean Street Café',
    subtitle: 'Cozy Digital Coffee Roastery',
    description: 'Bean Street wanted their customers to feel the warmth of their cafe before even stepping inside. We designed a soft, earthy website that highlights their artisanal coffee and local community roots.',
    theme: {
      bg: '#FDFCF8',
      text: '#2C1810',
      accent: '#8B5E3C',
      card: '#FFFFFF'
    },
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Visual Menu Display',
      'Interactive Location Map',
      'Event Calendar',
      'Photo Gallery',
      'Newsletter Subscription'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];

  if (!project) return <Navigate to="/" />;

  const isDark = project.theme.bg === '#0A0A0A' || project.theme.bg === '#1A1C20';

  return (
    <div 
      className="min-h-screen pt-20" 
      style={{ backgroundColor: project.theme.bg, color: project.theme.text }}
    >
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light">{project.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-20">
        <Link to="/#work" className="inline-flex items-center text-sm font-medium mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft className="mr-2" size={16} />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif mb-8">Project Overview</h2>
            <p className="text-lg leading-relaxed opacity-80 mb-12">
              {project.description}
            </p>

            <h3 className="text-2xl font-serif mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {project.features.map(feature => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle2 style={{ color: project.theme.accent }} size={20} />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-serif mb-8">Visual Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden shadow-xl"
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-auto" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div 
              className="p-8 rounded-3xl sticky top-32"
              style={{ backgroundColor: project.theme.card, border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}` }}
            >
              <h4 className="text-xl font-serif mb-6">Technical Specs</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Smartphone className="mt-1" size={20} style={{ color: project.theme.accent }} />
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Responsiveness</p>
                    <p className="font-medium">Fully Mobile Optimized</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="mt-1" size={20} style={{ color: project.theme.accent }} />
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Performance</p>
                    <p className="font-medium">95+ Lighthouse Score</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Layout className="mt-1" size={20} style={{ color: project.theme.accent }} />
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Platform</p>
                    <p className="font-medium">Custom React Build</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="mt-1" size={20} style={{ color: project.theme.accent }} />
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Security</p>
                    <p className="font-medium">SSL & Secure Forms</p>
                  </div>
                </div>
              </div>

              <button 
                className="w-full mt-10 py-4 rounded-xl font-bold transition-all"
                style={{ backgroundColor: project.theme.accent, color: isDark ? '#000' : '#FFF' }}
              >
                Launch Live Site
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Preview Section */}
      <section className="py-20 bg-black/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif mb-12">Mobile-First Experience</h2>
          <div className="relative max-w-[300px] mx-auto">
            <div className="border-[8px] border-studio-ink rounded-[3rem] overflow-hidden shadow-2xl aspect-[9/19.5]">
              <img src={project.gallery[0]} alt="Mobile Preview" className="w-full h-full object-cover" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-studio-ink rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-8">Inspired by this project?</h2>
          <Link 
            to="/#contact" 
            className="inline-block px-10 py-4 rounded-full font-bold transition-all"
            style={{ backgroundColor: project.theme.accent, color: isDark ? '#000' : '#FFF' }}
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
