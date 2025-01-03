import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-light transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-light transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-light transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-light">
            © {new Date().getFullYear()} Simplifika. 
            {language === 'es' ? ' Todos los derechos reservados.' : ' All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}