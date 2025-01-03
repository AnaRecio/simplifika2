import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { useLanguage } from '../../context/LanguageContext';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export function ContactForm() {
  const { language } = useLanguage();
  const { 
    formData, 
    handleSubmit, 
    handleChange, 
    isSubmitting, 
    error, 
    success 
  } = useContactForm();

  const content = {
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
  };

  const t = content[language];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
          {t.success}
        </div>
      ) : (
        <>
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg">
              {t.error}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            {isSubmitting ? <LoadingSpinner /> : t.submit}
          </button>
        </>
      )}
    </form>
  );
}