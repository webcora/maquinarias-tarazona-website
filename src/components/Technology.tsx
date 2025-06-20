import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Monitor, Zap, Wrench, CircuitBoard, Scan } from 'lucide-react';
import { gsap } from 'gsap';

const Technology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      gsap.fromTo('.tech-card',
        {
          y: 80,
          opacity: 0,
          rotateY: -15
        },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );

      // Animated circuit lines
      gsap.fromTo('.circuit-line',
        { strokeDasharray: "0 100" },
        { 
          strokeDasharray: "100 0",
          duration: 2,
          stagger: 0.3,
          ease: 'power2.inOut'
        }
      );
    }
  }, [isInView]);

  const technologies = [
    {
      icon: Cpu,
      title: "Sistemas de Diagnóstico Computarizados",
      description: "Equipos de diagnóstico avanzado que permiten identificar fallas con precisión milimétrica",
      features: ["Análisis en tiempo real", "Lectura de códigos de error", "Monitoreo de parámetros"],
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: Scan,
      title: "Escáneres Especializados",
      description: "Tecnología de escaneo 3D y análisis por ultrasonido para inspección de componentes",
      features: ["Escáner 3D industrial", "Ultrasonido digital", "Análisis predictivo"],
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Software de Análisis Técnico",
      description: "Plataformas especializadas para interpretación de datos y generación de reportes",
      features: ["Análisis de vibraciones", "Termografía infrarroja", "Reportes automáticos"],
      color: "from-green-600 to-teal-500"
    },
    {
      icon: Wrench,
      title: "Herramientas de Precisión",
      description: "Instrumentos calibrados y certificados para mediciones exactas y reparaciones precisas",
      features: ["Torquímetros digitales", "Medidores de presión", "Calibradores láser"],
      color: "from-orange-600 to-red-500"
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
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-8 md:py-14 lg:py-16 bg-light-gray relative overflow-hidden" ref={sectionRef}>
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {/* Circuit Board Pattern */}
          <defs>
            <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-corporate-orange"/>
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-corporate-orange"/>
              <circle cx="80" cy="20" r="1" fill="currentColor" className="text-corporate-orange"/>
              <circle cx="20" cy="80" r="1" fill="currentColor" className="text-corporate-orange"/>
              <circle cx="80" cy="80" r="1" fill="currentColor" className="text-corporate-orange"/>
              
              <path d="M20,20 L50,50 L80,20" stroke="currentColor" strokeWidth="1" fill="none" className="text-corporate-orange"/>
              <path d="M20,80 L50,50 L80,80" stroke="currentColor" strokeWidth="1" fill="none" className="text-corporate-orange"/>
              <path d="M50,20 L50,50 L50,80" stroke="currentColor" strokeWidth="1" fill="none" className="text-corporate-orange"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitPattern)"/>
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
            <span className="text-corporate-orange font-medium">Tecnología Avanzada</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            Tecnología de
            <span className="text-corporate-orange"> Diagnóstico</span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Equipos de última generación que nos permiten ofrecer diagnósticos precisos 
            y soluciones efectivas para su maquinaria industrial
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="tech-card group relative"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
              >
                {/* Gradient Background */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color}`}></div>
                
                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <tech.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-deep-black mb-4 group-hover:text-corporate-orange transition-colors">
                    {tech.title}
                  </h3>
                  
                  <p className="text-neutral-gray mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {tech.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 90 }}
                          className="w-2 h-2 bg-corporate-orange rounded-full flex-shrink-0"
                        />
                        <span className="text-neutral-gray text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Animated Corner Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 32 32" className="w-full h-full text-corporate-orange">
                    <motion.path
                      d="M4,4 L28,4 L28,28"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ delay: index * 0.3, duration: 1 }}
                    />
                    <motion.circle
                      cx="28"
                      cy="28"
                      r="2"
                      fill="currentColor"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.3 + 0.8 }}
                    />
                  </svg>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-corporate-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Tech Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative bg-deep-black rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Background Circuit Animation */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200">
            <motion.path
              className="circuit-line"
              d="M50,100 Q100,50 150,100 T250,100 Q300,150 350,100"
              stroke="#FF5316"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 1, duration: 3 }}
            />
            <motion.circle
              cx="50"
              cy="100"
              r="4"
              fill="#FF5316"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
            />
            <motion.circle
              cx="350"
              cy="100"
              r="4"
              fill="#FF5316"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 3.5 }}
            />
          </svg>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-corporate-orange rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Diagnóstico de Precisión
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Nuestros sistemas de diagnóstico avanzado detectan problemas antes de que se conviertan 
              en fallas costosas, garantizando el máximo tiempo de operación de su maquinaria
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="holographic-button text-white font-bold py-4 px-8 rounded-lg shadow-2xl hover:shadow-corporate-orange/25 transition-all duration-200 inline-flex items-center space-x-3"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CircuitBoard className="w-6 h-6" />
              <span>SOLICITAR DIAGNÓSTICO AVANZADO</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
