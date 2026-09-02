'use client';

import { useEffect } from 'react';

const externalArrow = `
  <svg class="footer-external-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

const instagramIcon = `
  <svg class="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="17.4" cy="6.7" r="1.25" fill="currentColor"/>
  </svg>`;

const whatsappIcon = `
  <svg class="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.4Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.1 7.9c.2-.45.48-.46.73-.46h.46c.2 0 .37.02.52.4l.76 1.82c.1.25.09.45-.08.67l-.57.73c-.17.2-.26.36-.1.64.47.84 1.03 1.52 1.76 2.08.75.57 1.57.98 2.5 1.28.27.09.46-.01.64-.24l.84-1c.2-.25.44-.28.72-.15l1.77.83c.27.12.43.2.5.38.08.18.06.88-.17 1.5-.28.7-1.32 1.3-1.9 1.4-.55.1-1.23.16-4.28-1.08-3.57-1.48-5.84-5.1-6-5.32-.18-.26-1.45-1.86-1.45-3.54 0-.8.26-1.26.46-1.6Z" fill="currentColor" transform="scale(.78) translate(3.3 3.1)"/>
  </svg>`;

function enhanceSocialLink(link, type) {
  const label = type === 'instagram' ? 'Instagram' : 'WhatsApp';
  const icon = type === 'instagram' ? instagramIcon : whatsappIcon;
  link.classList.add('footer-social', `footer-social-${type}`);
  link.setAttribute('aria-label', `${label} Maxitec`);
  link.innerHTML = `${icon}<span>${label}</span>${externalArrow}`;
}

export default function FooterEnhancer() {
  useEffect(() => {
    const heroEmphasis = document.querySelector('.hero h1 em');
    if (heroEmphasis) heroEmphasis.textContent = 'antes do prejuízo.';

    const footer = document.querySelector('footer');
    if (!footer) return;

    const footerLinks = [...footer.querySelectorAll('a')];
    footerLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (href.includes('instagram.com')) enhanceSocialLink(link, 'instagram');
      if (href.includes('wa.me/5515997491884')) enhanceSocialLink(link, 'whatsapp');
    });

    if (footer.querySelector('.footer-legal')) return;

    const legal = document.createElement('div');
    legal.className = 'footer-legal';

    const copyright = document.createElement('span');
    copyright.className = 'footer-copyright';
    copyright.textContent = `© ${new Date().getFullYear()} Maxitec. Todos os direitos reservados.`;

    const author = document.createElement('a');
    author.className = 'footer-author';
    author.href = 'https://wa.me/5515996992742?text=Olá%20Richard!%20Vim%20pelo%20site%20da%20Maxitec.';
    author.target = '_blank';
    author.rel = 'noreferrer';
    author.setAttribute('aria-label', 'Site feito por Richard Camargo - abrir WhatsApp');
    author.innerHTML = `<span>Site feito por <strong>Richard Camargo</strong></span>${externalArrow}`;

    legal.appendChild(copyright);
    legal.appendChild(author);
    footer.appendChild(legal);
  }, []);

  return null;
}
