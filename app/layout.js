import './globals.css';
import './brand-fix.css';
import './logo-fix.css';
import FooterEnhancer from './FooterEnhancer';

export const metadata = {
  metadataBase: new URL('https://maxitec.ind.br'),
  title: 'Maxitec | Controle e Inspeção para Impressão Industrial',
  description: 'Maxivision Digital e soluções Maxitec para inspeção de impressão em embalagens, rótulos e flexografia. Veja equipamentos reais em operação e fale direto com a equipe.',
  keywords: [
    'Maxitec',
    'Maxivision Digital',
    'inspeção de impressão',
    'flexografia',
    'embalagens flexíveis',
    'vídeo inspeção',
    'estroboscópio LED'
  ],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Maxitec | Veja a impressão antes do prejuízo',
    description: 'Tecnologia nacional para controle e inspeção industrial. Equipamentos reais, aplicações reais e contato direto pelo WhatsApp.',
    images: ['/media/maxivision-digital.webp']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <FooterEnhancer />
      </body>
    </html>
  );
}
