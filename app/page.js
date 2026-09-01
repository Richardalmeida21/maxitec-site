'use client';

import Image from 'next/image';
import { useState } from 'react';

const WHATSAPP_NUMBER = '5515997491884';
const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function Arrow({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function WhatsApp({ size = 19 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.4Z" stroke="currentColor" strokeWidth="1.8"/><path d="M8.4 7.7c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3.1.5-.1.8l-.6.8c-.2.2-.3.4-.1.7.5.9 1.1 1.7 1.9 2.3.8.6 1.7 1.1 2.7 1.4.3.1.5 0 .7-.2l.9-1.1c.2-.3.5-.3.8-.2l1.9.9c.3.1.5.2.6.4.1.2.1 1-.2 1.7-.3.8-1.5 1.5-2.1 1.6-.6.1-1.4.2-4.7-1.2-3.9-1.7-6.4-5.8-6.6-6-.2-.3-1.6-2.1-1.6-4 0-.9.3-1.4.5-1.8Z" fill="currentColor" opacity=".95" transform="scale(.72) translate(4.7 4.2)"/></svg>;
}

function MaxitecMark() {
  return <span className="x-mark" aria-hidden="true"><i/><i/></span>;
}

function LeadForm() {
  const [form, setForm] = useState({ nome: '', empresa: '', segmento: '', necessidade: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá, Maxitec. Vim pelo site e quero falar sobre uma solução para minha operação.\n\nNome: ${form.nome}\nEmpresa: ${form.empresa}\nSegmento: ${form.segmento || 'Não informado'}\nNecessidade: ${form.necessidade || 'Quero entender qual equipamento faz mais sentido.'}`;
    window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer');
  };
  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-kicker">CONTATO DIRETO · SEM INTERMEDIÁRIOS</div>
      <div className="form-row">
        <label>Nome<input required value={form.nome} onChange={(e)=>setForm({...form,nome:e.target.value})} placeholder="Seu nome"/></label>
        <label>Empresa<input required value={form.empresa} onChange={(e)=>setForm({...form,empresa:e.target.value})} placeholder="Sua empresa"/></label>
      </div>
      <label>Segmento<input value={form.segmento} onChange={(e)=>setForm({...form,segmento:e.target.value})} placeholder="Flexografia, rótulos, embalagens..."/></label>
      <label>O que você precisa melhorar?<textarea rows="4" value={form.necessidade} onChange={(e)=>setForm({...form,necessidade:e.target.value})} placeholder="Conte em uma frase o desafio da sua linha de impressão."/></label>
      <button className="cta cta-green form-submit" type="submit"><WhatsApp/> Falar com a Maxitec agora <Arrow/></button>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const generalMessage = 'Olá, Maxitec. Vim pelo site e quero entender qual solução de inspeção é ideal para minha operação.';

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Maxitec - início">
          <Image src="/media/logo-maxitec-transparent.png" alt="Maxitec" width={900} height={230} priority/>
        </a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          <a href="#maxivision" onClick={()=>setMenuOpen(false)}>Maxivision</a>
          <a href="#operacao" onClick={()=>setMenuOpen(false)}>Em operação</a>
          <a href="#maxitec" onClick={()=>setMenuOpen(false)}>A Maxitec</a>
        </nav>
        <a className="header-contact" target="_blank" rel="noreferrer" href={whatsappUrl(generalMessage)}><span>FALAR COM ESPECIALISTA</span><Arrow/></a>
        <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menu"><span/><span/></button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="hero-index"><span>MAXITEC / 2006—2026</span><b>20 ANOS DE ENGENHARIA APLICADA À IMPRESSÃO</b></div>
          <h1>Veja a impressão<br/><em>antes do erro.</em></h1>
          <p>Controle e inspeção industrial para quem não pode descobrir uma falha só no fim da bobina.</p>
          <div className="hero-actions">
            <a className="cta cta-green" target="_blank" rel="noreferrer" href={whatsappUrl(generalMessage)}><WhatsApp/> Quero falar sobre minha máquina <Arrow/></a>
            <a className="text-action" href="#operacao">VER EQUIPAMENTOS EM OPERAÇÃO <Arrow/></a>
          </div>
          <div className="hero-facts">
            <div><strong>20+</strong><span>anos no mercado</span></div>
            <div><strong>BR + EXTERIOR</strong><span>presença instalada</span></div>
            <div><strong>TATUÍ / SP</strong><span>tecnologia nacional</span></div>
          </div>
        </div>

        <div className="hero-media" aria-label="Equipamento Maxitec em operação">
          <video autoPlay muted loop playsInline preload="metadata" poster="/media/maxivision-real.webp">
            <source src="/media/img_1918.mp4" type="video/mp4"/>
          </video>
          <div className="hero-media-shade"/>
          <div className="live-tag"><span/> VÍDEO REAL · LINHA EM OPERAÇÃO</div>
          <div className="media-code">MX / INSPECTION / 001</div>
          <div className="scan-line"/>
        </div>
        <div className="hero-x"><MaxitecMark/></div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>FLEXOGRAFIA</span><i/> <span>RÓTULOS</span><i/> <span>EMBALAGENS FLEXÍVEIS</span><i/> <span>INSPEÇÃO EM TEMPO REAL</span><i/> <span>MENOS PERDAS</span><i/> <span>MAIS CONTROLE</span><i/>
          <span>FLEXOGRAFIA</span><i/> <span>RÓTULOS</span><i/> <span>EMBALAGENS FLEXÍVEIS</span><i/> <span>INSPEÇÃO EM TEMPO REAL</span><i/> <span>MENOS PERDAS</span><i/> <span>MAIS CONTROLE</span><i/>
        </div>
      </div>

      <section className="statement">
        <div className="section-no">01</div>
        <div className="statement-main">
          <span className="kicker">O PROBLEMA NÃO É A VELOCIDADE.</span>
          <h2>É o que passa<br/>rápido demais<br/><em>para o olho ver.</em></h2>
        </div>
        <div className="statement-side">
          <p>Na impressão industrial, alguns segundos podem significar metros de material fora de padrão. A Maxitec transforma movimento em informação visual para o operador agir enquanto ainda dá tempo.</p>
          <div className="statement-rule"><span>DETECTAR</span><Arrow/><span>CORRIGIR</span><Arrow/><span>CONTINUAR</span></div>
        </div>
      </section>

      <section className="product" id="maxivision">
        <div className="product-visual">
          <div className="product-number">01</div>
          <div className="product-frame">
            <Image src="/media/maxivision-real.webp" alt="Maxivision Digital - equipamento real Maxitec" width={1200} height={1365} sizes="(max-width: 900px) 100vw, 55vw"/>
          </div>
          <div className="product-spec spec-a"><b>CÂMERA</b><span>VISÃO DO PROCESSO</span></div>
          <div className="product-spec spec-b"><b>LED</b><span>ILUMINAÇÃO ESTROBOSCÓPICA</span></div>
        </div>
        <div className="product-copy">
          <div className="product-label">MAXIVISION DIGITAL®</div>
          <h2>O processo<br/>na sua frente.<br/><em>Sem adivinhação.</em></h2>
          <p className="product-lead">Sistema de vídeo inspeção desenvolvido para acompanhar a impressão em alta velocidade e dar ao operador uma leitura clara do que está sendo produzido.</p>
          <div className="feature-lines">
            <div><span>01</span><p><b>Visualização em alta velocidade</b> para acompanhar detalhes que o olho não consegue seguir sozinho.</p></div>
            <div><span>02</span><p><b>Iluminação LED estroboscópica</b> para estabilizar visualmente o material durante a produção.</p></div>
            <div><span>03</span><p><b>Construção industrial</b> pensada para rotina contínua no chão de fábrica.</p></div>
          </div>
          <a className="cta cta-blue" target="_blank" rel="noreferrer" href={whatsappUrl('Olá, Maxitec. Quero saber se o Maxivision Digital é compatível com minha máquina e meu processo.')}>
            CONSULTAR COMPATIBILIDADE <Arrow/>
          </a>
        </div>
      </section>

      <section className="operation" id="operacao">
        <div className="operation-head">
          <div><span className="kicker light">SEM MOCKUP. SEM RENDER.</span><h2>É assim que a<br/>Maxitec trabalha<br/><em>na prática.</em></h2></div>
          <p>Os vídeos abaixo são registros reais enviados pela Maxitec. Dê play, veja a linha em movimento e entenda por que inspeção visual precisa acontecer durante a produção.</p>
        </div>

        <div className="video-wall">
          <article className="video-primary">
            <video controls muted loop playsInline preload="metadata" poster="/media/maxivision-real.webp"><source src="/media/img_1918.mp4" type="video/mp4"/></video>
            <div className="video-caption"><span>01 / INSPEÇÃO EM PRODUÇÃO</span><b>Registro real de operação</b></div>
          </article>
          <article className="video-secondary video-a">
            <video controls muted loop playsInline preload="metadata"><source src="/media/img_0771.mp4" type="video/mp4"/></video>
            <div className="video-caption"><span>02 / PROCESSO INDUSTRIAL</span><b>Aplicação em linha</b></div>
          </article>
          <article className="video-secondary video-b">
            <video controls muted loop playsInline preload="metadata"><source src="/media/img_3192.mp4" type="video/mp4"/></video>
            <div className="video-caption"><span>03 / DETALHE DE CAMPO</span><b>Equipamento em uso</b></div>
          </article>
        </div>
      </section>

      <section className="impact">
        <div className="impact-title"><span>O QUE MUDA NO PROCESSO</span><h2>Menos surpresa.<br/>Mais decisão.</h2></div>
        <div className="impact-list">
          <div className="impact-item"><span>01</span><h3>Falha vista cedo</h3><p>Problemas aparecem enquanto a impressão ainda está acontecendo.</p></div>
          <div className="impact-item"><span>02</span><h3>Operador no controle</h3><p>A informação visual fica disponível onde a decisão precisa ser tomada.</p></div>
          <div className="impact-item"><span>03</span><h3>Menos retrabalho</h3><p>Quanto antes o desvio é identificado, menor a chance de acumular perda.</p></div>
          <div className="impact-item"><span>04</span><h3>Padrão mais consistente</h3><p>Inspeção contínua ajuda a manter qualidade ao longo de toda a produção.</p></div>
        </div>
      </section>

      <section className="legacy" id="maxitec">
        <div className="legacy-copy">
          <div className="section-no blue">02</div>
          <span className="kicker">MAXITEC · 20 ANOS</span>
          <h2>Feita aqui.<br/>Rodando<br/><em>muito além daqui.</em></h2>
          <p>A Maxitec construiu presença em diferentes regiões do Brasil e também no exterior, com tecnologia voltada a controle e inspeção industrial.</p>
          <a className="text-action dark" target="_blank" rel="noreferrer" href={whatsappUrl('Olá, Maxitec. Quero conhecer melhor a empresa e as soluções disponíveis para meu processo de impressão.')}>CONHECER A SOLUÇÃO CERTA PARA MIM <Arrow/></a>
        </div>
        <div className="legacy-map">
          <Image src="/media/20-anos-presenca.webp" width={900} height={1270} alt="20 anos Maxitec - presença nacional e internacional" sizes="(max-width: 900px) 100vw, 48vw"/>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-topline"><span>MAXITEC / CONTATO COMERCIAL</span><span>RESPOSTA DIRETA PELO WHATSAPP</span></div>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2>Sua máquina<br/>já está rodando.<br/><em>Vamos enxergar melhor?</em></h2>
            <p>Conte o que você imprime e qual é o seu desafio. A conversa vai direto para a equipe Maxitec no WhatsApp.</p>
            <div className="contact-number">+55 15 99749-1884</div>
          </div>
          <LeadForm/>
        </div>
      </section>

      <footer>
        <div className="footer-logo"><Image src="/media/logo-maxitec-transparent.png" alt="Maxitec" width={900} height={230}/></div>
        <div className="footer-copy">TECNOLOGIA PARA CONTROLE E INSPEÇÃO INDUSTRIAL</div>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/maxitec.br/">INSTAGRAM ↗</a>
        <a target="_blank" rel="noreferrer" href={whatsappUrl(generalMessage)}>WHATSAPP ↗</a>
      </footer>

      <a className="whatsapp-float" target="_blank" rel="noreferrer" href={whatsappUrl(generalMessage)} aria-label="Falar com a Maxitec no WhatsApp"><WhatsApp size={23}/><span>FALE AGORA</span></a>
    </main>
  );
}
