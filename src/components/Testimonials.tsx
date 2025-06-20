import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Building, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Constructora ABC",
      position: "Gerente de Mantenimiento",
      company: "Empresa Constructora",
      testimonial: "El Ing. Tarazona realizó un diagnóstico excepcional, solucionó el problema que otros no pudieron. Su profesionalismo y conocimiento técnico son incomparables.",
      rating: 5,
      type: "corporate",
      avatar: "/images/engineer-professional.jpg"
    },
    {
      id: 2,
      name: "Minera XYZ",
      position: "Supervisor de Equipos",
      company: "Industria Minera",
      testimonial: "Profesionalismo técnico de primer nivel, recomendamos sus servicios sin dudarlo. La calidad del trabajo y la garantía nos dan total confianza.",
      rating: 5,
      type: "corporate",
      avatar: "/images/industrial-workshop.jpg"
    },
    {
      id: 3,
      name: "Empresa Industrial DEF",
      position: "Jefe de Flota",
      company: "Sector Industrial",
      testimonial: "Confiamos en la experiencia del Ing. Tarazona para nuestra flota. Su tecnología de diagnóstico y rapidez en las reparaciones son excepcionales.",
      rating: 5,
      type: "corporate",
      avatar: "/images/heavy-machinery-panoramic.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-8 md:py-14 lg:py-16 bg-deep-black relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-orange/5 via-transparent to-corporate-orange/5"></div>
        
        {/* Floating Quote Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-corporate-orange/20"
        >
          <Quote className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 text-corporate-orange/20"
        >
          <Quote className="w-32 h-32" />
        </motion.div>
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
            <Quote className="w-5 h-5 text-corporate-orange" />
            <span className="text-corporate-orange font-medium">Testimonios Corporativos</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">
            Lo que dicen nuestros
            <span className="text-corporate-orange"> clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La confianza de empresas líderes respalda nuestro compromiso con la excelencia 
            y la calidad en cada proyecto
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Main Testimonial Card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-corporate-orange rounded-full flex items-center justify-center mb-8 mx-auto"
                >
                  <Quote className="w-8 h-8 text-white" />
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl text-pure-white text-center leading-relaxed mb-8 font-medium"
                >
                  "{testimonials[currentTestimonial].testimonial}"
                </motion.blockquote>

                {/* Stars Rating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center mb-6"
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-corporate-orange fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-corporate-orange/20 rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-corporate-orange" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-corporate-orange">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-300">
                        {testimonials[currentTestimonial].position}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/10 hover:bg-corporate-orange/20 border border-white/20 hover:border-corporate-orange/30 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-corporate-orange' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/10 hover:bg-corporate-orange/20 border border-white/20 hover:border-corporate-orange/30 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Building, title: "Empresas Constructoras", desc: "Confianza corporativa" },
            { icon: User, title: "Contratistas Independientes", desc: "Servicio personalizado" },
            { icon: Star, title: "98% Satisfacción", desc: "Calidad garantizada" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <badge.icon className="w-10 h-10 text-corporate-orange mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">{badge.title}</h4>
              <p className="text-gray-400 text-sm">{badge.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
