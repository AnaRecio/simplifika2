import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTallyForm } from '../../hooks/useTallyForm';
import { FormSkeleton } from './FormSkeleton';

const FORM_URLS = {
  en: "https://tally.so/embed/wAA2Je?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  es: "https://tally.so/embed/wkKeAo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
} as const;

export function TallyForm() {
  const { language } = useLanguage();
  const { isLoading } = useTallyForm();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {isLoading && <FormSkeleton />}
      <iframe 
        data-tally-src={FORM_URLS[language]}
        loading="lazy"
        width="100%"
        height="200"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={language === 'es' ? "Formulario de contacto" : "Contact form"}
        className={`w-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}