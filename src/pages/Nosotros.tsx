import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Users, 
  Wrench, 
  CheckCircle, 
  MapPin, 
  Trophy,
  FileText,
  Target,
  Calendar,
  Settings
} from 'lucide-react';

const Nosotros: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineEvents = [
    {
      year: '2008',
      title: 'Fundación',
      description: 'Iniciamos como un pequeño taller especializado en reparación hidráulica',
      icon: <Settings className="w-6 h-6" />
    },
    {
      year: '2012-2018',
      title: 'Crecimiento',
      description: 'Expansión de servicios incluyendo motores diésel y sistemas eléctricos',
      icon: <Target className="w-6 h-6" />
    },
    {
      year: '2019-2024',
      title: 'Modernización',
      description: 'Incorporación de tecnología de diagnóstico computarizado y expansión del equipo técnico',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const certifications = [
    'Proveedor autorizado de repuestos originales',
    'Certificación ISO 9001:2015 en gestión de calidad',
    'Reconocimiento como "Mejor Taller del Año 2023" - Asociación de Constructores',
    'Membresía activa en Cámara de Comercio de Lima'
  ];

  const facilities = [
    {
      name: 'Taller Principal - Los Olivos',
      size: '500m²',
      features: ['4 bahías de servicio especializadas', 'Equipos de diagnóstico computarizado', 'Área de pruebas hidráulicas', 'Bodega de repuestos originales']
    }
  ];

  const equipment = [
    'Scanner Caterpillar Cat ET',
    'Sistema diagnóstico Komatsu PC-200',
    'Analizador hidráulico digital',
    'Banco de pruebas para bombas'
  ];

  return (
    <div className="min-h-screen bg-deep-black overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-screen h-auto flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.8), rgba(15, 15, 15, 0.8)), url('/images/nosotros-taller.jpg')`
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
              Conoce a <span className="text-corporate-orange">Maquinarias Tarazona</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-neutral-gray mb-10 leading-relaxed"
            >
              Más de 15 años especializados en reparación de maquinaria pesada con tecnología de vanguardia
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 text-pure-white"
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-corporate-orange" />
                <span className="text-lg">Desde 2008</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-corporate-orange" />
                <span className="text-lg">8+ Técnicos Especializados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-corporate-orange" />
                <span className="text-lg">ISO 9001:2015</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-b from-deep-black to-neutral-black w-full relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pure-white mb-6">
              Nuestra <span className="text-corporate-orange">Historia</span>
            </h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              Un camino de crecimiento continuo, innovación tecnológica y compromiso con la excelencia
            </p>
          </motion.div>

          {/* Timeline Desktop y Mobile responsivo */}
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Layout Mobile: Columna vertical simple */}
                <div className="block md:hidden">
                  <div className="flex items-start space-x-4">
                    {/* Icono lado izquierdo en móvil */}
                    <div className="flex-shrink-0 w-12 h-12 bg-corporate-orange rounded-full flex items-center justify-center text-white mt-2">
                      {event.icon}
                    </div>
                    
                    {/* Contenido principal en móvil */}
                    <div className="flex-1 min-w-0">
                      <div className="glass-morphism p-4 rounded-lg w-full">
                        <h3 className="text-lg sm:text-xl font-bold text-corporate-orange mb-2">{event.year}</h3>
                        <h4 className="text-base sm:text-lg font-semibold text-pure-white mb-3">{event.title}</h4>
                        <p className="text-neutral-gray text-sm leading-relaxed break-words">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layout Desktop: Timeline horizontal alternado */}
                <div className="hidden md:block">
                  <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="glass-morphism p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-corporate-orange mb-2">{event.year}</h3>
                        <h4 className="text-xl font-semibold text-pure-white mb-3">{event.title}</h4>
                        <p className="text-neutral-gray">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 bg-corporate-orange rounded-full flex items-center justify-center text-white">
                        {event.icon}
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liderazgo Técnico */}
      <section className="py-10 md:py-14 lg:py-16 bg-neutral-black w-full relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pure-white mb-6">
              Liderazgo <span className="text-corporate-orange">Técnico</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/equipo-tecnico-reparacion.jpg"
                alt="Técnicos especializados trabajando con excavadora Hyundai"
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-morphism p-8 rounded-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Foto del Ing. Tarazona */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                  >
                    <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-4 border-corporate-orange shadow-xl hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/images/tarazona-alta-calidad.jpg" 
                        alt="Ing. Jaime Tarazona - Director Técnico"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Información del Ing. Tarazona */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-corporate-orange mb-2">
                      Ing. Jaime Tarazona
                    </h3>
                    <h4 className="text-lg font-semibold text-pure-white mb-4">
                      Director Técnico
                    </h4>
                    <div className="space-y-3 text-neutral-gray">
                      <p className="flex items-center justify-center md:justify-start">
                        <FileText className="w-5 h-5 text-corporate-orange mr-3" />
                        Ingeniero Mecánico Colegiado CIP N° 123456
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <Clock className="w-5 h-5 text-corporate-orange mr-3" />
                        20+ años de experiencia en maquinaria pesada
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <Wrench className="w-5 h-5 text-corporate-orange mr-3" />
                        Especialización en sistemas hidráulicos industriales
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <Award className="w-5 h-5 text-corporate-orange mr-3" />
                        Certificaciones internacionales en diagnóstico Caterpillar, Komatsu, Volvo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-morphism p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-pure-white mb-4">
                  Equipo Técnico Especializado
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-corporate-orange">8</div>
                    <div className="text-neutral-gray">Técnicos Certificados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-corporate-orange">10</div>
                    <div className="text-neutral-gray">Años Promedio Experiencia</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestras Instalaciones */}
      <section className="py-10 md:py-14 lg:py-16 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pure-white mb-6">
              Nuestras <span className="text-corporate-orange">Instalaciones</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-corporate-orange mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-pure-white">Taller Principal - Los Olivos</h3>
                  <p className="text-corporate-orange font-semibold">500m² de área especializada</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {facilities[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-corporate-orange mr-3" />
                    <span className="text-neutral-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <Settings className="w-8 h-8 text-corporate-orange mr-4" />
                <h3 className="text-2xl font-bold text-pure-white">Equipos de Diagnóstico</h3>
              </div>
              
              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-corporate-orange mr-3" />
                    <span className="text-neutral-gray">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
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
              Certificaciones y <span className="text-corporate-orange">Reconocimientos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-start">
                  <Trophy className="w-6 h-6 text-corporate-orange mr-4 mt-1" />
                  <p className="text-neutral-gray">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso con la Calidad */}
      <section className="py-10 md:py-14 lg:py-16 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pure-white mb-6">
              Compromiso con la <span className="text-corporate-orange">Calidad</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Garantía Escrita', subtitle: 'En todos los trabajos', icon: <FileText className="w-8 h-8" /> },
              { title: 'Seguimiento Post-Servicio', subtitle: 'Por 6 meses', icon: <Clock className="w-8 h-8" /> },
              { title: 'Satisfacción 100%', subtitle: 'Política de calidad', icon: <CheckCircle className="w-8 h-8" /> },
              { title: 'Respaldo Técnico', subtitle: 'Permanente', icon: <Wrench className="w-8 h-8" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-morphism p-8 rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <div className="text-corporate-orange mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-pure-white mb-2">{item.title}</h3>
                <p className="text-neutral-gray">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
