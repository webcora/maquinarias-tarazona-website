import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Facebook, 
  Instagram, 
  Youtube,
  MessageCircle,
  Wrench,
  User,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío del formulario
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const services = [
    "Reparación de Sistemas Hidráulicos",
    "Reparación de Motores de CI",
    "Reparación de Sistemas Eléctricos",
    "Reparación de Transmisiones",
    "Diagnóstico Computarizado",
    "Servicio de Emergencia 24/7"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+51 972 244 802",
      action: "tel:+51972244802",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@maquinariastarazona.com",
      action: "mailto:info@maquinariastarazona.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Parque Industrial, Los Olivos, Lima, Perú",
      action: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun-Vie: 7:00am - 6:00pm\nEmergencias 24/7",
      action: "#",
      color: "from-orange-500 to-red-600"
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/maquinariastarazona",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      url: "https://instagram.com/maquinariastarazona",
      color: "hover:text-pink-500"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/maquinariastarazona",
      color: "hover:text-red-500"
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      url: "https://tiktok.com/@maquinariastarazona",
      color: "hover:text-purple-500"
    }
  ];

  return (
    <section id="contacto" className="py-8 md:py-14 lg:py-16 bg-light-gray relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="contactPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-corporate-orange"/>
            <path d="M5,10 L15,10 M10,5 L10,15" stroke="currentColor" strokeWidth="0.5" className="text-corporate-orange"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#contactPattern)"/>
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
            <Phone className="w-5 h-5 text-corporate-orange" />
            <span className="text-corporate-orange font-medium">Contacto Profesional</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            Solicite su
            <span className="text-corporate-orange"> Cotización</span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Estamos listos para atender sus necesidades de reparación y mantenimiento 
            de maquinaria pesada con la más alta calidad profesional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden"
          >
            {/* Form Background Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-orange/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-deep-black mb-6 flex items-center gap-3">
                <Wrench className="w-8 h-8 text-corporate-orange" />
                Formulario de Cotización
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <User className="absolute left-3 top-3 w-5 h-5 text-neutral-gray" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-orange focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-neutral-gray" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-orange focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-neutral-gray" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email corporativo"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-orange focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Building className="absolute left-3 top-3 w-5 h-5 text-neutral-gray" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Empresa"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-orange focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Service Selection */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <Wrench className="absolute left-3 top-3 w-5 h-5 text-neutral-gray" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-orange focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="">Seleccione un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    placeholder="Describa el problema o servicio requerido..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-orange focus:border-transparent transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitted 
                      ? 'bg-success-green' 
                      : 'bg-corporate-orange hover:bg-corporate-orange/90 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      ¡Mensaje Enviado!
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      ENVIAR COTIZACIÓN
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 block text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-deep-black mb-2 group-hover:text-corporate-orange transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-neutral-gray text-sm whitespace-pre-line">
                    {info.content}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Emergency CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="bg-deep-black rounded-2xl p-8 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-corporate-orange rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Emergencias 24/7
              </h3>
              <p className="text-gray-300 mb-6">
                Atención inmediata para reparaciones urgentes
              </p>
              <motion.a
                href="tel:+51972244802"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="holographic-button text-white font-bold py-3 px-6 rounded-lg shadow-lg inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                LLAMAR AHORA
              </motion.a>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-deep-black mb-6 text-center">
                Síguenos en Redes Sociales
              </h3>
              <div className="flex justify-center gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-neutral-gray ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
