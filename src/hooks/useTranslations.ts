import { useLanguage } from '../context/LanguageContext';

const translations = {
  contact: {
    es: {
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      success: '¡Gracias por su mensaje! Nos pondremos en contacto pronto.',
      error: 'Hubo un error al enviar el mensaje. Por favor, intente de nuevo.'
    },
    en: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      success: 'Thank you for your message! We will get back to you soon.',
      error: 'There was an error sending your message. Please try again.'
    }
  }
} as const;

type TranslationKey = keyof typeof translations;

export function useTranslations(section: TranslationKey) {
  const { language } = useLanguage();
  
  const t = (key: keyof typeof translations[typeof section]['en']) => 
    translations[section][language][key];

  return { t };
}