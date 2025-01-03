import React, { useEffect } from 'react';
import { loadTallyEmbed } from '../utils/tally';

export default function TallyScript() {
  useEffect(() => {
    const cleanup = loadTallyEmbed();
    
    // Reload forms when component mounts
    const reloadForms = setInterval(() => {
      const iframes = document.querySelectorAll('iframe[data-tally-src]');
      iframes.forEach((iframe: HTMLIFrameElement) => {
        if (!iframe.src && iframe.dataset.tallySrc) {
          iframe.src = iframe.dataset.tallySrc;
        }
      });
    }, 1000);

    return () => {
      cleanup();
      clearInterval(reloadForms);
    };
  }, []);

  return null;
}