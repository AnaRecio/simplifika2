import { useEffect } from 'react';
import { useFormLoading } from './useFormLoading';

export function useTallyForm() {
  const { isLoading } = useFormLoading();

  useEffect(() => {
    // Add Tally script to head
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    // Load embeds when script is ready
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    return () => {
      script.remove();
    };
  }, []);

  return { isLoading };
}