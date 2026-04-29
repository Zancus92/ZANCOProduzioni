export function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    if (btn) {
      btn.textContent = '✓ Messaggio inviato — Ti risponderemo presto!';
      btn.style.background = '#2a8a2a';
      setTimeout(() => {
        btn.textContent = 'Invia Richiesta →';
        btn.style.background = '';
        e.target.reset();
      }, 5000);
    }
  });
}
