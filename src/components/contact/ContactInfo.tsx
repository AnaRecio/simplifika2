import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function ContactInfo() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 mb-12 border border-indigo-100 hover:border-indigo-200 transition-colors duration-300">
      <h3 className="text-xl font-medium text-secondary mb-6">
        {language === 'es' ? 'Información de contacto' : 'Contact Information'}
      </h3>
      <div className="space-y-6">
        <div className="flex items-center group">
          <MapPin className="h-6 w-6 text-primary mr-3 group-hover:text-secondary transition-colors" />
          <span className="text-gray-700">San José, Costa Rica</span>
        </div>
        <div className="flex items-center group">
          <a 
            href="https://wa.me/12316818969" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center hover:text-secondary transition-colors duration-300 text-gray-700"
          >
            <Phone className="h-6 w-6 text-primary mr-3 group-hover:text-secondary transition-colors" />
            <span>WhatsApp: +1 231-681-8969</span>
          </a>
        </div>
        <div className="flex items-center group">
          <a 
            href="mailto:ventas@simplifika.tech"
            className="flex items-center hover:text-secondary transition-colors duration-300 text-gray-700"
          >
            <Mail className="h-6 w-6 text-primary mr-3 group-hover:text-secondary transition-colors" />
            <span>ventas@simplifika.tech</span>
          </a>
        </div>
      </div>
    </div>
  );
}