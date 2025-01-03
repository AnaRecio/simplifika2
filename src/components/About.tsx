import React from 'react';
import { Lightbulb, Target, Users, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Sobre Nosotros',
      subtitle: 'Expertos en Transformación Digital',
      description: 'En Simplifika, somos pioneros en la transformación digital empresarial, combinando innovación tecnológica con soluciones prácticas para impulsar el crecimiento de su negocio.',
      features: [
        {
          title: 'Innovación Continua',
          description: 'Implementamos las últimas tecnologías y metodologías ágiles para mantener su empresa a la vanguardia digital.',
          icon: Lightbulb,
        },
        {
          title: 'Soluciones Personalizadas',
          description: 'Desarrollamos estrategias únicas adaptadas a los objetivos específicos y desafíos de su empresa.',
          icon: Target,
        },
        {
          title: 'Equipo Especializado',
          description: 'Nuestros expertos en tecnología y procesos están certificados en las últimas herramientas de automatización.',
          icon: Users,
        },
        {
          title: 'Resultados Medibles',
          description: 'Garantizamos un ROI claro con métricas precisas y resultados tangibles en su operación.',
          icon: Zap,
        },
      ]
    },
    en: {
      title: 'About Us',
      subtitle: 'Digital Transformation Experts',
      description: 'At Simplifika, we are pioneers in business digital transformation, combining technological innovation with practical solutions to drive your business growth.',
      features: [
        {
          title: 'Continuous Innovation',
          description: 'We implement the latest technologies and agile methodologies to keep your company at the digital forefront.',
          icon: Lightbulb,
        },
        {
          title: 'Customized Solutions',
          description: 'We develop unique strategies adapted to your company\'s specific objectives and challenges.',
          icon: Target,
        },
        {
          title: 'Specialized Team',
          description: 'Our technology and process experts are certified in the latest automation tools.',
          icon: Users,
        },
        {
          title: 'Measurable Results',
          description: 'We guarantee clear ROI with precise metrics and tangible results in your operation.',
          icon: Zap,
        },
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-medium">
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

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {currentContent.features.map((feature) => (
              <div key={feature.title} className="flex group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-semibold text-secondary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
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