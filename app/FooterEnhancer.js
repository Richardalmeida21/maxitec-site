'use client';

import { useEffect } from 'react';

export default function FooterEnhancer() {
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || footer.querySelector('.footer-legal')) return;

    const legal = document.createElement('div');
    legal.className = 'footer-legal';

    const copyright = document.createElement('span');
    copyright.textContent = `© ${new Date().getFullYear()} Maxitec. Todos os direitos reservados.`;

    const author = document.createElement('a');
    author.href = 'https://wa.me/5515996992742?text=Olá%20Richard!%20Vim%20pelo%20site%20da%20Maxitec.';
    author.target = '_blank';
    author.rel = 'noreferrer';
    author.textContent = 'Site feito por Richard Camargo ↗';

    legal.appendChild(copyright);
    legal.appendChild(author);
    footer.appendChild(legal);
  }, []);

  return null;
}
