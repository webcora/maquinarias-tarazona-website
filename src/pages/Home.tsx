import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';

// Components
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Technology from '../components/Technology';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  useEffect(() => {
    // Initialize smooth scrolling and advanced animations
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    });

    // Smooth scroll behavior
    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out"
    });

    // Parallax effects for sections
    gsap.utils.toArray('.parallax-section').forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Maquinarias Tarazona",
    "description": "Especialistas en reparación de maquinaria pesada en Lima, Perú. Servicios 24/7, diagnóstico computarizado y repuestos originales.",
    "url": "https://maquinariastarazona.com",
    "logo": "https://maquinariastarazona.com/images/logo.png",
    "image": "https://maquinariastarazona.com/images/og-image.jpg",
    "telephone": "+51972244802",
    "email": "info@maquinariastarazona.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Parque Industrial",
      "addressLocality": "Los Olivos",
      "addressRegion": "Lima",
      "postalCode": "15311",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-11.9707",
      "longitude": "-77.0661"
    },
    "openingHours": ["Mo-Fr 07:00-18:00"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-11.9707",
        "longitude": "-77.0661"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Reparación de Maquinaria Pesada",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reparación de Sistemas Hidráulicos",
            "description": "Diagnóstico y reparación especializada de sistemas hidráulicos para maquinaria pesada"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reparación de Motores",
            "description": "Servicio especializado en reparación de motores de combustión interna para maquinaria industrial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnóstico Computarizado",
            "description": "Diagnóstico técnico especializado con tecnología computarizada de última generación"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        {/* Meta tags básicos */}
        <title>Maquinarias Tarazona - Reparación de Maquinaria Pesada en Lima, Perú | Servicio 24/7</title>
        <meta name="description" content="⭐ Especialistas en reparación de maquinaria pesada en Lima. ✅ Servicios 24/7 ✅ Repuestos originales ✅ Diagnóstico computarizado ✅ +15 años experiencia. ☎️ +51 972 244 802" />
        <meta name="keywords" content="reparación maquinaria pesada Lima, servicio técnico excavadoras, reparación bulldozers Perú, diagnóstico computarizado maquinaria, repuestos originales excavadoras, servicio 24/7 maquinaria pesada, taller especializado Lima, mantenimiento industrial Perú" />
        
        {/* Meta tags adicionales */}
        <meta name="author" content="Maquinarias Tarazona" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://maquinariastarazona.com" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="PE-LIM" />
        <meta name="geo.placename" content="Lima, Perú" />
        <meta name="geo.position" content="-11.9707;-77.0661" />
        <meta name="ICBM" content="-11.9707, -77.0661" />
        
        {/* OpenGraph Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Maquinarias Tarazona" />
        <meta property="og:title" content="Maquinarias Tarazona - Reparación de Maquinaria Pesada en Lima" />
        <meta property="og:description" content="Especialistas en reparación de maquinaria pesada en Lima. Servicios 24/7, diagnóstico computarizado y repuestos originales. +15 años de experiencia." />
        <meta property="og:image" content="https://maquinariastarazona.com/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Maquinarias Tarazona - Especialistas en reparación de maquinaria pesada" />
        <meta property="og:url" content="https://maquinariastarazona.com" />
        <meta property="og:locale" content="es_PE" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MaquinariasTarazona" />
        <meta name="twitter:creator" content="@MaquinariasTarazona" />
        <meta name="twitter:title" content="Maquinarias Tarazona - Reparación de Maquinaria Pesada" />
        <meta name="twitter:description" content="Especialistas en reparación de maquinaria pesada en Lima. Servicios 24/7, diagnóstico computarizado. ☎️ +51 972 244 802" />
        <meta name="twitter:image" content="https://maquinariastarazona.com/images/twitter-card.jpg" />
        <meta name="twitter:image:alt" content="Maquinarias Tarazona - Reparación de Maquinaria Pesada" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Preload recursos críticos */}
        <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-excavator.jpeg" as="image" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </Helmet>
      
      <main className="overflow-hidden">
      {/* Hero Section */}
      <section id="inicio" className="parallax-section">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="servicios" className="parallax-section">
        <Services />
      </section>

      {/* Why Choose Us Section */}
      <section className="parallax-section">
        <WhyChooseUs />
      </section>

      {/* Technology Section */}
      <section className="parallax-section">
        <Technology />
      </section>

      {/* Testimonials Section */}
      <section className="parallax-section">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contacto" className="parallax-section">
        <Contact />
      </section>
    </main>
    </>
  );
};

export default Home;
