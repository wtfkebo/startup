import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Globe, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '3,999',
    description: 'Perfect for small local businesses starting their digital journey.',
    features: [
      'Custom 5-Page Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Month Support',
      'SSL Certificate'
    ],
    icon: Globe,
    popular: false
  },
  {
    name: 'Professional',
    price: '7,999',
    description: 'The ideal choice for growing businesses that need more impact.',
    features: [
      'Custom 10-Page Website',
      'Advanced SEO Strategy',
      'Content Management System',
      'Google My Business Sync',
      '3 Months Support',
      'Speed Optimization',
      'Custom Animations'
    ],
    icon: Zap,
    popular: true
  },
  {
    name: 'Enterprise',
    price: '11,999',
    description: 'A comprehensive digital powerhouse for established local brands.',
    features: [
      'Unlimited Pages',
      'Full E-commerce Integration',
      'Priority 24/7 Support',
      'Monthly Performance Reports',
      'Advanced Security Hardening',
      'Professional Copywriting',
      'Brand Identity Design'
    ],
    icon: Shield,
    popular: false
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-20 dark:bg-dark-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-studio-gold font-medium uppercase tracking-widest text-xs mb-4 block"
          >
            Pricing & Plans
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-8 dark:text-white"
          >
            Invest in your <span className="italic text-studio-gold">Digital Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-studio-ink/60 dark:text-white/60 leading-relaxed"
          >
            Transparent pricing for premium web design. No hidden fees, just high-quality 
            craftsmanship tailored to your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 ${
                tier.popular 
                  ? 'bg-studio-ink text-white border-studio-ink shadow-2xl scale-105 z-10 dark:bg-studio-gold dark:text-studio-ink dark:border-studio-gold' 
                  : 'bg-white text-studio-ink border-studio-ink/5 hover:shadow-xl dark:bg-dark-surface dark:text-white dark:border-white/5'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-studio-gold text-studio-ink px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 dark:bg-studio-ink dark:text-studio-gold">
                  <Star size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                tier.popular ? 'bg-white/10 text-studio-gold dark:bg-studio-ink/10 dark:text-studio-ink' : 'bg-studio-gold/10 text-studio-gold'
              }`}>
                <tier.icon size={28} />
              </div>

              <h3 className="text-2xl font-serif mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-serif font-bold">${tier.price}</span>
                <span className="text-sm opacity-60">/ project</span>
              </div>
              
              <p className="text-sm opacity-70 mb-8 leading-relaxed">
                {tier.description}
              </p>

              <div className="space-y-4 mb-10">
                {tier.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${tier.popular ? 'bg-studio-gold text-studio-ink dark:bg-studio-ink dark:text-studio-gold' : 'bg-studio-gold/20 text-studio-gold'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                tier.popular 
                  ? 'bg-studio-gold text-studio-ink hover:bg-white dark:bg-studio-ink dark:text-studio-gold dark:hover:bg-white' 
                  : 'bg-studio-ink text-white hover:bg-studio-gold hover:text-studio-ink dark:bg-studio-gold dark:text-studio-ink dark:hover:bg-white'
              }`}>
                Get Started
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-[3rem] bg-studio-gold/5 border border-studio-gold/10 dark:bg-white/5 dark:border-white/5 text-center">
          <h2 className="text-3xl font-serif mb-6 dark:text-white">Need a custom solution?</h2>
          <p className="text-studio-ink/60 dark:text-white/60 mb-8 max-w-xl mx-auto">
            We understand that some projects don't fit into a box. Contact us for a 
            bespoke quote tailored to your unique requirements.
          </p>
          <button className="bg-studio-ink text-white px-10 py-4 rounded-full font-bold hover:bg-studio-gold hover:text-studio-ink transition-all dark:bg-studio-gold dark:text-studio-ink">
            Contact for Custom Quote
          </button>
        </div>
      </div>
    </main>
  );
}
