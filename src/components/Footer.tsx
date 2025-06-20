import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle,
  ArrowUp,
  Wrench,
  Shield,
  Zap,
  Code2
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Contacto",
      items: [
        { icon: MapPin, text: "Parque Industrial, Los Olivos, Lima, Perú" },
        { icon: Phone, text: "+51 972 244 802", link: "tel:+51972244802" },
        { icon: Mail, text: "info@maquinariastarazona.com", link: "mailto:info@maquinariastarazona.com" },
        { icon: Clock, text: "Lun-Vie: 7:00am - 6:00pm\nEmergencias 24/7" }
      ]
    },
    {
      title: "Servicios",
      items: [
        { text: "Sistemas Hidráulicos" },
        { text: "Motores de CI" },
        { text: "Sistemas Eléctricos" },
        { text: "Transmisiones" },
        { text: "Diagnóstico Computarizado" },
        { text: "Servicio de Emergencia 24/7" }
      ]
    },
    {
      title: "Empresa",
      items: [
        { text: "Sobre Nosotros" },
        { text: "Nuestro Equipo" },
        { text: "Tecnología" },
        { text: "Certificaciones" },
        { text: "Garantías" },
        { text: "Testimonios" }
      ]
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/maquinariastarazona",
      color: "hover:bg-blue-600",
      hoverEffect: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/maquinariastarazona",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
      hoverEffect: "hover:text-pink-400"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/maquinariastarazona",
      color: "hover:bg-red-600",
      hoverEffect: "hover:text-red-400"
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      url: "https://tiktok.com/@maquinariastarazona",
      color: "hover:bg-black",
      hoverEffect: "hover:text-purple-400"
    }
  ];

  return (
    <footer className="bg-deep-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="footerPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-corporate-orange"/>
            <path d="M5,10 L15,10 M10,5 L10,15" stroke="currentColor" strokeWidth="0.5" className="text-corporate-orange"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerPattern)"/>
        </svg>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-6 right-6 w-12 h-12 bg-corporate-orange rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-20"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center mb-6"
            >
              <img 
                src="/images/logo-oficial-requerido.png" 
                alt="Maquinarias Tarazona - Innovación e Ingeniería"
                className="h-20 md:h-24 lg:h-28 w-auto object-contain"
              />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">
              MAQUINARIAS TARAZONA
            </h3>
            <p className="text-corporate-orange font-semibold text-lg mb-6">
              Innovación e Ingeniería
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Especialistas en reparación de maquinaria pesada con más de 15 años de experiencia. 
              Tecnología de diagnóstico avanzada y atención profesional 24/7.
            </p>
          </motion.div>

          {/* Footer Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.2, duration: 0.8 }}
                className="text-center md:text-left"
              >
                <h4 className="text-xl font-bold text-corporate-orange mb-6 flex items-center justify-center md:justify-start gap-2">
                  {sectionIndex === 0 && <Phone className="w-5 h-5" />}
                  {sectionIndex === 1 && <Wrench className="w-5 h-5" />}
                  {sectionIndex === 2 && <Shield className="w-5 h-5" />}
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: sectionIndex * 0.2 + itemIndex * 0.1 }}
                      className="flex items-start justify-center md:justify-start gap-3 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.icon && <item.icon className="w-5 h-5 text-corporate-orange flex-shrink-0 mt-0.5" />}
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="hover:text-corporate-orange transition-colors whitespace-pre-line"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="whitespace-pre-line">{item.text}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h4 className="text-xl font-bold text-corporate-orange mb-6 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Síguenos en Redes Sociales
            </h4>
            <div className="flex justify-center gap-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className={`w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 ${social.hoverEffect} transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 hover:border-corporate-orange/50`}
                >
                  <social.icon className="w-7 h-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Emergency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-corporate-orange rounded-2xl p-8 text-center relative overflow-hidden"
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-corporate-orange to-orange-600"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                ¿Necesita Servicio de Emergencia?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Atención inmediata 24 horas los 7 días de la semana
              </p>
              <motion.a
                href="tel:+51972244802"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-corporate-orange font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
              >
                <Phone className="w-6 h-6" />
                LLAMAR: +51 972 244 802
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="border-t border-white/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2025 Maquinarias Tarazona. Todos los derechos reservados.</p>
              <p className="text-sm mt-1">
                <motion.a 
                  href="https://webcora.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-400 hover:text-gray-300 transition-all duration-300 text-sm font-medium inline-flex items-center gap-2 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 0, 0] }}
                    whileHover={{ rotate: [0, 360] }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-4 h-4 text-[#1553C9] group-hover:text-blue-400 transition-colors duration-300"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(21, 83, 201, 0.4))' }}
                  >
                    <Code2 className="w-full h-full" />
                  </motion.div>
                  <span className="relative">
                    <span className="text-gray-400">Diseñado por </span>
                    <motion.span 
                      className="text-[#1553C9] font-bold bg-gradient-to-r from-[#1553C9] to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-400 group-hover:to-[#1553C9]"
                      style={{ 
                        textShadow: '0 0 8px rgba(21, 83, 201, 0.6)',
                        filter: 'drop-shadow(0 0 6px rgba(21, 83, 201, 0.3))'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        filter: 'drop-shadow(0 0 12px rgba(21, 83, 201, 0.8))'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      WebCora
                    </motion.span>
                  </span>
                </motion.a>
              </p>
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span className="hover:text-corporate-orange transition-colors cursor-pointer">Política de Privacidad</span>
              <span>•</span>
              <span className="hover:text-corporate-orange transition-colors cursor-pointer">Términos de Servicio</span>
              <span>•</span>
              <span className="hover:text-corporate-orange transition-colors cursor-pointer">Ing. Mecánico Certificado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
