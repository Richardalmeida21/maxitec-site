'use client';

import Image from 'next/image';
import { useState } from 'react';

const WHATSAPP = 'https://wa.me/5515997491884';

const Icon = ({ name, size = 24 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    check: <><path d="m5 12 4 4L19 6" /></>,
    eye: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.7"/></>,
    trending: <><path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/></>,
    shield: <><path d="M12 3 4.5 6v5.2c0 4.8 3.2 8.5 7.5 9.8 4.3-1.3 7.5-5 7.5-9.8V6L12 3Z"/><path d="m8.5 12 2.1 2.1 4.9-5"/></>,
    bolt: <><path d="m13 2-8 11h6l-1 9 9-12h-6V2Z"/></>,
    message: <><path d="M21 12a8.5 8.5 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.9L3 21l1.4-4.5A8.5 8.5 0 1 1 21 12Z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    phone: <><path d="M7.2 3.5 10 7.3 8.4 9.5c1.2 2.6 3.1 4.6 5.8 5.8l2.3-1.6 3.8 2.8c.3.3.4.8.3 1.2-.5 1.8-2.1 3-4 2.8C9.3 19.7 4.2 14.6 3.4 7.3c-.2-1.9 1-3.5 2.8-4 .4-.1.8 0 1 .2Z"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
};

function WhatsAppButton({ children, className = '', message = 'Olá! Vim pelo site da Maxitec e gostaria de conhecer as soluções para inspeção de impressão.' }) {
  const href = `${WHATSAPP}?text=${encodeURIComponent(message)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function LeadForm() {
  const [form, setForm] = useState({ nome: '', empresa: '', telefone: '', necessidade: '' });

  function submit(e) {
    e.preventDefault();
    const msg = [
      'Olá! Vim pelo site da Maxitec e gostaria de falar com um especialista.',
      '',
      `Nome: ${form.nome}`,
      `Empresa: ${form.empresa}`,
      `Telefone: ${form.telefone}`,
      `Necessidade: ${form.necessidade || 'Quero entender qual solução é ideal para minha operação.'}`
    ].join('\n');
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-head">
        <span className="eyebrow">ATENDIMENTO COMERCIAL</span>
        <h3>Fale com quem entende de impressão industrial.</h3>
        <p>Conte brevemente o que você precisa e continue a conversa direto no WhatsApp.</p>
      </div>
      <label>Seu nome<input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} placeholder="Como podemos te chamar?" /></label>
      <div className="field-row">
        <label>Empresa<input required value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} placeholder="Nome da empresa" /></label>
        <label>Telefone<input required value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} placeholder="(00) 00000-0000" /></label>
      </div>
      <label>O que você quer melhorar?<textarea rows="4" value={form.necessidade} onChange={e => setForm({ ...form, necessidade: e.target.value })} placeholder="Ex.: reduzir perdas, enxergar falhas em alta velocidade, modernizar o controle de qualidade..." /></label>
      <button className="btn btn-whatsapp btn-full" type="submit"><Icon name="message" /> Conversar no WhatsApp <Icon name="arrow" /></button>
      <small>Sem compromisso. Você fala diretamente com a equipe Maxitec.</small>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Maxitec - início">
            <Image src="/media/logo-maxitec.webp" width={176} height={64} alt="Maxitec" priority />
          </a>
          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <a href="#solucoes" onClick={() => setMenuOpen(false)}>Soluções</a>
            <a href="#resultados" onClick={() => setMenuOpen(false)}>Resultados</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
          <WhatsAppButton className="btn btn-primary header-cta"><Icon name="message" /> Falar com especialista</WhatsAppButton>
          <button className="menu-btn" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}><Icon name="menu" /></button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-badge"><span /> Tecnologia nacional para impressão industrial</div>
            <h1>Enxergue falhas antes que elas virem <em>perdas.</em></h1>
            <p className="hero-sub">Equipamentos de inspeção para impressão de embalagens, rótulos e adesivos flexíveis — desenvolvidos para dar mais controle, qualidade e produtividade ao seu processo.</p>
            <div className="hero-actions">
              <WhatsAppButton className="btn btn-whatsapp btn-lg"><Icon name="message" /> Quero falar com a Maxitec <Icon name="arrow" /></WhatsAppButton>
              <a className="btn btn-ghost btn-lg" href="#solucoes">Conhecer soluções</a>
            </div>
            <div className="trust-row">
              <div><strong>+20 anos</strong><span>de experiência</span></div>
              <div><strong>Brasil + exterior</strong><span>equipamentos em operação</span></div>
              <div><strong>Suporte direto</strong><span>com equipe especializada</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="product-glow" />
            <div className="product-card">
              <div className="product-label"><span>MAXIVISION</span> DIGITAL</div>
              <Image src="/media/maxivision-digital.webp" width={900} height={940} alt="Sistema Maxivision Digital da Maxitec" priority sizes="(max-width: 900px) 90vw, 44vw" />
              <div className="floating-card float-one"><Icon name="eye" /><span><b>Inspeção em tempo real</b>Visualização nítida do material impresso</span></div>
              <div className="floating-card float-two"><Icon name="trending" /><span><b>Mais eficiência</b>Reduza perdas durante a produção</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pain-section" id="resultados">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">CONTROLE DE QUALIDADE DE VERDADE</span>
            <h2>Imprimir rápido não basta.<br/><span>É preciso imprimir certo.</span></h2>
            <p>Quando uma falha só é percebida no final da bobina, o prejuízo já aconteceu. A Maxitec ajuda sua operação a identificar desvios durante o processo.</p>
          </div>
          <div className="benefit-grid">
            <article><div className="icon-box"><Icon name="eye" /></div><h3>Veja em alta velocidade</h3><p>Acompanhe o material impresso em movimento com visão clara e precisa para tomadas de decisão rápidas.</p><span>01</span></article>
            <article><div className="icon-box"><Icon name="shield" /></div><h3>Evite desperdícios</h3><p>Identifique problemas antes que se transformem em metros de material perdido, retrabalho ou descarte.</p><span>02</span></article>
            <article><div className="icon-box"><Icon name="trending" /></div><h3>Produza com padrão</h3><p>Mais consistência no controle de qualidade significa mais segurança para sua equipe e para seu cliente final.</p><span>03</span></article>
          </div>
        </div>
      </section>

      <section className="solutions" id="solucoes">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">SOLUÇÕES MAXITEC</span><h2>Tecnologia construída para o <span>chão de fábrica.</span></h2></div>
            <p>Projetamos e fabricamos equipamentos robustos, práticos e preparados para ambientes industriais.</p>
          </div>

          <div className="solution-feature">
            <div className="solution-image blue-stage">
              <Image src="/media/maxivision-digital.webp" width={900} height={940} alt="Maxivision Digital" sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="tech-chip"><span /> Tecnologia Maxitec</div>
            </div>
            <div className="solution-copy">
              <span className="solution-number">01 / MAXIVISION DIGITAL</span>
              <h3>Veja o que acontece na impressão, em tempo real.</h3>
              <p>Sistema de vídeo inspeção com câmera megapixel, iluminação LED estroboscópica e estrutura industrial. Desenvolvido para facilitar o trabalho do operador e elevar o controle de qualidade.</p>
              <ul className="check-list">
                <li><Icon name="check" /> Visualização do material impresso em alta velocidade</li>
                <li><Icon name="check" /> Câmera megapixel e iluminação LED estroboscópica</li>
                <li><Icon name="check" /> Estrutura robusta para operação industrial contínua</li>
                <li><Icon name="check" /> Operação prática e intuitiva</li>
              </ul>
              <WhatsAppButton className="text-link" message="Olá! Vim pelo site e quero saber mais sobre o Maxivision Digital.">Quero saber se o Maxivision serve para minha máquina <Icon name="arrow" /></WhatsAppButton>
            </div>
          </div>

          <div className="strobe-card">
            <div className="strobe-copy">
              <span className="solution-number">02 / ESTROBOSCÓPIO LED</span>
              <h3>Congele visualmente o movimento. Encontre o detalhe.</h3>
              <p>Inspeção visual em alta velocidade com iluminação LED de alta intensidade, sincronismo manual ou automático e compatibilidade com diferentes sensores.</p>
              <div className="mini-features"><span><Icon name="bolt" /> LED de alta intensidade</span><span><Icon name="shield" /> Construção robusta</span><span><Icon name="eye" /> Inspeção precisa</span></div>
              <WhatsAppButton className="btn btn-outline" message="Olá! Vim pelo site e quero saber mais sobre o Estroboscópio LED Maxitec.">Falar sobre o Estroboscópio <Icon name="arrow" /></WhatsAppButton>
            </div>
            <div className="strobe-graphic"><div className="rings"><i/><i/><i/></div><Icon name="bolt" size={72}/></div>
          </div>
        </div>
      </section>

      <section className="real-world">
        <div className="container">
          <div className="section-heading centered light">
            <span className="eyebrow">NA PRÁTICA</span>
            <h2>Veja a tecnologia Maxitec <span>em operação.</span></h2>
            <p>Aplicações reais em processos de impressão de embalagens flexíveis.</p>
          </div>
          <div className="video-grid">
            <article className="video-card">
              <video controls playsInline preload="none" poster="/media/img_1918-poster.webp"><source src="/media/img_1918.mp4" type="video/mp4" /></video>
              <div><span>INSPEÇÃO VISUAL</span><h3>Controle em produção</h3><p>Visualização de impressão em alta velocidade.</p></div>
            </article>
            <article className="video-card">
              <video controls playsInline preload="none" poster="/media/img_0771-poster.webp"><source src="/media/img_0771.mp4" type="video/mp4" /></video>
              <div><span>APLICAÇÃO INDUSTRIAL</span><h3>Tecnologia no processo</h3><p>Equipamentos desenvolvidos para a rotina da indústria.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="container about-grid">
          <div className="about-media">
            <Image src="/media/20-anos.webp" width={900} height={1187} alt="Maxitec - mais de 20 anos de grandes resultados" sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">SOBRE A MAXITEC</span>
            <h2>Experiência de quem conhece o desafio da <span>impressão industrial.</span></h2>
            <p>A Maxitec é especializada no desenvolvimento e fabricação de equipamentos para o mercado de impressão de embalagens, rótulos e adesivos flexíveis. Há mais de 20 anos, combina experiência, inovação e tecnologia para aumentar a qualidade e a produtividade dos clientes.</p>
            <p>Com fabricação em Tatuí, interior de São Paulo, nossas soluções foram pensadas para quem precisa de confiabilidade no dia a dia da produção.</p>
            <div className="about-points">
              <div><strong>20+</strong><span>anos de mercado</span></div>
              <div><strong>100%</strong><span>foco em tecnologia industrial</span></div>
              <div><strong>BR +</strong><span>presença internacional</span></div>
            </div>
            <WhatsAppButton className="btn btn-primary btn-lg">Conhecer a Maxitec <Icon name="arrow" /></WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="conversion" id="contato">
        <div className="container conversion-grid">
          <div className="conversion-copy">
            <span className="eyebrow">VAMOS MELHORAR SUA IMPRESSÃO?</span>
            <h2>Descubra qual solução faz sentido para <span>sua operação.</span></h2>
            <p>Fale com a equipe Maxitec. Entendemos seu processo, sua necessidade e indicamos o equipamento mais adequado.</p>
            <div className="contact-details">
              <div><Icon name="phone" /><span><b>WhatsApp comercial</b>(15) 99749-1884</span></div>
              <div><Icon name="map" /><span><b>Fabricação em Tatuí - SP</b>Atendimento para todo o Brasil</span></div>
              <div><Icon name="clock" /><span><b>Horário comercial</b>Segunda a sexta</span></div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <Image src="/media/logo-maxitec.webp" width={170} height={62} alt="Maxitec" />
          <p>Tecnologia para inspeção de impressão em embalagens, rótulos e adesivos flexíveis.</p>
          <div className="footer-links"><a href="#solucoes">Soluções</a><a href="#sobre">Sobre</a><a href="https://www.instagram.com/maxitec.br/" target="_blank" rel="noreferrer">Instagram</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Maxitec. Todos os direitos reservados.</span><span>Tatuí — São Paulo, Brasil</span></div>
      </footer>

      <WhatsAppButton className="whatsapp-float" message="Olá! Vim pelo site da Maxitec e gostaria de falar com um especialista."><Icon name="message" /><span>Fale conosco</span></WhatsAppButton>
    </main>
  );
}
