import './globals.css';

export const metadata = {
  metadataBase: new URL('https://maxitec.net.br'),
  title: {
    default: 'Maxitec | Inspeção de Impressão para Embalagens',
    template: '%s | Maxitec'
  },
  description:
    'Equipamentos Maxitec para inspeção de impressão em embalagens, rótulos e adesivos flexíveis. Mais controle, menos perdas e mais qualidade na produção.',
  keywords: [
    'inspeção de impressão',
    'vídeo inspeção',
    'Maxivision Digital',
    'embalagens flexíveis',
    'rótulos',
    'estroboscópio LED',
    'impressão industrial'
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Maxitec | Tecnologia para enxergar melhor a sua impressão',
    description:
      'Soluções para inspeção visual em tempo real, redução de perdas e aumento da qualidade no processo de impressão.',
    images: ['/media/maxivision-digital.webp']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
