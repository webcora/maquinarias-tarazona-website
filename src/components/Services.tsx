import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, Cog, Zap, Settings, Wrench, CircuitBoard } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      gsap.fromTo('.service-card',
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );
    }
  }, [isInView]);

  const services = [
    {
      icon: Droplets,
      title: "REPARACIÓN DE SISTEMAS HIDRÁULICOS",
      image: "/images/hydraulic-systems.jpg",
      services: [
        "Bombas hidráulicas",
        "Cilindros y actuadores", 
        "Válvulas de control",
        "Filtros y mangueras"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cog,
      title: "REPARACIÓN DE MOTORES DE CI",
      image: "/images/engine-repair.jpg",
      services: [
        "Overhaul completo",
        "Rectificación de bloques",
        "Reconstrucción de culatas",
        "Sistemas de inyección"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "REPARACIÓN DE SISTEMAS ELÉCTRICOS",
      image: "/images/electrical-systems.jpg",
      services: [
        "Alternadores y motores de arranque",
        "Sistemas de control electrónico",
        "Cableado y conexiones",
        "Diagnóstico computarizado"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Settings,
      title: "REPARACIÓN DE TRANSMISIONES",
      image: "/images/transmission-repair.jpg",
      services: [
        "Cajas de velocidades",
        "Diferenciales y mandos finales",
        "Embragues y convertidores",
        "Sistemas de dirección"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="servicios" className="py-8 md:py-14 lg:py-16 bg-light-gray relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-orange to-transparent"></div>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor"/>
            <path d="M5,10 L15,10 M10,5 L10,15" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-corporate-orange/10 border border-corporate-orange/20 rounded-full px-6 py-2 mb-6"
          >
            <CircuitBoard className="w-5 h-5 text-corporate-orange" />
            <span className="text-corporate-orange font-medium">Servicios Especializados</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            Nuestras
            <span className="text-corporate-orange"> Especialidades</span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Tecnología de vanguardia y experiencia profesional para mantener su maquinaria 
            en óptimas condiciones operativas
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="service-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image Background */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Animated Circuit Lines */}
                <svg className="absolute bottom-0 right-0 w-24 h-24 text-white/30" viewBox="0 0 100 100">
                  <motion.path
                    d="M20,80 Q50,20 80,80"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.3 }}
                  />
                  <motion.circle
                    cx="20"
                    cy="80"
                    r="3"
                    fill="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 1 }}
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="3"
                    fill="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 1.5 }}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-deep-black mb-4 group-hover:text-corporate-orange transition-colors">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.services.map((item, serviceIndex) => (
                    <motion.li
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + serviceIndex * 0.1 }}
                      className="flex items-center space-x-3 text-neutral-gray"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        className="w-2 h-2 bg-corporate-orange rounded-full flex-shrink-0"
                      />
                      <span className="group-hover:text-deep-black transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-corporate-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-corporate-orange/90 transition-all duration-200 flex items-center justify-center space-x-2 group"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Wrench className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Solicitar Servicio</span>
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-corporate-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-deep-black rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Necesita un diagnóstico especializado?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nuestro equipo de ingenieros especializados está listo para evaluar 
              su maquinaria con tecnología de diagnóstico de última generación
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="holographic-button text-white font-bold py-4 px-8 rounded-lg shadow-2xl hover:shadow-corporate-orange/25 transition-all duration-200 inline-flex items-center space-x-3"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-6 h-6" />
              <span>SOLICITAR DIAGNÓSTICO</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
