import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Search, ShieldCheck, Truck, Shield, Clock } from 'lucide-react';
import { gsap } from 'gsap';

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      gsap.fromTo('.advantage-card',
        {
          y: 60,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }
  }, [isInView]);

  const advantages = [
    {
      icon: GraduationCap,
      title: "Dirigidos por Ing. Mecánico",
      description: "Liderazgo técnico profesional con experiencia certificada",
      color: "from-blue-500 to-indigo-600",
      delay: 0
    },
    {
      icon: Search,
      title: "Diagnóstico Técnico Especializado",
      description: "Análisis profundo con equipos de última generación",
      color: "from-purple-500 to-pink-600",
      delay: 0.1
    },
    {
      icon: ShieldCheck,
      title: "Repuestos Originales",
      description: "Solo utilizamos componentes certificados y garantizados",
      color: "from-green-500 to-teal-600",
      delay: 0.2
    },
    {
      icon: Truck,
      title: "Servicio a Domicilio",
      description: "Llevamos nuestro taller especializado hasta su ubicación",
      color: "from-orange-500 to-red-600",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Garantía de Trabajos",
      description: "Respaldamos cada reparación con garantía total",
      color: "from-cyan-500 to-blue-600",
      delay: 0.4
    },
    {
      icon: Clock,
      title: "Atención 24/7",
      description: "Emergencias atendidas las 24 horas del día",
      color: "from-yellow-500 to-orange-600",
      delay: 0.5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8
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
    <section className="py-8 md:py-14 lg:py-16 bg-deep-black relative overflow-hidden" ref={sectionRef}>
      {/* Simple Background - No Overlay */}
      <div className="absolute inset-0">
        {/* Minimal gradient - very subtle */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
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
            className="inline-flex items-center gap-2 bg-corporate-orange/20 border border-corporate-orange/30 rounded-full px-6 py-2 mb-6"
          >
            <Shield className="w-5 h-5 text-corporate-orange" />
            <span className="text-corporate-orange font-medium">Ventajas Competitivas</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">
            ¿Por qué
            <span className="text-corporate-orange"> elegirnos?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 15 años de experiencia respaldando nuestro compromiso con la excelencia 
            y la innovación en reparación de maquinaria pesada
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="advantage-card group relative"
            >
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full hover:border-corporate-orange/30 transition-all duration-500"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-16 h-16 bg-corporate-orange/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-corporate-orange/25 transition-colors duration-200"
                >
                  <advantage.icon className="w-8 h-8 text-corporate-orange" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-pure-white mb-3 group-hover:text-corporate-orange transition-colors duration-200">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
                    {advantage.description}
                  </p>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-corporate-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-corporate-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-corporate-orange/3 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"></div>
              </motion.div>

              {/* Floating Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: advantage.delay + 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-corporate-orange text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg z-10"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
