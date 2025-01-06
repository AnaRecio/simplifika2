import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Transforme su Negocio con',
      highlight: 'Automatización Inteligente',
      description: 'Optimice procesos, reduzca costos operativos y aumente la productividad con nuestras soluciones de automatización empresarial y análisis de datos avanzado.',
      cta: 'Consulta Gratuita',
      benefits: [
        'Reducción de costos operativos hasta un 40%',
        'Automatización de tareas repetitivas',
        'Análisis de datos en tiempo real',
        'Soporte técnico especializado 24/7'
      ]
    },
    en: {
      title: 'Transform Your Business with',
      highlight: 'Intelligent Automation',
      description: 'Optimize processes, reduce operational costs, and increase productivity with our enterprise automation solutions and advanced data analytics.',
      cta: 'Free Consultation',
      benefits: [
        'Reduce operational costs by up to 40%',
        'Automate repetitive tasks',
        'Real-time data analysis',
        '24/7 specialized technical support'
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative overflow-hidden bg-secondary pt-20 pb-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block mb-2 text-primary">{currentContent.title}</span>
            <span className="block text-white">
              {currentContent.highlight}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-light">
            {currentContent.description}
          </p>
          
          <div className="mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7qszVDHRemFe76IvFJJk1S6QfBRtn1IAI5As6T08IaoqJuw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-0 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {currentContent.cta}
            </a>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {currentContent.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200 border border-primary/20"
                >
                  <svg
                    className="h-6 w-6 text-primary mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-light text-left">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

      </div>
    </section>
  );
}
