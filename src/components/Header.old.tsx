import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Wrench } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Update scrolled state
          setIsScrolled(currentScrollY > 50);
          
          // Aggressive DOM manipulation with multiple properties
          if (headerRef.current) {
            if (currentScrollY > 100) {
              if (currentScrollY > lastScrollY) {
                // Scrolling down - hide header
                setHeaderTop(-100);
                headerRef.current.style.setProperty('transform', 'translateY(-100px)', 'important');
                headerRef.current.style.setProperty('opacity', '0', 'important');
                headerRef.current.style.setProperty('top', '-100px', 'important');

              } else {
                // Scrolling up - show header
                setHeaderTop(0);
                headerRef.current.style.setProperty('transform', 'translateY(0px)', 'important');
                headerRef.current.style.setProperty('opacity', '1', 'important');
                headerRef.current.style.setProperty('top', '0px', 'important');

              }
            } else {
              // Near top - always show
              setHeaderTop(0);
              headerRef.current.style.setProperty('transform', 'translateY(0px)', 'important');
              headerRef.current.style.setProperty('opacity', '1', 'important');
              headerRef.current.style.setProperty('top', '0px', 'important');
            }
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-deep-black border-b border-gray-800"
      style={{
        transition: 'transform 0.3s ease-in-out',
        willChange: 'transform'
      }}
    >

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="/images/logo-white.jpg" 
              alt="Maquinarias Tarazona - Innovación e Ingeniería"
              className="h-12 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-pure-white font-medium hover:text-corporate-orange transition-colors duration-200 relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corporate-orange transition-all duration-200 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.a
              href="tel:+51972244802"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-corporate-orange font-semibold hover:text-pure-white transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>+51 972 244 802</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="holographic-button text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Wrench className="w-5 h-5" />
              <span>SOLICITAR COTIZACIÓN</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-pure-white p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-deep-black/95 backdrop-blur-lg border-t border-corporate-orange/20"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-pure-white font-medium hover:text-corporate-orange transition-colors duration-200 py-2 border-b border-neutral-gray/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href="tel:+51972244802"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center space-x-2 text-corporate-orange font-semibold py-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>+51 972 244 802</span>
                </motion.a>

                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="holographic-button text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2 w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Wrench className="w-5 h-5" />
                  <span>SOLICITAR COTIZACIÓN</span>
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
