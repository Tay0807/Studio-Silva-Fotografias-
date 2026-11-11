import React, { useState, useEffect } from 'react';

interface PublicLandingPageProps {
  onNavigateToAdmin: () => void;
}

interface PortfolioItem {
  id: number;
  title: string;
  category: 'aniversarios' | 'religiosos' | 'casamentos' | 'formaturas' | 'ensaios' | 'corporativos';
  categoryLabel: string;
  caption: string;
  src: string;
  aspect: string;
  colSpan?: string;
}

const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: 'O abraço no entardecer',
    category: 'casamentos',
    categoryLabel: 'Casamentos',
    caption: 'Casamento ao ar livre em Penápolis • Afeto genuíno e luz de outono',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIYECz69mmEB5HTe8lzU9UwWGTs5poQA4WtG9aunXoAv153Se3TgV_wYLYpMslW3grtAvGO1xN8cl7Z4eJJi88KnM6DErYj5YpqV_eOKvYesj5xHZp-Jx0Dvj9K7LNzdQusNLK_vr903eBmkv3G0bDUMmh9l6YcTIVt8xMHKNqQuDkxrChljl7NaLg0im6vUrx5YIxv5wuG8cfosKQVP5YYSLdV-sOMO9A95goAsTP',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'A serenidade da água benta',
    category: 'religiosos',
    categoryLabel: 'Eventos Religiosos',
    caption: 'Batizado na Igreja Matriz de Penápolis • Emoção dos pais e padrinhos',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJHzrJCpmrzU_rJYf5lKUJzY-_imh44rmyoTfJgt4TPCHeU8q3EHGua5kKD-BzoJi9dIfVMSQxv_92gbPmHBzkHP5AQa6Z_Ypww2gLH5lDCVkAoTngmLppIUKC8A67t8_dxtB0B5O6cbnUV50IhLydiBywwT7Wu6Y1rLMLRP1F9mhQnovm7Mp-b82CI2zPugBKY7kmaf6f_3HC433fpPTBQ9bo8Py-ub2iq4YQL5ci',
    aspect: 'aspect-[3/2]',
    colSpan: 'sm:col-span-2 lg:col-span-1',
  },
  {
    id: 3,
    title: 'O sorriso do primeiro ano',
    category: 'aniversarios',
    categoryLabel: 'Aniversários',
    caption: 'Aniversário de 1 ano em família • Espontaneidade e pureza infantil',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWt86Zv4HzhWtMwyKIvmPEgivP3D5yJABK71vKsU2XapaUN5nG2q4OMn5dzGr73nURxwETBqDkiToKSWCMfCxLefYdezUBZxqm0Xu9ovdEckCTG3T_K5dnqR1F2vNmmd7MaObev88gSdexGRilXyIgUUnmxL3UZiaq1ezg-acwxd5enkEv5_53rDjtDy8e8kWPEgKAYtXFaQs1fCqUXCtgoLcqMPWUHWvi30XFIxp',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 4,
    title: 'O salto da vitória',
    category: 'formaturas',
    categoryLabel: 'Formaturas',
    caption: 'Colação de grau de Enfermagem • Emoção compartilhada e alegria incontida',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM527UO3D4M4xPKZ6K0jta3cFMvwO67xGE5Oq3Dg7SZQPQ0LmKVEiocTfA9zlMEqVP6qAXsl8TRJnJ87KmHUwhNYb-SraSvGFZhqHy3he_QgVd2984jppsPQlFFe14PgyFy6yaaCqg5gDa_27HG7PQi-L_xbaLMnldzK4_l-EtdHbV3C0kiISy4ocvGsOjvJaoJkGFyTn33z0thw04otZ8-vdz-FYhdE9HhffdZJcJ',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 5,
    title: 'A espera mais doce',
    category: 'ensaios',
    categoryLabel: 'Ensaios',
    caption: 'Ensaio de Gestante em campo aberto • Tons terrosos e conexão pura',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVR-P76ulPpadHi5WlQUdYvbeT0Hx4SJfrhFzwW7jG81KxetWyjSNCKSkXWUfgFWxAOAvwU1sdrUUlUwelXGbyKHAcjWpe-NmW9gXofe-MtuLirlGLskUnxL-gZcu3W8exrZq4rU4x7V9rFpkJcawfqPdv5f7NlR27R3ZIDFjFpgjvM26m134lLoJIbysPp2HKngMBXOyel-XwEz53TR48m_62wz5GPBlGPDHMqtXQ',
    aspect: 'aspect-[3/2]',
    colSpan: 'sm:col-span-2 lg:col-span-1',
  },
  {
    id: 6,
    title: 'Diálogo e liderança',
    category: 'corporativos',
    categoryLabel: 'Corporativos',
    caption: 'Confraternização e Premiação Anual • Registro institucional com discrição',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz-ctGO-l1125mPLb8qaGzqBfkQoRQF142bG5GRWOnPWv8eP6W-kgUJAgZirqyeAjsjOj3L9ZadHoi04Pkr2K57bZ3k2t4x_hVVYEA08wuYgQ9jmHZ2-E97-ABofN33K3Bk3hBJON6sCQ5fXtutaF1hxnSvATo97PMMQ5lbqw0OHxCjnAmqXxRfmlyql-N9AEi0v5cCTPG7T1LRPMcjk1ZOotd3aXTTS7fpl-iFH6N',
    aspect: 'aspect-[3/4]',
  },
];

