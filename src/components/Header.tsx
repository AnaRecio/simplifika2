import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-secondary py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Simplifika</h1>
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a href="#services" className="text-white hover:text-gray-light transition-colors">
              {language === 'es' ? 'Servicios' : 'Services'}
            </a>
            <a href="#contact" className="text-white hover:text-gray-light transition-colors">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
          </nav>
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="text-white hover:text-gray-light transition-colors"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </header>
  );
}