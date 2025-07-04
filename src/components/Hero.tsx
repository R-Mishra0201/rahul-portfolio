
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const skills = [
    'Next.js Developer',
    'React Specialist', 
    'Framer Motion',
    'AI APIs Integration',
    'MySQL & Prisma',
    'Full-Stack Solutions'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark animated background with neon accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-slate-900/80 to-black/80" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AI Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-full h-full glass rounded-full p-2 modern-glow">
                <img
                  src=""
                  alt="Rahul Mishra - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass p-3 rounded-xl neon-glow"
              >
                <span className="text-neon-purple text-sm font-semibold">AI</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass p-3 rounded-xl neon-glow"
              >
                <span className="text-neon-cyan text-sm font-semibold">FS</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Rahul Mishra</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-8"
            >
              Crafting scalable full-stack solutions with AI
            </motion.p>

            {/* Typewriter Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg mb-12 h-8"
            >
              <Typewriter
                options={{
                  strings: skills,
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  wrapperClassName: "text-neon-cyan",
                  cursorClassName: "text-neon-cyan"
                }}
              />
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative glass glass-hover px-8 py-4 rounded-full modern-glow magnetic text-lg font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Work Together
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
