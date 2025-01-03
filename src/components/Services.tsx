import React from 'react';
import { Bot, BarChart, Cog, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones Tecnológicas Innovadoras',
      description: 'En Simplifika, desarrollamos soluciones tecnológicas avanzadas que transforman la operación de su empresa, optimizan procesos y maximizan su potencial de crecimiento.',
      services: [
        {
          title: 'Automatización de Procesos',
          description: 'Transformamos sus operaciones mediante soluciones de automatización inteligente, reduciendo costos y eliminando tareas repetitivas.',
          icon: Cog,
        },
        {
          title: 'Asistentes Virtuales',
          description: 'Potenciamos la productividad de su equipo con asistentes virtuales inteligentes que optimizan la gestión diaria.',
          icon: Users,
        },
        {
          title: 'Chatbots Personalizados',
          description: 'Revolucionamos su atención al cliente con chatbots inteligentes que brindan respuestas precisas 24/7.',
          icon: Bot,
        },
        {
          title: 'Análisis de Datos',
          description: 'Impulsamos decisiones estratégicas con análisis de datos avanzados que revelan oportunidades de crecimiento.',
          icon: BarChart,
        },
      ]
    },
    en: {
      title: 'Our Services',
      subtitle: 'Tailored automation solutions',
      description: 'Discover how our services can transform your business and take it to the next level.',
      services: [
        {
          title: 'Process Automation',
          description: 'Optimize your workflows and reduce errors with our customized automation solutions.',
          icon: Cog,
        },
        {
          title: 'Virtual Assistants',
          description: 'Improve your team\'s efficiency with intelligent virtual assistants that handle repetitive tasks.',
          icon: Users,
        },
        {
          title: 'Custom Chatbots',
          description: 'Offer 24/7 customer service with intelligent chatbots designed for your business.',
          icon: Bot,
        },
        {
          title: 'Data Analysis',
          description: 'Make informed decisions with our advanced data analysis services.',
          icon: BarChart,
        },
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {currentContent.title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl">
            {currentContent.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            {currentContent.description}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {currentContent.services.map((service) => (
              <div key={service.title} className="flex group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-semibold text-secondary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}