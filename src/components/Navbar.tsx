import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'Work', href: isHome ? '#work' : '/#work' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-studio-ink/5 dark:border-white/5">
      <div className="container-custom h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight text-studio-ink dark:text-white">
          Lumina<span className="text-brand-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium hover:text-brand-primary transition-colors duration-200 dark:text-white/80"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium hover:text-brand-primary transition-colors duration-200 dark:text-white/80"
              >
                {link.name}
              </a>
            )
          ))}
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-studio-ink/5 dark:hover:bg-white/5 transition-colors text-studio-ink dark:text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="bg-brand-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-secondary transition-all duration-300 shadow-lg shadow-brand-primary/20">
            Start a Project
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-studio-ink dark:text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-2 text-studio-ink dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-studio-bg dark:bg-dark-bg border-b border-studio-ink/5 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-brand-primary dark:text-white"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-lg font-medium hover:text-brand-primary dark:text-white"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <button className="bg-brand-primary text-white w-full py-4 rounded-xl text-lg font-semibold hover:bg-brand-secondary transition-colors">
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
