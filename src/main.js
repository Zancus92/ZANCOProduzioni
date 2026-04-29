import './styles/main.css';
import { initCursor } from './js/cursor.js';
import { initScrollReveal } from './js/scrollReveal.js';
import { initCounters } from './js/counter.js';
import { initModal } from './js/modal.js';
import { initForm } from './js/form.js';
import { initNav } from './js/nav.js';
import { inject } from '@vercel/analytics';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initScrollReveal();
  initCounters();
  initModal();
  initForm();
  initNav();
  inject();
});