export const PublicLandingPage: React.FC<PublicLandingPageProps> = ({ onNavigateToAdmin }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const filteredItems = selectedFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredItems.length]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen relative selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-surface/90 backdrop-blur-md shadow-[0_1px_12px_rgba(54,52,50,0.05)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('inicio')}
              className="flex items-center gap-3 transition-opacity hover:opacity-90 text-left cursor-pointer"
            >
              <img
                alt="Logo Studio Silva Fotografias"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida/ALJJyrAgXM-YZycf2bjnPTbpPYRmdNToDjaTLV4PWAuurgmWRrn0xpvC2VDcbOQKtbJxz0isJo7-14YtzpvpvXzEmpSQQr1SayRT2WTpDWnguzoRK0dGi4225MDdkgQ3ZgqNJj93WsvXhsCByTYI-8tGUg5Q2j_Wm5zrKQD5tDkEfFpbZjwb3yO2uDAS8tyEj81FFGZH_5uP4Zez0liPzCsh7S4HnvTAAd4D0fgiQABn5mIBPw"
              />
              <span className="hidden sm:inline font-headline-sm text-headline-sm text-on-surface tracking-tight font-serif">
                Studio Silva
              </span>
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo('inicio')}
              className={`font-label-lg transition-colors cursor-pointer ${
                activeSection === 'inicio' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollTo('servicos')}
              className={`font-label-lg transition-colors cursor-pointer ${
                activeSection === 'servicos' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className={`font-label-lg transition-colors cursor-pointer ${
                activeSection === 'portfolio' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollTo('sobre')}
              className={`font-label-lg transition-colors cursor-pointer ${
                activeSection === 'sobre' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollTo('contato')}
              className={`font-label-lg transition-colors cursor-pointer ${
                activeSection === 'contato' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Contato
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors shadow-[0_2px_8px_rgba(123,83,52,0.18)]"
              href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Conheci%20o%20Studio%20Silva%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20evento."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="hidden sm:inline">Solicitar orçamento</span>
            </a>

            {/* Admin entry point via person icon */}
            <button
              onClick={onNavigateToAdmin}
              title="Área Administrativa Studio Silva"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer hover:bg-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-on-surface-variant hover:text-on-surface"
              aria-label="Abrir menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-container-low border-b border-outline-variant/30 px-6 py-4 flex flex-col gap-3 shadow-lg">
            <button
              onClick={() => scrollTo('inicio')}
              className="text-left font-label-lg text-on-surface py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollTo('servicos')}
              className="text-left font-label-lg text-on-surface py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="text-left font-label-lg text-on-surface py-2"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollTo('sobre')}
              className="text-left font-label-lg text-on-surface py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollTo('contato')}
              className="text-left font-label-lg text-on-surface py-2"
            >
              Contato
            </button>
            <button
              onClick={onNavigateToAdmin}
              className="text-left font-label-lg text-primary py-2 flex items-center gap-2 border-t border-outline-variant/20 pt-3"
            >
              <span className="material-symbols-outlined text-[18px]">lock</span>
              Painel Administrativo
            </button>
          </div>
        )}
      </header>

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full text-on-surface">
          {/* ========================================== */}
          {/* 1. SEÇÃO HERO / APRESENTAÇÃO (#inicio)     */}
          {/* ========================================== */}
          <section className="relative w-full overflow-hidden bg-surface pb-20 pt-8 lg:pb-32 lg:pt-14" id="inicio">
            {/* Efeito luminoso orgânico e sutil de fundo */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] rounded-full bg-primary-fixed/25 blur-3xl"></div>
            <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-[-150px] w-[450px] h-[450px] rounded-full bg-secondary-container/40 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Bloco de Texto Editorial */}
                <div className="lg:col-span-6 flex flex-col items-start space-y-6">
                  {/* Badge de Localização / Tradição */}
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span>Penápolis &amp; Região • Fotografia com carinho e tradição</span>
                  </div>

                  {/* Título Principal */}
                  <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight font-serif">
                    Cada momento <br className="hidden sm:inline" />
                    <em className="font-normal italic text-primary font-serif">merece ser lembrado.</em>
                  </h1>

                  {/* Subtítulo */}
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                    Registramos histórias, celebrações e momentos especiais para que eles permaneçam vivos na memória de quem você mais ama.
                  </p>

                  {/* Ações (CTAs) */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                    <button
                      onClick={() => scrollTo('portfolio')}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>Conheça nosso trabalho</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                    </button>
                    <a
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-all shadow-sm"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Conheci%20o%20Studio%20Silva%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20evento."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary">chat</span>
                      <span>Fale conosco</span>
                    </a>
                  </div>

                  {/* Métricas de Afeto / Proximidade */}
                  <div className="pt-6 grid grid-cols-3 gap-6 w-full max-w-md border-t border-outline-variant/30">
                    <div>
                      <p className="font-headline-md text-headline-md text-primary font-medium font-serif">100%</p>
                      <p className="font-body-sm text-body-sm text-secondary">Atenção e carinho</p>
                    </div>
                    <div>
                      <p className="font-headline-md text-headline-md text-primary font-medium font-serif">Penápolis</p>
                      <p className="font-body-sm text-body-sm text-secondary">&amp; Cidades vizinhas</p>
                    </div>
                    <div>
                      <p className="font-headline-md text-headline-md text-primary font-medium font-serif">Eterno</p>
                      <p className="font-body-sm text-body-sm text-secondary">Em cada imagem</p>
                    </div>
                  </div>
                </div>

                {/* Bloco de Imagens Editorial com Sobreposição */}
                <div className="lg:col-span-6 relative">
                  {/* Moldura Principal (Fine Art Mat) */}
                  <div className="relative bg-surface-container-low p-3.5 sm:p-5 rounded-2xl shadow-xl">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-surface-container">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        alt="Fotografia calorosa e espontânea em estilo editorial de um casal apaixonado sorrindo sob luz dourada de fim de tarde"
                        referrerPolicy="no-referrer"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5lToi2ZHhACTqfEF0l4waPKo6v1DfI5WoR4-Ef35nCKfCiYdSfUL1L3y-LQbvpKeXucrZyBqdO7sPzfWVVhSeydCsWtmHdKn8q9FrDVugIJu5_hlTpQaINqTUTrhJF526zdnwH579_CTo_eW9hz7_9htpT6jSbODanL84OhlysAdTXp95bJ3jKGfWfpyUHXUeMJscVYvr6A5mFeYQpMxKojg_cR52jusZ4kbYMUSc"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-5 left-5 right-5 text-on-primary-container">
                        <span className="inline-block px-3 py-1 rounded bg-surface/85 backdrop-blur-sm text-primary font-label-sm text-label-sm tracking-wider uppercase mb-1 font-semibold">
                          Celebração de Amor
                        </span>
                        <p className="font-headline-sm text-headline-sm text-surface-container-lowest font-medium drop-shadow-sm font-serif">
                          Olhares que guardam promessas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 2. SEÇÃO SERVIÇOS (#servicos)              */}
          {/* ========================================== */}
          <section className="w-full bg-surface-container-low py-20 lg:py-28 relative" id="servicos">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              {/* Cabeçalho da Seção */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-widest mb-3 font-semibold">
                    <span className="material-symbols-outlined text-[18px]">photo_library</span>
                    <span>Nossa Dedicação</span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-normal font-serif">
                    Momentos que merecem ser <em className="italic text-primary font-serif">registrados.</em>
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
                    Cada celebração carrega uma energia única. Trabalhamos com sensibilidade, discrição e zelo para que você viva o momento enquanto nós cuidamos das lembranças.
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:text-primary-container transition-colors shrink-0 group font-semibold"
                  href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20a%20cobertura%20fotogr%C3%A1fica%20do%20meu%20evento."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Consultar disponibilidade de data</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>

              {/* Grade dos 8 Serviços */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1: Aniversários */}
                <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Festa de aniversário calorosa com criança soprando as velinhas"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0dg_j1EC8chy8Dspwz7Xy1JYyHO0Ine2ytXwyBogdcaxwbUjjGNmbSwhIL6zaqZPN4Hf3fCnogkvxys9KuAcH0Tb6E9CMWWsGTZDWG6Lhycd1Y8F8OLNFc-wo4jCIrG8KJe99-TxmOpYMNicFysHQ5174c3eALoLjTRvLz6wNXphQeOt9YDtqJiCEroS7G7Kqu0FasDhSW4aWHIy--nwVtmCFFZSWXIgB_TXo9jyj"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded text-on-surface font-label-sm text-label-sm font-semibold">01</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-medium font-serif">Aniversários</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Festas infantis e celebrações adultas registradas com toda a alegria, espontaneidade e carinho dos convidados.
                      </p>
                    </div>
                    <a
                      className="mt-4 pt-4 border-t border-surface-container inline-flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20fotografia%20de%20Anivers%C3%A1rio."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Orçamento para aniversário</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>

                {/* Card 2: Batizados e Primeira Comunhão */}
                <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Cerimônia delicada de batizado em igreja histórica"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrZwHbhmpf-0Ayi7kiC8QRfK3wONsA5_U8owc1xhpFez7KdlNFt5385XHGYKYntCwVgPTGJhiBj_WFL4ihEtbRK1FvH0dNHKH5gSpgMJVrhWgHJCQ5bvVCTgIhaiu5hh8-0rM3-6Sqc6RWHo2hRdpXVgOptYkt1s1V24aqhdtSro0_ctUt7PgH_iS8ECxFdduxBst4kG797OmU_6xt3RhDnmZj4bKGI6d7xaq4o8ez"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded text-on-surface font-label-sm text-label-sm font-semibold">02</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-medium font-serif">Batizados &amp; 1ª Comunhão</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        A solenidade e a pureza de momentos de fé e bênção em família guardados com respeito e delicadeza.
                      </p>
                    </div>
                    <a
                      className="mt-4 pt-4 border-t border-surface-container inline-flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Batizado%20ou%20Primeira%20Comunh%C3%A3o."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Registrar este sacramento</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>

                {/* Card 3: Crismas e Celebrações Religiosas */}
                <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Jovem crismando em momento de oração e bênção"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsUBbdCJRvyuuhxtUnMtKubX8Ol3zRjy7vtzbfDCOaO-UF1s9YBytHBHBjgFeX-i92A4-y7-Z9k9ZrJICI-QZsNAgasgzuckEMh3MhvxmR_21X0c86ij8xVYWVYj0u8Umspu2GdgSWLzo7knsmIvemF4Z54OWhZb-IA1-fr9p2XbktNacXp0cEVa7_v_BqtbeDg4sfhsli01Bsdlmd1srGqImhQ8tiAr3vcKhsAR_"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded text-on-surface font-label-sm text-label-sm font-semibold">03</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-medium font-serif">Crismas &amp; Religiosos</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Registros respeitosos de ritos e sacramentos marcantes na vida cristã e comunitária com máxima discrição.
                      </p>
                    </div>
                    <a
                      className="mt-4 pt-4 border-t border-surface-container inline-flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Celebra%C3%A7%C3%A3o%20Religiosa."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Saber mais detalhes</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>

                {/* Card 4: Formaturas */}
                <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Formando e formanda felizes celebrando a conquista do diploma"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfb1Ir2uPHy16jIJ86SI0HH7VarlYyMdqDOwcANGQvTOXLRCbhqg8qMvlZypAKzW6EfO2HFcUneqyCTd0gtiCQsOy0TzrgY6rEvgUK6tq3K52oVLhrX0HIbRK5cTsVLZ9kLn3I92vrYl70Th1dsxtKsRL9pZdVAqtezN4Sv0_poefn0zCKUFQaPmFs8hQ5jUMDcMJe6TrLRnX5uxMK6Nw-uy2wvp-M_12AH6h7iBNv"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded text-on-surface font-label-sm text-label-sm font-semibold">04</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-medium font-serif">Formaturas</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        A vibração da conquista, a colação de grau e a comemoração com amigos e familiares eternizadas com orgulho.
                      </p>
                    </div>
                    <a
                      className="mt-4 pt-4 border-t border-surface-container inline-flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Formatura."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Cobertura de formatura</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>

                {/* Card 5: Casamentos */}
                <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Noivos trocando olhares apaixonados e cúmplices no altar"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4SebXEoVr8BfNQt-Lv_YuE_g6BdnWjA7v6jbRMXST6SFh8KI1YgqrrlVvvHrDk5GgbZAWjxuSx9QVjL5m8xlgRXg9fetwCXxCR2R_oGVCuUs_A6ZxezT_OfaGplWpgP_XY9JFhOgp2SEWGXeDuebjyvUsGT1T8i25joeLb6Sjp_B-KW_XW2Txy4S4Xrec0_qxhRR2puzMvn7VXYTFrdsXcKxSpdfng16HgrFXmOQw"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded text-on-surface font-label-sm text-label-sm font-semibold">05</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-medium font-serif">Casamentos</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        A união, os olhares cúmplices e a emoção do grande dia contados através de imagens sensíveis e atemporais.
                      </p>
                    </div>
                    <a
                      className="mt-4 pt-4 border-t border-surface-container inline-flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Casamento."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Planejar a data do sim</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>

                {/* Card 6: Ensaios Individuais e Familiares */}
                <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Ensaio de família afetuoso ao ar livre na natureza"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgBx4MSZ8lhjVf-8gA8wTRu8u_mAS6qqB-czFNHyzQFLzCOFB2DLfOeBGXM8LO0vEzZt3DZZfD826evGSr61W755EMl5m8BsYaQKDMTJjByyhnSlFtNVPplxkC9GNbMIu-PkHwoiO3PokjJ_niUf3_dDxUGDz5MbK67n-ygFlgY0c1fvTKYDxiIFq7HMQmYdf3Am7E6sZZKS8BfLzLqksixD_2k3xyLalp92d25QgL"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded text-on-surface font-label-sm text-label-sm font-semibold">06</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-medium font-serif">Ensaios &amp; Família</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Sessões ao ar livre ou em locação especial, capturando a essência e o afeto de cada fase da vida.
                      </p>
                    </div>
                    <a
                      className="mt-4 pt-4 border-t border-surface-container inline-flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20Ensaio%20Fotogr%C3%A1fico."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Agendar ensaio</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>

                {/* Card 7: Eventos Corporativos */}
                <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Evento corporativo elegante com palestrante comunicativo"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyrA-PE89C8a-A6ezowc0ZvZumvdSwGqO1qyoTUZDlXCUb9aAmaTM8w65uR9ZESZ0P11VyGfLLn2_LkVJGPI6_1BDIZI4VLcVwGYqd1400bhwVYQ9W1Sirdq0G-f9YzCpyDf18Occ-w-7tOixuNZu2gNLJsZlDrlnHP9G6b3k9sc99rRIWYAQ0xMT7-C36rb-rNYx15N51CE-tpP83NDiV9Vhx4hu_AxWbdC4Z25Cx"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded text-on-surface font-label-sm text-label-sm font-semibold">07</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-medium font-serif">Eventos Corporativos</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Confraternizações, palestras, posses e encontros empresariais com postura profissional e discrição.
                      </p>
                    </div>
                    <a
                      className="mt-4 pt-4 border-t border-surface-container inline-flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Evento%20Corporativo."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Atendimento institucional</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>

                {/* Card 8: Outros Eventos Especiais */}
                <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Celebração calorosa de bodas com casal de idosos"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrStCDzOpNVEdKGD_AdFWFy4PbntcU-pDUnq1EBEwAzcj-mX1IT9WOAAuDr8qUUvXGDdqgMWK3BYOk2bCXINLFzMECBoLQ63DZQkfKqSu8tO5dA_08SHbHATjjzSTX2nEW1DaJYdT7AX7MpXa525Mm1sq2ADNANnEsgUtShyu9jIVUQqazYw3-CgvjiOjTghvGsJYvFads6zEP4m6qKqqQw38owah9nVDFmDEj1tL7"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded text-on-surface font-label-sm text-label-sm font-semibold">08</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-medium font-serif">Outros Especiais</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Bodas, noivados, reuniões de família e qualquer ocasião que signifique amor, união e celebração.
                      </p>
                    </div>
                    <a
                      className="mt-4 pt-4 border-t border-surface-container inline-flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Tenho%20um%20evento%20especial%20e%20gostaria%20de%20um%20or%C3%A7amento."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Conversar sobre meu evento</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 3. SEÇÃO PORTFÓLIO COM FILTROS & LIGHTBOX  */}
          {/* ========================================== */}
          <section className="w-full bg-surface py-20 lg:py-28 relative" id="portfolio">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              {/* Cabeçalho do Portfólio */}
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-primary font-label-md text-label-md uppercase tracking-widest font-semibold block mb-2">
                  Galeria de Memórias
                </span>
                <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-normal font-serif">
                  Um pouco do <em className="italic text-primary font-serif">nosso olhar.</em>
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                  Uma seleção de registros afetivos e comemorações capturadas com verdade e sensibilidade em Penápolis e região.
                </p>
              </div>

              {/* Barra de Filtros Interativa */}
              <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14" role="tablist">
                {[
                  { key: 'all', label: 'Todos' },
                  { key: 'aniversarios', label: 'Aniversários' },
                  { key: 'religiosos', label: 'Eventos Religiosos' },
                  { key: 'casamentos', label: 'Casamentos' },
                  { key: 'formaturas', label: 'Formaturas' },
                  { key: 'ensaios', label: 'Ensaios' },
                  { key: 'corporativos', label: 'Corporativos' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setSelectedFilter(tab.key)}
                    className={`px-5 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      selectedFilter === tab.key
                        ? 'bg-primary text-on-primary shadow-sm font-semibold'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Galeria Grid Editorial */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className={`group relative overflow-hidden rounded-xl bg-surface-container cursor-pointer ${item.aspect} ${
                      item.colSpan || ''
                    } shadow-sm hover:shadow-xl transition-all duration-300`}
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      src={item.src}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-surface">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-semibold">
                        {item.categoryLabel}
                      </span>
                      <h4 className="font-headline-sm text-headline-sm font-medium text-surface-bright mt-1 font-serif">
                        {item.title}
                      </h4>
                      <div className="mt-3 flex items-center gap-1.5 font-label-sm text-label-sm text-surface-container-highest">
                        <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                        <span>Ampliar foto</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rodapé do Portfólio com convite WhatsApp */}
              <div className="mt-14 text-center">
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Gostaria de ver uma galeria completa do tipo de evento que você está organizando?
                </p>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-lg text-label-lg transition-colors font-medium shadow-sm"
                  href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Vi%20o%20portf%C3%B3lio%20e%20gostaria%20de%20ver%20mais%20fotos%20de%20um%20evento%20espec%C3%ADfico."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">collections</span>
                  <span>Pedir amostras completas pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 4. SEÇÃO SOBRE O FOTÓGRAFO (#sobre)        */}
          {/* ========================================== */}
          <section className="w-full bg-surface-container-low py-20 lg:py-28 relative" id="sobre">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Imagem do Fotógrafo */}
                <div className="lg:col-span-5 relative order-2 lg:order-1">
                  <div className="relative bg-surface p-4 rounded-2xl shadow-lg">
                    <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container">
                      <img
                        className="w-full h-full object-cover"
                        alt="Fotógrafo profissional atento e sorridente segurando sua câmera fotográfica"
                        referrerPolicy="no-referrer"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW3mSq-XItGaT1lrsY0dD-DtyAi82ZnA_WCbVCQLBjDstQBidRmkGk7tQ1XPMb-BKTc9HYQxQVI-PAyveQI_4la_900ShQ-vzJjp4H1FwoPADAnd5FxCz97NKzfrzK7tDhGYZvobODogJ8Bn6ax_AgMOscHRDS1zgFLN_R07nwpuOqFSloUqj-yqmSNH2wuuiEdcWjbZUGbb-qwtl4eRg4gyPRY7Ayv835l0mSAVvU"
                      />
                    </div>
                  </div>
                  {/* Carimbo de Tradição Penapolense */}
                  <div className="absolute -bottom-6 -right-4 bg-primary text-on-primary px-5 py-4 rounded-xl shadow-xl max-w-[220px]">
                    <p className="font-headline-sm text-headline-sm font-medium leading-snug font-serif">Studio Silva</p>
                    <p className="font-label-sm text-label-sm text-primary-fixed opacity-90 mt-1">
                      Penápolis • Atendimento próximo, familiar e dedicado
                    </p>
                  </div>
                </div>

                {/* Texto Humanizado e Honesto */}
                <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-widest font-semibold">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    <span>Quem Somos</span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-normal font-serif">
                    Por trás de cada registro, <br />
                    <em className="italic text-primary font-serif">existe um olhar.</em>
                  </h2>
                  <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    <p>
                      Mais do que fotografar eventos, nosso trabalho é registrar momentos que fazem parte da história das pessoas.
                    </p>
                    <p>
                      Cada celebração tem sua importância, cada família tem sua história e cada fotografia é uma maneira de guardar tudo isso.
                    </p>
                    <p>
                      O Studio Silva está presente em diferentes ocasiões, sempre buscando registrar os momentos com atenção, carinho e dedicação.
                    </p>
                  </div>

                  {/* Pilares de Confiança */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-primary">
                        <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                      </div>
                      <div>
                        <h4 className="font-label-lg text-label-lg text-on-surface font-semibold">Cuidado Humano</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Respeito ao tempo e à intimidade da sua família.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-primary">
                        <span className="material-symbols-outlined text-[20px]">verified</span>
                      </div>
                      <div>
                        <h4 className="font-label-lg text-label-lg text-on-surface font-semibold">Entrega Dedicada</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Fotos tratadas uma a uma com luz e cores fiéis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 5. SEÇÃO INSTAGRAM (#instagram)            */}
          {/* ========================================== */}
          <section className="w-full bg-surface py-20 lg:py-28 relative" id="instagram">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
                <div>
                  <span className="text-primary font-label-md text-label-md uppercase tracking-widest font-semibold block mb-2">
                    Dia a Dia &amp; Novidades
                  </span>
                  <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-normal font-serif">
                    Acompanhe nossos <em className="italic text-primary font-serif">registros.</em>
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                    Veja no nosso perfil o dia a dia dos eventos e os novos registros que entregamos com carinho em Penápolis e região.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-colors shadow-sm"
                    href="https://www.instagram.com/studiosilva_fotografias/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px] text-primary">photo_camera</span>
                    <span className="font-bold">@studiosilva_fotografias</span>
                  </a>
                </div>
              </div>

              {/* Feed Grid de 6 Fotos */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  {
                    id: 1,
                    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOBiH6trG-OroXpmAdszRfFeYnzagwYpd3LjaGml0dJaU7EA1IZQmqC4KbzvbO0sfPHsGWBWCQ0q2xQYIldDI8raFoH--QKtI7JIX1KoTuR4bgWP1OBJenFZE1xUaC23xAKqZBVAnv8lAIpRX9WTfFZ3tw10QUmJy5N5m5HsELsNpFPZ7u_2rHr4icmRVoe0Cie7YRAT_4y5VxV2a54OqrZOHEE0MCcIn-FUAZRmgC',
                    alt: 'Foto de criança sorrindo alegremente em festa infantil',
                  },
                  {
                    id: 2,
                    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPWvOUtAJ94qXdkWLCFA1byOEBtQSj54Q-FtQ2jTQEikR4x1QDUPm8nE9U9DgtBrv3qBhsmfqzX1wOZcM8V5UcpnIHHFpyz42G19hLGuSe_C1Gr0yn-R40jfxS6VSpgZ9_1FEaXHXratxMgH4VUyuGR3r3VWPNKohXupSMPNUTbawRXQdRNDitgwT6NyJs5jGz3u_ZSczlYDalZ2V1N1yFnkmBDlTkwNbmmLRgPopg',
                    alt: 'Alianças de casamento sobre livro de orações antigo',
                  },
                  {
                    id: 3,
                    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWFsqvFZuo4Fy5NcRv_ljw-j1rSn7GOoOOaEFenYJmrKuhv4BUIfJNCJ8V1HBaej3WfVVaMNzcUdy1tKFZhcLw5rJQVYzh7Z9-XbjEbAkfMiGIM8q5x1x1Az5QD17JMyezT0GLtJo6jPNKoUDgG8eWx_fi2xBrTaEm7cho2sMtSEosIcRui15oUIeKZ2jMHNENHykwPHvJmxwYf2r2hc2wZTALqKI0MaJePa8zYVq5',
                    alt: 'Menina de primeira comunhão segurando terço',
                  },
                  {
                    id: 4,
                    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3Lh0etL2ILec9oqyj1OW2kzMLpwdelmpBiIIg_kq5X_nL4ebDRRZjeDoG5-WkOdPJgovn833bFaytDu988tTLWKINkwBz9LRGevAhMz1f9xdR5Q51_05Si1uM80y8dJww4xO6ZPCfCIzjuh_p3yLiitt551Y2UR3sSZSfJTWbpKweNJFNmn419P1fnM9nZUjNdqWg12XnrUcsHzuQE7ZYopE_2c_6MK1ltSdFqcGU',
                    alt: 'Família com três gerações rindo na varanda',
                  },
                  {
                    id: 5,
                    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKoYsARln9IApkxyxdWrgGNbVj3_iq_NGGDgwhWTljBrRa0D7hOfQ9eF9YUnxmtmEl5-TKawlE8TaH-BTMmyOEx4Cw0yL2MLmS8m6ynfFMd-Ei7zeoOOCuk1UuqMEpzz5_btpX0xcEihw4_x1l8xulTIxstfGz_8CzU-pyCBSAL7g7zcWbyvbXtgrtq6348rHLodAPmVacV0nZcJvtBlOSFg-ehAQpKzynmBy2eTyR',
                    alt: 'Arranjo floral de recepção de casamento',
                  },
                  {
                    id: 6,
                    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCerRfT9Tg--cckSvhyHX_2Vt_H-lbLlr91SEaPxolvAXS0GvzEVwtDsK_Q5YczJOcIfNPPCJGC3vzJt4qbr-PEoVvfEVdC5hW4XeLaQ0yIEFBAnlFK23uINdUiTPKEVfRgh0nENwu54ai3CJYubkC_G9LeEpFjytMCdaA-OZZ8AJ7QpWNNTDbJNHCC6_2JBXUvEaNrbsk_iLQgGboZSsn_vMXgtDG5H87O42LhG__2',
                    alt: 'Formando abraçando a mãe emocionado',
                  },
                ].map((insta) => (
                  <a
                    key={insta.id}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-sm block"
                    href="https://www.instagram.com/studiosilva_fotografias/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={insta.alt}
                      referrerPolicy="no-referrer"
                      src={insta.src}
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined text-[24px]">favorite</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Botão Central Visitar Instagram */}
              <div className="mt-10 text-center">
                <a
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-all hover:scale-105 shadow-sm font-semibold"
                  href="https://www.instagram.com/studiosilva_fotografias/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">public</span>
                  <span>Visitar Instagram @studiosilva_fotografias</span>
                </a>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 6. SEÇÃO CONTATO E ORÇAMENTO (#contato)    */}
          {/* ========================================== */}
          <section className="w-full bg-surface-container-low py-20 lg:py-28 relative" id="contato">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-primary font-label-md text-label-md uppercase tracking-widest font-semibold block mb-2">
                  Vamos Conversar
                </span>
                <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-normal font-serif">
                  Vamos registrar seu <br />
                  <em className="italic text-primary font-serif">próximo momento especial?</em>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
                  Conte um pouco sobre seu evento diretamente conosco. Será um prazer fazer parte dessa história e guardar cada emoção com carinho.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Card WhatsApp */}
                <div className="bg-surface-container-lowest p-8 sm:p-10 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#f3ebe4] text-primary flex items-center justify-center mb-5">
                      <span className="material-symbols-outlined text-[26px]">chat</span>
                    </div>
                    <span className="font-label-sm text-[11px] uppercase tracking-widest text-secondary font-semibold mb-1.5">
                      CANAL OFICIAL
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-medium mb-1 font-serif">
                      WhatsApp Direto
                    </h3>
                    <p className="font-headline-sm text-headline-sm text-primary font-semibold mb-3 font-serif">
                      Atendimento via WhatsApp
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
                      Retorno rápido para consultas de datas disponíveis, orçamentos personalizados e dúvidas.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all hover:scale-[1.01] active:scale-[0.99] font-medium"
                      href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Conheci%20o%20Studio%20Silva%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20evento."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                      <span>Falar no WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Card Instagram */}
                <div className="bg-surface-container-lowest p-8 sm:p-10 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#f3ebe4] text-primary flex items-center justify-center mb-5">
                      <span className="material-symbols-outlined text-[26px]">photo_camera</span>
                    </div>
                    <span className="font-label-sm text-[11px] uppercase tracking-widest text-secondary font-semibold mb-1.5">
                      PORTFÓLIO EM TEMPO REAL
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-medium mb-1 font-serif">
                      Instagram
                    </h3>
                    <p className="font-headline-sm text-headline-sm text-primary font-semibold mb-3 font-serif">
                      @studiosilva_fotografias
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
                      Acompanhe nossos registros diários, bastidores e publicações recentes dos ensaios e celebrações.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-lg text-label-lg transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm font-medium"
                      href="https://www.instagram.com/studiosilva_fotografias/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-primary text-[20px]">open_in_new</span>
                      <span>Acessar Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center flex items-center justify-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                <span>Penápolis – SP e cidades de toda a região sob agendamento prévio.</span>
              </div>
            </div>
          </section>
        </div>

        {/* ========================================== */}
        {/* LIGHTBOX MODAL FLUTUANTE                   */}
        {/* ========================================== */}
        {lightboxOpen && filteredItems[currentPhotoIndex] && (
          <div
            aria-modal="true"
            className="fixed inset-0 z-50 bg-inverse-surface/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            role="dialog"
            onClick={closeLightbox}
          >
            {/* Botão Fechar */}
            <button
              aria-label="Fechar ampliação"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-surface/20 hover:bg-surface/40 text-surface flex items-center justify-center transition-colors z-20 cursor-pointer"
              onClick={closeLightbox}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            {/* Botão Navegação Anterior */}
            <button
              aria-label="Foto anterior"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface/20 hover:bg-surface/40 text-surface flex items-center justify-center transition-colors z-20 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              type="button"
            >
              <span className="material-symbols-outlined text-[28px]">chevron_left</span>
            </button>

            {/* Botão Navegação Próximo */}
            <button
              aria-label="Próxima foto"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface/20 hover:bg-surface/40 text-surface flex items-center justify-center transition-colors z-20 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              type="button"
            >
              <span className="material-symbols-outlined text-[28px]">chevron_right</span>
            </button>

            {/* Conteúdo Central da Foto Ampliada */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full overflow-hidden rounded-xl bg-surface-container-lowest/10 max-h-[72vh] flex items-center justify-center shadow-2xl">
                <img
                  alt={filteredItems[currentPhotoIndex].title}
                  className="w-auto h-auto max-h-[72vh] max-w-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                  src={filteredItems[currentPhotoIndex].src}
                />
              </div>

              {/* Legenda e Detalhes da Foto */}
              <div className="mt-4 text-center text-surface max-w-xl px-4">
                <span className="text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider block mb-1">
                  {filteredItems[currentPhotoIndex].categoryLabel} ({currentPhotoIndex + 1}/{filteredItems.length})
                </span>
                <h4 className="font-headline-sm text-headline-sm font-medium font-serif">
                  {filteredItems[currentPhotoIndex].title}
                </h4>
                <p className="font-body-sm text-body-sm text-surface-dim mt-1">
                  {filteredItems[currentPhotoIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating WhatsApp Button */}
      <aside className="fixed bottom-6 right-6 z-40 group flex items-center justify-end">
        <div className="mr-3 px-3 py-1.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg whitespace-nowrap">
          Fale no WhatsApp
        </div>
        <a
          aria-label="Fale no WhatsApp"
          className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[0_8px_24px_rgba(123,83,52,0.28)] hover:bg-primary-container transition-transform hover:scale-105 active:scale-95"
          href="https://wa.me/5518991487884?text=Ol%C3%A1!%20Conheci%20o%20Studio%20Silva%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20evento."
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[28px]">forum</span>
        </a>
      </aside>

      {/* Footer */}
      <footer className="w-full bg-surface-container-low text-on-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 flex flex-col gap-4">
              <button
                onClick={() => scrollTo('inicio')}
                className="inline-block text-left cursor-pointer"
              >
                <img
                  alt="Logo Studio Silva Fotografias"
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida/ALJJyrAgXM-YZycf2bjnPTbpPYRmdNToDjaTLV4PWAuurgmWRrn0xpvC2VDcbOQKtbJxz0isJo7-14YtzpvpvXzEmpSQQr1SayRT2WTpDWnguzoRK0dGi4225MDdkgQ3ZgqNJj93WsvXhsCByTYI-8tGUg5Q2j_Wm5zrKQD5tDkEfFpbZjwb3yO2uDAS8tyEj81FFGZH_5uP4Zez0liPzCsh7S4HnvTAAd4D0fgiQABn5mIBPw"
                />
              </button>
              <p className="font-headline-sm text-headline-sm text-primary italic mt-2 font-serif">
                Studio Silva Fotografias
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Registrando histórias com sensibilidade, carinho e tradição em Penápolis e região. Ensaios de família, casamentos, gestantes e momentos que atravessam gerações.
              </p>
            </div>

            <div className="md:col-span-3 flex flex-col gap-4">
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">
                Navegação
              </h4>
              <nav className="flex flex-col gap-2.5">
                <button
                  onClick={() => scrollTo('inicio')}
                  className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollTo('servicos')}
                  className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Serviços Especializados
                </button>
                <button
                  onClick={() => scrollTo('portfolio')}
                  className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Portfólio &amp; Ensaios
                </button>
                <button
                  onClick={() => scrollTo('sobre')}
                  className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Sobre o Estúdio
                </button>
                <button
                  onClick={() => scrollTo('contato')}
                  className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Contato &amp; Reservas
                </button>
                <button
                  onClick={onNavigateToAdmin}
                  className="text-left font-body-sm text-body-sm text-primary hover:underline font-semibold cursor-pointer pt-1"
                >
                  Acesso Administrativo
                </button>
              </nav>
            </div>

            <div className="md:col-span-4 flex flex-col gap-4">
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">
                Atendimento &amp; Localização
              </h4>
              <div className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                  <a className="hover:text-primary transition-colors font-medium" href="https://wa.me/5518991487884" rel="noopener noreferrer" target="_blank">
                    Atendimento via WhatsApp
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">photo_camera</span>
                  <a className="hover:text-primary transition-colors font-medium" href="https://instagram.com/studiosilva_fotografias" rel="noopener noreferrer" target="_blank">
                    @studiosilva_fotografias
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
                  <span>Penápolis – SP e região atendida sob agendamento prévio.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-label-md text-label-md text-secondary border-t border-outline-variant/30">
            <p>© 2025 Studio Silva Fotografias. Todos os direitos reservados.</p>
            <p className="text-on-surface-variant">Penápolis, São Paulo • Arte fotográfica atemporal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
