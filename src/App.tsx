import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Components (cargar inmediatamente)
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Pages (cargar bajo demanda - lazy loading)
const Home = lazy(() => import('./pages/Home'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Proyectos = lazy(() => import('./pages/Proyectos'));

function App() {
  return (
    <HelmetProvider>
      <Router>
      <div className="App overflow-x-hidden min-h-screen">
        {/* Skip Links para accesibilidad */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <a href="#navigation" className="skip-link">
          Saltar a la navegación
        </a>
        {/* Global Loading Overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed inset-0 bg-deep-black z-50 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-16 h-16 border-4 border-corporate-orange border-t-transparent rounded-full"
          />
        </motion.div>

        {/* Header Navigation */}
        <div id="navigation">
          <Header />
        </div>

        {/* Main Content with Routes */}
        <main id="main-content" role="main">
          <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-deep-black">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-corporate-orange border-t-transparent mx-auto mb-4"></div>
              <p className="text-white text-lg">Cargando...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/proyectos" element={<Proyectos />} />
            {/* Ruta 404 */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-deep-black text-white">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">404 - Página No Encontrada</h1>
                  <p className="text-gray-400 mb-6">La página que buscas no existe.</p>
                  <a 
                    href="/" 
                    className="bg-corporate-orange hover:bg-corporate-orange/90 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Volver al Inicio
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Action Buttons */}
        <WhatsAppFloat />

        {/* Global Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-corporate-orange/5 to-transparent opacity-50"></div>
          
          {/* Moving Particles - Optimizado */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-corporate-orange/30 rounded-full"
                animate={{
                  x: [0, window.innerWidth * 0.8],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight
                  ],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 3
                }}
                style={{
                  left: -10,
                  top: Math.random() * window.innerHeight
                }}
              />
            ))}
          </div>
        </div>

        {/* Performance Monitoring */}
        <div className="hidden">
          <div id="performance-monitor">
            Performance: {typeof performance !== 'undefined' ? performance.now().toFixed(2) : '0'}ms
          </div>
        </div>
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
