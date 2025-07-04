import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import StickyNavigation from '../components/StickyNavigation';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // GSAP ScrollTrigger animations
    gsap.fromTo(
      '.fade-in-up',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in-up',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effect for sections
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-x-hidden">
      {/* Sticky Navigation */}
      <StickyNavigation />
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="fade-in-up">
          <About />
        </section>
        
        <section id="projects" className="fade-in-up">
          <Projects />
        </section>
        
        <section id="contact" className="fade-in-up">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-white/10">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 John Doe. Crafted with passion and cutting-edge tech.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
