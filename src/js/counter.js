/**
 * Inizializza i contatori numerici con animazione al raggiungimento della sezione.
 * Supporta numeri interi, decimali e suffissi personalizzati.
 */
export function initCounters() {
  const counters = document.querySelectorAll('.counter');

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // 1. Lettura dati dall'HTML
        const target = parseFloat(el.dataset.target); // Supporta 99.9
        const suffix = el.dataset.suffix || '';      // Legge %, +, o nulla
        const isDecimal = el.dataset.target.includes('.');

        // 2. Configurazione animazione
        const duration = 1400; // Millisecondi totali
        const frameRate = 16;  // ~60fps
        const totalSteps = duration / frameRate;
        const step = target / totalSteps;

        let current = 0;

        const timer = setInterval(() => {
          current += step;

          if (current >= target) {
            current = target;
            clearInterval(timer);
          }

          // 3. Formattazione visuale
          // Se il numero originale ha un punto, mostriamo 1 decimale scorrevole
          const displayNum = isDecimal
              ? current.toFixed(1).replace('.', ',') // Sostituisce punto con virgola per stile IT
              : Math.floor(current);

          el.textContent = displayNum + suffix;
        }, frameRate);

        // Smette di osservare l'elemento una volta avviata l'animazione
        counterObs.unobserve(el);
      }
    });
  }, {
    threshold: 0.5 // Parte quando l'elemento è visibile al 50%
  });

  counters.forEach(c => counterObs.observe(c));
}