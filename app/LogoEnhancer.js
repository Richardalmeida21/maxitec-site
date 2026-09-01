'use client';

import { useEffect } from 'react';

export default function LogoEnhancer() {
  useEffect(() => {
    const applyLogo = () => {
      document.querySelectorAll('.brand img, .footer-logo img').forEach((img) => {
        img.removeAttribute('srcset');
        img.removeAttribute('sizes');
        img.src = '/media/logo-maxitec.png?v=20260901-2';
      });
    };

    applyLogo();
    const id = window.setTimeout(applyLogo, 50);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}
