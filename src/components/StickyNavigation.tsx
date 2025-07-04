
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, Code, Mail } from 'lucide-react';

export default function StickyNavigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="glass p-4 rounded-2xl space-y-4">
        {/* User Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-center pb-4 border-b border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
            alt="John Doe"
            className="w-12 h-12 rounded-full mx-auto mb-2 ring-2 ring-neon-cyan/30"
          />
          <p className="text-xs text-muted-foreground">John Doe</p>
          <p className="text-xs text-neon-cyan">San Francisco</p>
        </motion.div>

        {/* Navigation */}
        <div className="space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-neon-cyan/20 text-neon-cyan'
                  : 'text-muted-foreground hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 glass rounded-lg text-sm whitespace-nowrap pointer-events-none"
              >
                {item.label}
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-white/10 space-y-2">
          {['GH', 'LN', 'TW'].map((social, index) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="block p-2 text-center text-sm glass glass-hover rounded-lg magnetic neon-glow"
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
