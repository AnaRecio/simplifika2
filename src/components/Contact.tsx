import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ContactInfo } from './contact/ContactInfo';

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Contacto',
      subtitle: '¿Está listo para simplificar su negocio?',
      description: 'Contáctenos hoy y descubra cómo podemos ayudarle a optimizar sus procesos y aumentar su productividad.'
    },
    en: {
      title: 'Contact',
      subtitle: 'Ready to simplify your business?',
      description: 'Contact us today and discover how we can help you optimize your processes and increase your productivity.'
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {content[language].title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl">
            {content[language].subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            {content[language].description}
          </p>
        </div>
        
        <ContactInfo />
      </div>
    </section>
  );
}