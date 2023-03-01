// eslint-disable-next-line import/extensions
import Book from './modules/book.js';
// eslint-disable-next-line import/extensions
import { DateTime } from './modules/luxon.js';

const displayDate = () => {
  const date = document.getElementById('date');
  date.innerHTML = DateTime.now();
};

displayDate();

window.onload = () => {
  Book.updateDisplay();
  Book.addBook();

  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);
      document.querySelectorAll('section').forEach((s) => {
        if (s !== section) {
          s.style.display = 'none';
        }
      });
      section.style.display = 'block';
      e.preventDefault();
    });
  });

  const activeNavItem = document.querySelector('.nav-link.active');
  const sectionId = activeNavItem.getAttribute('href');
  const section = document.querySelector(sectionId);
  document.querySelectorAll('section').forEach((s) => {
    if (s !== section) {
      s.style.display = 'none';
    }
  });
  section.style.display = 'block';
};
