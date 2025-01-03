export function loadTallyEmbed() {
  if (typeof window === 'undefined') return () => {};

  // Function to load Tally forms
  const loadForms = () => {
    document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: HTMLIFrameElement) => {
      if (iframe.dataset.tallySrc) {
        iframe.src = iframe.dataset.tallySrc;
      }
    });
  };

  // Create and append script if it doesn't exist
  if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = loadForms;
    script.onerror = loadForms;
    document.body.appendChild(script);
  } else {
    loadForms();
  }

  // Cleanup function
  return () => {
    const script = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (script) {
      script.remove();
    }
  };
}