import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  CheckCircle, 
  DollarSign, 
  Wrench, 
  Zap, 
  Settings, 
  Truck,
  Star,
  Calendar,
  MapPin,
  User,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';

const Proyectos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = [
    { id: 'todos', label: 'Todos los Proyectos', icon: <Target className="w-4 h-4" /> },
    { id: 'hidraulicos', label: 'Sistemas Hidráulicos', icon: <Settings className="w-4 h-4" /> },
    { id: 'motores', label: 'Motores Diésel', icon: <Wrench className="w-4 h-4" /> },
    { id: 'electricos', label: 'Sistemas Eléctricos', icon: <Zap className="w-4 h-4" /> },
    { id: 'transmisiones', label: 'Transmisiones', icon: <Truck className="w-4 h-4" /> }
  ];

  const projects = [
    {
      id: 1,
      category: 'hidraulicos',
      title: 'Reparación Excavadora CAT 320D',
      client: 'Constructora San Martín S.A.C.',
      problem: 'Falla en sistema hidráulico principal, pérdida total de potencia',
      solution: 'Reconstrucción completa de bomba principal, reemplazo de válvulas de control',
      duration: '5 días',
      result: '100% operatividad restaurada, garantía 12 meses',
      image: '/images/proyecto-excavadora.png',
      savings: null,
      testimonial: {
        text: 'La reparación de nuestra excavadora superó nuestras expectativas. El Ing. Tarazona diagnosticó el problema que 3 talleres no pudieron solucionar.',
        author: 'Ing. Carlos Mendoza',
        company: 'Constructora San Martín'
      }
    },
    {
      id: 2,
      category: 'motores',
      title: 'Overhaul Motor Volvo D7E',
      client: 'Minera Horizonte Norte',
      problem: 'Motor con 15,000 horas, pérdida de compresión',
      solution: 'Overhaul completo, rectificación de block, nuevos pistones y anillos',
      duration: '8 días',
      result: 'Rendimiento como motor nuevo, extensión de vida útil 8,000 horas',
      image: '/images/proyecto-motor.png',
      savings: 'S/ 180,000 vs compra de motor nuevo',
      testimonial: null
    },
    {
      id: 3,
      category: 'electricos',
      title: 'Sistema Eléctrico Cargador Frontal CAT 950H',
      client: 'Empresa Transportes Andinos',
      problem: 'Fallas intermitentes en sistema de control electrónico',
      solution: 'Diagnóstico avanzado, reemplazo de ECU, actualización de software',
      duration: '3 días',
      result: 'Eliminación total de códigos de error, operación estable',
      image: '/images/proyecto-electrico.png',
      savings: null,
      testimonial: null
    },
    {
      id: 4,
      category: 'transmisiones',
      title: 'Transmisión Bulldozer Komatsu D85',
      client: 'Constructora Los Andes',
      problem: 'Pérdida de tracción, ruidos anómalos en transmisión',
      solution: 'Reconstrucción de caja de velocidades, nuevos embragues',
      duration: '6 días',
      result: 'Tracción restaurada al 100%, reducción de ruido operacional',
      image: '/images/proyecto-transmision.jpg',
      savings: null,
      testimonial: null
    },
    {
      id: 5,
      category: 'hidraulicos',
      title: 'Emergencia 24H - Retroexcavadora JCB 3CX',
      client: 'Obras Públicas Municipales',
      problem: 'Falla hidráulica durante obra pública crítica',
      solution: 'Servicio de emergencia, reparación in-situ en 8 horas',
      duration: '8 horas (servicio nocturno)',
      result: 'Obra pública completada a tiempo, cliente satisfecho',
      image: '/images/proyecto-excavadora.png',
      savings: null,
      testimonial: {
        text: 'Servicio de emergencia excepcional. Nos salvaron de un problema millonario en plena obra.',
        author: 'Roberto Silva',
        company: 'Obras Públicas'
      }
    },
    {
      id: 6,
      category: 'motores',
      title: 'Modernización Flota Minera',
      client: 'Minera del Sur S.A.',
      problem: 'Flota de 12 equipos con problemas diversos',
      solution: 'Plan de mantenimiento preventivo, reparaciones programadas',
      duration: '3 meses (proyecto continuo)',
      result: '95% disponibilidad de flota, reducción 40% en costos de mantenimiento',
      image: '/images/proyecto-motor.png',
      savings: null,
      testimonial: null
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: '150+', label: 'Proyectos Completados', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '98%', label: 'Tasa de Éxito', icon: <Star className="w-8 h-8" /> },
    { number: '4.5', label: 'Días Promedio', icon: <Clock className="w-8 h-8" /> },
    { number: '65%', label: 'Ahorro vs Nuevo', icon: <TrendingUp className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-screen h-auto flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.8), rgba(15, 15, 15, 0.8)), url('/images/heavy-machinery-panoramic.jpg')`
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-pure-white mb-6"
            >
              Nuestros Proyectos <span className="text-corporate-orange">Destacados</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-neutral-gray mb-10 leading-relaxed"
            >
              Casos de éxito que demuestran nuestra experiencia técnica en reparación de maquinaria pesada
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-b from-deep-black to-neutral-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pure-white mb-6">
              Estadísticas de <span className="text-corporate-orange">Proyectos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-morphism p-8 rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <div className="text-corporate-orange mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-pure-white mb-2">{stat.number}</div>
                <div className="text-neutral-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 bg-neutral-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-corporate-orange text-white'
                    : 'bg-gray-800 text-neutral-gray hover:bg-gray-700'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proyectos Grid */}
      <section className="py-10 md:py-14 lg:py-16 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-morphism rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-corporate-orange px-3 py-1 rounded-full text-white text-sm font-medium">
                        {filters.find(f => f.id === project.category)?.label}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-pure-white mb-4">{project.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <User className="w-5 h-5 text-corporate-orange mr-3 mt-1" />
                        <div>
                          <div className="text-sm text-neutral-gray">Cliente</div>
                          <div className="text-pure-white font-medium">{project.client}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Target className="w-5 h-5 text-corporate-orange mr-3 mt-1" />
                        <div>
                          <div className="text-sm text-neutral-gray">Problema</div>
                          <div className="text-pure-white">{project.problem}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Wrench className="w-5 h-5 text-corporate-orange mr-3 mt-1" />
                        <div>
                          <div className="text-sm text-neutral-gray">Solución</div>
                          <div className="text-pure-white">{project.solution}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-corporate-orange mr-2" />
                          <span className="text-sm text-neutral-gray">Tiempo</span>
                        </div>
                        <span className="text-pure-white font-medium">{project.duration}</span>
                      </div>
                      
                      {project.savings && (
                        <div className="flex items-center justify-between bg-green-900/20 p-3 rounded border border-green-700">
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 text-green-400 mr-2" />
                            <span className="text-sm text-green-400">Ahorro</span>
                          </div>
                          <span className="text-green-400 font-medium">{project.savings}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-gray-800 p-4 rounded mb-6">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-sm text-neutral-gray">Resultado</span>
                      </div>
                      <p className="text-pure-white">{project.result}</p>
                    </div>
                    
                    {project.testimonial && (
                      <div className="bg-corporate-orange/10 border-l-4 border-corporate-orange p-4 rounded">
                        <p className="text-neutral-gray italic mb-2">"{project.testimonial.text}"</p>
                        <div className="text-right">
                          <div className="text-pure-white font-medium">{project.testimonial.author}</div>
                          <div className="text-corporate-orange text-sm">{project.testimonial.company}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonios Destacados */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-b from-neutral-black to-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pure-white mb-6">
              Testimonios de <span className="text-corporate-orange">Proyectos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.filter(p => p.testimonial).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-morphism p-8 rounded-lg"
              >
                <div className="flex items-center mb-6">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                
                <p className="text-neutral-gray text-lg italic mb-6">
                  "{project.testimonial?.text}"
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-pure-white font-bold">{project.testimonial?.author}</div>
                  <div className="text-corporate-orange">{project.testimonial?.company}</div>
                  <div className="text-sm text-neutral-gray mt-1">Proyecto: {project.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-14 lg:py-16 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pure-white mb-6">
              ¿Tienes un Proyecto <span className="text-corporate-orange">Desafiante</span>?
            </h2>
            <p className="text-xl text-neutral-gray mb-10">
              Únete a nuestros casos de éxito. Contáctanos y descubre cómo podemos resolver los desafíos técnicos de tu maquinaria pesada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="holographic-button text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Wrench className="w-6 h-6" />
                <span>SOLICITAR COTIZACIÓN</span>
              </motion.a>
              
              <motion.a
                href="tel:+51972244802"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-corporate-orange text-corporate-orange font-bold py-4 px-8 rounded-lg hover:bg-corporate-orange hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>LLAMAR AHORA</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
