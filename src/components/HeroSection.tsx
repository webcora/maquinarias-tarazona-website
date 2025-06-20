import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Shield, Wrench, Zap, Clock } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations for advanced effects
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo('.hero-cta',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    );

    // Parallax effect optimizado con requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const rate = scrolled * -0.3; // Reducir intensidad
          if (heroRef.current) {
            heroRef.current.style.transform = `translateY(${rate}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sistema de partículas React optimizado (reducido de 50 a 15)
  const particles = Array.from({ length: 15 }, (_, i) => i);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={heroRef}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.7), rgba(15, 15, 15, 0.7)), url('/images/hero-excavator.jpeg')`
        }}
      >
        <div className="hero-gradient absolute inset-0"></div>
      </div>

      {/* Sistema de partículas React optimizado */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-corporate-orange/30 rounded-full"
            animate={{
              x: [0, window.innerWidth * 0.8],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1
            }}
            style={{
              left: -10,
              top: Math.random() * window.innerHeight
            }}
          />
        ))}
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute top-32 right-8 glass-morphism p-4 rounded-full animate-float hidden lg:block"
      >
        <div className="text-center">
          <Shield className="w-8 h-8 text-corporate-orange mx-auto mb-2" />
          <p className="text-xs text-white font-medium">Servicio</p>
          <p className="text-xs text-corporate-orange font-bold">24/7</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center mt-24 md:mt-24 lg:mt-28 mobile-safe">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-corporate-orange/20 border border-corporate-orange/30 rounded-full px-4 py-2 mb-6 text-sm sm:text-base sm:px-6 sm:mb-8"
          >
            <Zap className="w-4 h-4 text-corporate-orange" />
            <span className="text-corporate-orange font-medium">Tecnología de Diagnóstico Avanzada</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="hero-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-pure-white mb-6 leading-tight"
          >
            Soluciones <span className="text-corporate-orange neon-glow">Avanzadas</span>
            <br />
            en Reparación de
            <br />
            <span className="bg-gradient-to-r from-corporate-orange to-orange-400 bg-clip-text text-transparent">
              Maquinaria Pesada
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="hero-subtitle text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Especialistas en sistemas hidráulicos, motores, eléctricos y transmisiones 
            con tecnología de diagnóstico de última generación
          </motion.p>



          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="holographic-button text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-2xl hover:shadow-corporate-orange/25 transition-all duration-200 flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg animate-pulse-glow-subtle touch-target w-full sm:w-auto justify-center"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Wrench className="w-6 h-6" />
              <span>SOLICITAR COTIZACIÓN</span>
            </motion.button>

            <motion.a
              href="tel:+51972244802"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-morphism text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg border-2 border-corporate-orange hover:bg-corporate-orange/20 transition-all duration-200 flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg magnetic-hover touch-target w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              <span>LLAMAR AHORA</span>
            </motion.a>
          </motion.div>

          {/* Features Quick */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Clock, title: "Atención 24/7", desc: "Emergencias siempre" },
              { icon: Shield, title: "Garantía Total", desc: "Trabajos certificados" },
              { icon: Zap, title: "Diagnóstico Tech", desc: "Equipos de última generación" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-morphism p-6 rounded-lg text-center floating-card"
              >
                <feature.icon className="w-10 h-10 text-corporate-orange mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-corporate-orange rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-corporate-orange rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
