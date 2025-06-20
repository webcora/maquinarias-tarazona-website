import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
  type: 'route' | 'section';
  section?: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  // Función de debouncing optimizada
  const debounce = useCallback((func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const handleNavigation = useCallback((item: NavItem) => {
    setIsMenuOpen(false);
    
    // Manejo de secciones (Servicios, Contacto)
    if (item.type === 'section') {
      if (location.pathname !== '/') {
        navigate('/');
        // Usar requestAnimationFrame en lugar de setTimeout
        const waitForNavigation = () => {
          const element = document.getElementById(item.section!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        };
        requestAnimationFrame(waitForNavigation);
      } else {
        const element = document.getElementById(item.section!);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
  }, [location.pathname, navigate]);



  const handleLogoClick = useCallback(() => {
    navigate('/');
    requestAnimationFrame(scrollToTop);
  }, [navigate]);

  const handleInicioClick = useCallback(() => {
    if (location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/');
      requestAnimationFrame(scrollToTop);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    // Scroll handler optimizado con debouncing
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      
      // Usar constante en lugar de hardcoded 768
      const TABLET_BREAKPOINT = 768;
      const SCROLL_THRESHOLD = 100;
      
      if (window.innerWidth > TABLET_BREAKPOINT) {
        if (currentScrollY > SCROLL_THRESHOLD) {
          setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
        } else {
          setScrollDirection('up');
        }
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    }, 16); // 60fps

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, debounce]);

  const navItems: NavItem[] = [
    { name: 'Inicio', href: '/', type: 'route' },
    { name: 'Nosotros', href: '/nosotros', type: 'route' },
    { name: 'Proyectos', href: '/proyectos', type: 'route' },
    { name: 'Servicios', href: '/', section: 'servicios', type: 'section' },
    { name: 'Contacto', href: '/', section: 'contacto', type: 'section' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-deep-black border-b border-gray-800 transition-transform duration-300 ease-in-out ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img 
              src="/images/logo-oficial-requerido.png" 
              alt="Maquinarias Tarazona - Innovación e Ingeniería"
              className="h-16 md:h-18 lg:h-16 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = item.type === 'route' ? location.pathname === item.href : false;
              
              // Secciones - usar botón con handleNavigation
              if (item.type === 'section') {
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`font-medium hover:text-corporate-orange transition-colors duration-200 relative group ${
                      isActive ? 'text-corporate-orange' : 'text-pure-white'
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corporate-orange transition-all duration-200 group-hover:w-full"></span>
                  </motion.button>
                );
              }
              
              // Caso especial: Inicio - botón con scroll to top
              if (item.name === 'Inicio') {
                return (
                  <motion.button
                    key={item.name}
                    onClick={handleInicioClick}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`font-medium hover:text-corporate-orange transition-colors duration-200 relative group ${
                      isActive ? 'text-corporate-orange' : 'text-pure-white'
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corporate-orange transition-all duration-200 group-hover:w-full"></span>
                  </motion.button>
                );
              }
              
              // Páginas normales - usar Link directo
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium hover:text-corporate-orange transition-colors duration-200 relative group ${
                      isActive ? 'text-corporate-orange' : 'text-pure-white'
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corporate-orange transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              );
            })}
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
              onClick={() => handleNavigation({ name: 'Contacto', href: '/', type: 'section', section: 'contacto' })}
            >
              <Wrench className="w-5 h-5" />
              <span>SOLICITAR COTIZACIÓN</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-pure-white p-3 min-w-12 min-h-12 flex items-center justify-center"
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="true"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
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
              <nav 
                id="mobile-navigation"
                className="flex flex-col space-y-4"
                aria-label="Navegación principal móvil"
                role="navigation"
              >
                {navItems.map((item, index) => {
                  const isActive = item.type === 'route' ? location.pathname === item.href : false;
                  
                  // Secciones - usar botón con handleNavigation
                  if (item.type === 'section') {
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavigation(item)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`font-medium hover:text-corporate-orange transition-colors duration-200 py-2 border-b border-neutral-gray/20 text-left ${
                          isActive ? 'text-corporate-orange' : 'text-pure-white'
                        }`}
                        role="menuitem"
                        tabIndex={0}
                        aria-describedby={`nav-desc-${index}`}
                      >
                        {item.name}
                        <span id={`nav-desc-${index}`} className="sr-only">
                          Ir a la sección {item.name}
                        </span>
                      </motion.button>
                    );
                  }
                  
                  // Caso especial: Inicio - botón con scroll to top
                  if (item.name === 'Inicio') {
                    return (
                      <motion.button
                        key={item.name}
                        onClick={handleInicioClick}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`font-medium hover:text-corporate-orange transition-colors duration-200 py-2 border-b border-neutral-gray/20 text-left w-full ${
                          isActive ? 'text-corporate-orange' : 'text-pure-white'
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    );
                  }
                  
                  // Páginas normales - usar Link directo
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`font-medium hover:text-corporate-orange transition-colors duration-200 py-2 border-b border-neutral-gray/20 text-left w-full block ${
                          isActive ? 'text-corporate-orange' : 'text-pure-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
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
                  onClick={() => handleNavigation({ name: 'Contacto', href: '/', type: 'section', section: 'contacto' })}
                >
                  <Wrench className="w-5 h-5" />
                  <span>SOLICITAR COTIZACIÓN</span>
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
