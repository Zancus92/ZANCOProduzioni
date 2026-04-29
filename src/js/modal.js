export function initModal() {
  const modal = document.getElementById('modal');
  const openReel = document.getElementById('openReel');
  const reelContainer = document.getElementById('reelContainer');
  const modalClose = document.getElementById('modalClose');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openReel) openReel.addEventListener('click', e => { e.preventDefault(); openModal(); });
  if (reelContainer) reelContainer.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}
