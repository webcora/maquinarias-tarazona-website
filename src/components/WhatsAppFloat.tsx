import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 2 seconds (reduced for testing)
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after appearing
      setTimeout(() => setShowTooltip(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide tooltip after 10 seconds (extended for testing)
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "51972244802";
    const message = "Hola, necesito información sobre servicios de reparación de maquinaria pesada.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = "tel:+51972244802";
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Repositioned Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            className="hidden md:block fixed left-[10px] top-[25%] md:left-[15px] md:top-[40%] lg:left-[20px] lg:top-[50%] bg-white rounded-lg shadow-xl p-4 max-w-xs border border-gray-200 z-40"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <h4 className="font-bold text-deep-black mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-500" />
                ¡Hablemos por WhatsApp!
              </h4>
              <p className="text-neutral-gray text-sm mb-3">
                Obtenga respuesta inmediata sobre nuestros servicios de reparación
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  Escribir
                </button>
                <button
                  onClick={handleCallClick}
                  className="bg-corporate-orange text-white text-xs px-3 py-1.5 rounded-lg hover:bg-corporate-orange/90 transition-colors font-medium"
                >
                  Llamar
                </button>
              </div>
            </div>
            {/* Arrow pointing right */}
            <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-200 -translate-y-1/2"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button Group */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex flex-col gap-3"
      >
        {/* Call Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCallClick}
          className="w-14 h-14 bg-corporate-orange rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.3, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-corporate-orange rounded-full"
          />
          <Phone className="w-7 h-7 text-white relative z-10" />
          
          {/* Hover Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-deep-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Llamar ahora
          </div>
        </motion.button>

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        >
          {/* Pulsing Animation */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 0.2, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
          
          {/* WhatsApp Icon */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="relative z-10"
          >
            <MessageCircle className="w-8 h-8 text-white fill-current" />
          </motion.div>

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
              className="text-white text-xs font-bold"
            >
              1
            </motion.span>
          </motion.div>

          {/* Hover Tooltip */}
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-deep-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Escribir por WhatsApp
          </div>
        </motion.button>
      </motion.div>

      {/* Emergency Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -top-16 -left-8 bg-deep-black text-white text-xs px-3 py-1 rounded-full font-medium border border-corporate-orange/30"
      >
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-corporate-orange"
        >
          ●
        </motion.span>
        {" "}24/7 Emergencias
      </motion.div>
      </div>
    </>
  );
};

export default WhatsAppFloat;
