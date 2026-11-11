import React, { useState } from 'react';

interface AdminGalleryManagementProps {
  onNavigateToDashboard: () => void;
  onNavigateToPublicSite: () => void;
  onLogout: () => void;
}

interface PhotoCardItem {
  id: number;
  title: string;
  category: 'casamentos' | 'batizados' | 'aniversarios' | 'formaturas' | 'ensaios' | 'corporativos';
  categoryLabel: string;
  date: string;
  location: string;
  status: 'published' | 'draft';
  isFeatured: boolean;
  src: string;
  alt: string;
}

const INITIAL_CARDS: PhotoCardItem[] = [
  {
    id: 1,
    title: 'Enlace Helena & Lucas',
    category: 'casamentos',
    categoryLabel: 'Casamentos',
    date: '14 Out 2024',
    location: 'Haras Vila Real, São Paulo',
    status: 'published',
    isFeatured: true,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrl7YcX9Qy57RRFurxYpgiczlNm54bHtTXtVSYXxoJEtiZexhqftJqT4jQuu48iTaKH_fsanuboDKG-nXbdFfAkP6rInvTurSWzDNLjmyDASsFKKQfjddhx3Q06TKva88d_OwAqK_sC-__0o7lQVzPOQ91w0RB257ePxg_4q4wPUb4e1EtjaIeXTMKsTDqXJBfisirEerN4jUFO02fdUM0pEIut6Px2vlFzbFkOhbY',
    alt: 'Enlace Helena & Lucas',
  },
  {
    id: 2,
    title: 'Batismo do Matteo',
    category: 'batizados',
    categoryLabel: 'Batizados',
    date: '28 Set 2024',
    location: 'Paróquia Nossa Senhora da Paz, Ipanema',
    status: 'published',
    isFeatured: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnKdnoG7W1dM9-8vwjkdO4YSm_ZIFQsC_tSCGMLoXSu1BKv5JiFheyVkRvzguuIYOVY3G7Of7bqoldWrkMrZ_tOH4jQ68sv5WsxdUWmKbPaEzcPIiUIj2-f-tPlfaK1T_O9gG60GVvAtixhjCvl7Bu9xI387yNWlwJ05K1PL6IahnY7Fyd8WSIzk7p_Vw_e7xuVobhy0Mlo9ydsi_0zboSf2WDKdLXdyooiTKY9hRE',
    alt: 'Batismo do Matteo',
  },
  {
    id: 3,
    title: 'Maternidade Serena & Clara',
    category: 'ensaios',
    categoryLabel: 'Ensaios',
    date: '19 Set 2024',
    location: 'Estúdio Silva, Galeria Luz Natural',
    status: 'published',
    isFeatured: true,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4NZOV5d2Yi92rECGI5mjCeq7yVaqNq-7Xtak3B-IHouJAI2_eTO3906S-5uU9FxSTUluIvUbOJHk-xCv1OmGuZTmpxVCsaO0XyYdzw6Qqd_aBwjYjOolnJgZ4-MQjDUsBJoj2AMObFo7pgoHcJrCiZAMBEMJ_m97NvpqeBzUzoRfhl9nmsXR2q3hvWq3kx7r7irrPxRwt80_lFJ4Klh5TxCuS5B6DUFWRNn9pv0OK',
    alt: 'Maternidade Serena & Clara',
  },
  {
    id: 4,
    title: '5 Anos da Sofia',
    category: 'aniversarios',
    categoryLabel: 'Aniversários',
    date: '05 Set 2024',
    location: 'Quinta da Colina, Petrópolis',
    status: 'draft',
    isFeatured: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWDYa66wqMYDnX-PNGA_IczlNfhuXbDuvxMk_8e7B5_lGTetCYGXIfv4EFlo-KkL2KfoJ0shFksNTfR29eSUusI5xi-gAVSc4IPP9sOE0DWCOGxMeK7EAZgcw79MFI4_Fy0BzILDNiHKImgf9Od007J0sLFdw2BacNnf5h82kXiqpEdfpLhepijv4SbzPxjHtnTU5AWHg4OvPFNvxIBIvW05xj9PZayJa1D7EasjOR',
    alt: '5 Anos da Sofia',
  },
  {
    id: 5,
    title: 'Formatura Gabriela Mendes',
    category: 'formaturas',
    categoryLabel: 'Formaturas',
    date: '24 Ago 2024',
    location: 'Teatro Municipal, Rio de Janeiro',
    status: 'published',
    isFeatured: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8GRwqd-jlBT3RhNgdh2ppVPC7IY7eCUlFRddGCSrWdwb_CQdUfJKbqErl7EjDmsG3hF_F0WDEgJKN4dSoVEtjlUR55Xbw2CSWSU3cH6bFEtfTo7oaYuPV8mGcfLBw19c48AaGsMd_xmDovLs5BxsTmmPZel6XXaUo53u2CRBp1OoBj7syHY0f4DSOGtw6oVxuM2e2vBNTwrZr5VDvdYt8I8xhcWqfn3Am8eKYQ337',
    alt: 'Formatura Gabriela Mendes',
  },
  {
    id: 6,
    title: 'Ateliê Monolito Arquitetos',
    category: 'corporativos',
    categoryLabel: 'Corporativos',
    date: '11 Ago 2024',
    location: 'Jardim Botânico, Rio de Janeiro',
    status: 'published',
    isFeatured: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsQykTBgNkw4q3M4cC6tKBne2CJS7AQdu2x6xjzmI-6hFNF6x3tD84eVAIgPLNlJr_CE9PeFYJnusmXmaes-jqBi3u_nGUSpInMcXHInNilMFEXETHrPY-FU-uBHL5YM81Kb-0P07EaEstZPhQayHhfMthPciMzV9EmbLEzzaf-IWLTDP9SB2g65zcHrS8ku8o-SvIu31DpLXmnjcfx2oKlGGlhXJF6w35aw4aVpJ5',
    alt: 'Ateliê Monolito Arquitetos',
  },
  {
    id: 7,
    title: 'Bodas Mariana & Vicente',
    category: 'casamentos',
    categoryLabel: 'Casamentos',
    date: '02 Ago 2024',
    location: 'Fazenda Boa Vista, Porto Feliz',
    status: 'published',
    isFeatured: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUxo0YBE7p2U7PyAA8l1sltlEJBSSMIOSYV1EwNYciEzqXCejUWNyD4KVdOfByw1l6nbj3xwYONmUIAnLZUQdd41QH8D75gKuHm6_QS2rQ9oT7KLmvdxCBgA_SRDQ42bFz2apKWn_rZCh4ZRi_ZlCpFSXlTv9pseK3fIuF_1ptIhnMXhKzMPsvhMzOa8491AK_6WVUBTeCFmwjAbYhsRsy2qoORdC6JYihfUXp_7va',
    alt: 'Bodas Mariana & Vicente',
  },
  {
    id: 8,
    title: 'Legado Família Barreto',
    category: 'ensaios',
    categoryLabel: 'Ensaios',
    date: '27 Jul 2024',
    location: 'Casarão Histórico, Vassouras',
    status: 'draft',
    isFeatured: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGmSHglEJqoKKu9VgGGded1pHXE28Jz06KVyFjYyTybVpdsa9g7cy9EtvK5Nsf_WXm8COEorH1jbxUCjPoaDvjUgkxOPod7JQ3CVNUiDbqCeNrflvU0n73JI70f_yIJUMdvx0NOJXBDFdLnabDk6z5Iy7mtjr3DJBsqZapJelTmtDSqD4gR6TsveF2FuS9jxIOkjKy8hebtKEqbFhNjtxBTbd-28LoL_WwiMRl-lQO',
    alt: 'Legado Família Barreto',
  },
];

export const AdminGalleryManagement: React.FC<AdminGalleryManagementProps> = ({
  onNavigateToDashboard,
  onNavigateToPublicSite,
  onLogout,
}) => {
  const [cards, setCards] = useState<PhotoCardItem[]>(INITIAL_CARDS);
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [currentStatus, setCurrentStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('recent');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Modals & toast
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemPendingDeletion, setItemPendingDeletion] = useState<PhotoCardItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Filtered Cards
  const filteredCards = cards.filter((card) => {
    const matchesCat = currentCategory === 'all' || card.category === currentCategory;
    let matchesStatus = true;
    if (currentStatus === 'published') matchesStatus = card.status === 'published';
    if (currentStatus === 'draft') matchesStatus = card.status === 'draft';
    if (currentStatus === 'featured') matchesStatus = card.isFeatured;

    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      card.title.toLowerCase().includes(query) ||
      card.location.toLowerCase().includes(query) ||
      card.category.toLowerCase().includes(query);

    return matchesCat && matchesStatus && matchesSearch;
  });

  // Card Actions
  const toggleVisibility = (id: number) => {
    setCards((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const nextStatus = c.status === 'published' ? 'draft' : 'published';
          showToast(
            nextStatus === 'published'
              ? `"${c.title}" agora está visível no site.`
              : `"${c.title}" foi oculta e salva como rascunho.`
          );
          return { ...c, status: nextStatus };
        }
        return c;
      })
    );
  };

  const toggleFeatured = (id: number) => {
    setCards((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const nextFeatured = !c.isFeatured;
          showToast(
            nextFeatured
              ? `"${c.title}" foi promovida a Destaque de Vitrine.`
              : `"${c.title}" removida dos Destaques.`
          );
          return { ...c, isFeatured: nextFeatured };
        }
        return c;
      })
    );
  };

  const requestDelete = (item: PhotoCardItem) => {
    setItemPendingDeletion(item);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (itemPendingDeletion) {
      setCards((prev) => prev.filter((c) => c.id !== itemPendingDeletion.id));
      setSelectedIds((prev) => prev.filter((id) => id !== itemPendingDeletion.id));
      showToast(`Fotografia "${itemPendingDeletion.title}" excluída com êxito.`);
    }
    setDeleteModalOpen(false);
    setItemPendingDeletion(null);
  };

  const toggleSelectCard = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredCards.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredCards.map((c) => c.id));
    }
  };

  const handleBulkPublish = () => {
    setCards((prev) =>
      prev.map((c) => (selectedIds.includes(c.id) ? { ...c, status: 'published' } : c))
    );
    showToast(`${selectedIds.length} fotografias publicadas no site com sucesso!`);
    setSelectedIds([]);
  };

  const handleBulkFeature = () => {
    setCards((prev) =>
      prev.map((c) => (selectedIds.includes(c.id) ? { ...c, isFeatured: true } : c))
    );
    showToast(`${selectedIds.length} fotografias marcadas como Destaque Vitrine!`);
    setSelectedIds([]);
  };

  const handleBulkDelete = () => {
    setCards((prev) => prev.filter((c) => !selectedIds.includes(c.id)));
    showToast(`${selectedIds.length} fotografias excluídas do acervo.`);
    setSelectedIds([]);
  };

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-40 flex flex-col justify-between py-6 px-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col gap-6">
          <div className="px-3 pt-2">
            <h1 className="font-headline-md text-headline-md text-primary tracking-tight font-serif">Studio Silva</h1>
            <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-1">
              Curadoria &amp; Arquivo
            </p>
          </div>
          <nav className="flex flex-col gap-1">
            <button
              onClick={onNavigateToDashboard}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors w-full text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>Visão Geral</span>
            </button>
            <button
              className="flex items-center gap-3 px-3 py-2.5 transition-colors bg-secondary-container text-on-secondary-container font-medium rounded-lg w-full text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">photo_library</span>
              <span>Galeria de Fotos</span>
            </button>
            <button
              onClick={() => showToast('Módulo de Textos e Conteúdos em sincronização.')}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors w-full text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">article</span>
              <span>Textos e Conteúdos</span>
            </button>
            <button
              onClick={() => showToast('Módulo de Serviços do Ateliê em sincronização.')}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors w-full text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">auto_stories</span>
              <span>Serviços</span>
            </button>
            <button
              onClick={() => showToast('Perfil editorial do fotógrafo aberto para consulta.')}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors w-full text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">person_book</span>
              <span>Sobre o Fotógrafo</span>
            </button>
            <button
              onClick={() => showToast('Configurações gerais do sistema em dia.')}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors w-full text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span>Configurações Gerais</span>
            </button>
          </nav>
        </div>
        <div className="flex flex-col gap-1 pt-4 border-t border-outline-variant/30">
          <button
            onClick={onNavigateToPublicSite}
            className="flex items-center gap-3 px-3 py-2 rounded-lg font-label-md text-label-md text-secondary hover:bg-surface-container-high hover:text-on-surface transition-colors w-full text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            <span>Visualizar Site</span>
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg font-label-md text-label-md text-outline hover:bg-error-container hover:text-on-error-container transition-colors w-full text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="pl-72 flex flex-col min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-30 flex items-center justify-between px-8">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-headline-sm text-on-surface font-serif">Studio Silva</span>
            <span className="text-outline text-body-sm font-body-sm">•</span>
            <span className="font-body-sm text-body-sm text-secondary">Painel Administrativo</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Administrador (Silva)</span>
            </div>
            <button
              onClick={() => showToast('Atalhos de curadoria ativos.')}
              className="flex items-center justify-center p-2 rounded-lg text-secondary hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer"
              title="Atalhos rápidos"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="relative pt-24 bg-background flex-1 w-full px-8 py-8">
          <div className="flex flex-col w-full">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Acervo Institucional
                  </span>
                  <span className="text-outline text-body-sm font-body-sm">•</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">
                    148 Fotos no Acervo
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">
                  Gestão do Catálogo &amp; Vitrine
                </h2>
                <p className="font-body-md text-body-md text-secondary mt-1">
                  Curadoria das fotografias em alta resolução exibidas no site institucional e arquivo histórico de ensaios.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setUploadModalOpen(true)}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary transition-all duration-200 shadow-md group cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                    add_photo_alternate
                  </span>
                  <span className="font-label-lg text-label-lg font-semibold tracking-wide">+ Adicionar Fotos</span>
                </button>
              </div>
            </div>

            {/* Filtration & Tools Hub */}
            <div className="flex flex-col gap-5 p-6 rounded-2xl bg-surface-container-lowest shadow-sm mb-8">
              {/* Search and Dropdowns */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-xl">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                    search
                  </span>
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar por título, cliente, evento ou local..."
                    type="text"
                    className="w-full pl-11 pr-10 py-2.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Order Selector */}
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-secondary text-[18px] pointer-events-none">
                      swap_vert
                    </span>
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="pl-9 pr-8 py-2.5 rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface font-medium hover:bg-surface-container-high transition-colors appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="recent">Mais recentes primeiro</option>
                      <option value="oldest">Mais antigas</option>
                      <option value="custom">Ordem personalizada no site</option>
                      <option value="title">Ordem alfabética (A-Z)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 text-secondary text-[16px] pointer-events-none">
                      expand_more
                    </span>
                  </div>

                  {/* Status Filter */}
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-secondary text-[18px] pointer-events-none">
                      filter_list
                    </span>
                    <select
                      value={currentStatus}
                      onChange={(e) => setCurrentStatus(e.target.value)}
                      className="pl-9 pr-8 py-2.5 rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface font-medium hover:bg-surface-container-high transition-colors appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="all">Todos os status</option>
                      <option value="published">Publicados no site</option>
                      <option value="draft">Rascunhos / Arquivo</option>
                      <option value="featured">Somente Destaques</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 text-secondary text-[16px] pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              {/* Category Pill Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2">
                {[
                  { cat: 'all', label: 'Todas', count: '148' },
                  { cat: 'casamentos', label: 'Casamentos', count: '42' },
                  { cat: 'batizados', label: 'Batizados', count: '24' },
                  { cat: 'aniversarios', label: 'Aniversários', count: '28' },
                  { cat: 'formaturas', label: 'Formaturas', count: '18' },
                  { cat: 'ensaios', label: 'Ensaios', count: '20' },
                  { cat: 'corporativos', label: 'Corporativos', count: '16' },
                ].map((pill) => {
                  const isActive = currentCategory === pill.cat;
                  return (
                    <button
                      key={pill.cat}
                      onClick={() => setCurrentCategory(pill.cat)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-primary text-on-primary font-semibold shadow-sm'
                          : 'bg-surface-container-low text-secondary hover:bg-surface-container-high hover:text-on-surface'
                      }`}
                    >
                      <span>{pill.label}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                          isActive
                            ? 'bg-on-primary/20 text-on-primary'
                            : 'bg-surface-variant text-on-surface-variant'
                        }`}
                      >
                        {pill.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bulk Actions Banner */}
            {selectedIds.length > 0 && (
              <div className="flex items-center justify-between px-6 py-3.5 mb-6 rounded-xl bg-secondary-container text-on-secondary-container shadow-sm animate-in fade-in duration-200">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === filteredCards.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded text-primary focus:ring-primary/30 cursor-pointer accent-primary"
                  />
                  <span className="font-label-md text-label-md font-semibold">
                    {selectedIds.length} fotografias selecionadas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleBulkPublish}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    <span>Publicar em Lote</span>
                  </button>
                  <button
                    onClick={handleBulkFeature}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">star</span>
                    <span>Marcar Destaque</span>
                  </button>
                  <button
                    onClick={handleBulkDelete}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-error-container text-on-error-container font-label-sm text-label-sm hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                    <span>Excluir Seleção</span>
                  </button>
                </div>
              </div>
            )}

            {/* Photo Cards Grid */}
            {filteredCards.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCards.map((card) => {
                  const isSelected = selectedIds.includes(card.id);
                  return (
                    <article
                      key={card.id}
                      className="photo-card group relative flex flex-col rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                        <img
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          src={card.src}
                        />
                        {/* Overlay Badges */}
                        <div className="absolute inset-0 p-3.5 flex flex-col justify-between pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/30">
                          <div className="flex items-center justify-between w-full">
                            {card.isFeatured ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold shadow-md pointer-events-auto">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span>Destaque Vitrine</span>
                              </span>
                            ) : (
                              <span></span>
                            )}
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-sm font-label-sm text-label-sm font-semibold shadow-sm pointer-events-auto ${
                                card.status === 'published'
                                  ? 'bg-surface-container-lowest/90 text-on-surface'
                                  : 'bg-surface-variant/90 text-on-surface-variant'
                              }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  card.status === 'published' ? 'bg-primary-container' : 'bg-outline'
                                }`}
                              ></span>
                              <span>{card.status === 'published' ? 'Publicado' : 'Rascunho'}</span>
                            </span>
                          </div>

                          {/* Select Checkbox bottom left */}
                          <div className="pointer-events-auto">
                            <label className="inline-flex items-center p-1.5 rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm cursor-pointer hover:bg-surface-container-lowest transition-colors">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleSelectCard(card.id)}
                                className="w-4 h-4 rounded accent-primary text-primary cursor-pointer"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                              {card.categoryLabel}
                            </span>
                            <span className="font-label-sm text-label-sm text-secondary">{card.date}</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium leading-snug line-clamp-1 group-hover:text-primary transition-colors font-serif">
                            {card.title}
                          </h3>
                          <p className="font-body-sm text-body-sm text-secondary mt-1 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
                            <span className="truncate">{card.location}</span>
                          </p>
                        </div>

                        {/* Action Bar */}
                        <div className="pt-3.5 border-t border-surface-container flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => showToast(`Editando detalhes de "${card.title}".`)}
                              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface-container-high transition-colors cursor-pointer"
                              title="Editar detalhes"
                            >
                              <span className="material-symbols-outlined text-[19px]">edit</span>
                            </button>
                            <button
                              onClick={() => toggleVisibility(card.id)}
                              className="p-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                              title={card.status === 'published' ? 'Ocultar do site' : 'Publicar no site'}
                            >
                              <span className="material-symbols-outlined text-[19px]">
                                {card.status === 'published' ? 'visibility' : 'visibility_off'}
                              </span>
                            </button>
                            <button
                              onClick={() => toggleFeatured(card.id)}
                              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                                card.isFeatured
                                  ? 'text-primary hover:bg-surface-container-high'
                                  : 'text-outline hover:text-primary hover:bg-surface-container-high'
                              }`}
                              title={card.isFeatured ? 'Remover de Destaque' : 'Marcar como Destaque'}
                            >
                              <span className="material-symbols-outlined text-[19px]">star</span>
                            </button>
                          </div>
                          <button
                            onClick={() => requestDelete(card)}
                            className="p-2 rounded-lg text-outline hover:text-error hover:bg-error-container transition-colors cursor-pointer"
                            title="Excluir fotografia"
                          >
                            <span className="material-symbols-outlined text-[19px]">delete</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              /* Empty state */
              <div className="flex flex-col items-center justify-center py-20 px-6 text-center rounded-2xl bg-surface-container-lowest shadow-sm mt-6">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-4">
                  <span className="material-symbols-outlined text-[32px]">filter_vintage</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                  Nenhuma fotografia encontrada
                </h3>
                <p className="font-body-sm text-body-sm text-secondary max-w-md mt-1 mb-6">
                  Não localizamos registros com os critérios especificados. Experimente redefinir os filtros ou buscar por outro termo.
                </p>
                <button
                  onClick={() => {
                    setCurrentCategory('all');
                    setCurrentStatus('all');
                    setSearchTerm('');
                  }}
                  className="px-5 py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-highest transition-colors cursor-pointer"
                >
                  Limpar todos os filtros
                </button>
              </div>
            )}

            {/* Pagination footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 pb-6 mt-4 border-t border-surface-container">
              <div className="flex items-center gap-2">
                <span className="font-body-sm text-body-sm text-secondary">
                  Exibindo <span className="font-semibold text-on-surface">1</span> a{' '}
                  <span className="font-semibold text-on-surface">{filteredCards.length}</span> de{' '}
                  <span className="font-semibold text-on-surface">148</span> registros
                </span>
                <span className="text-outline text-body-sm font-body-sm mx-2">•</span>
                <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary">
                  <span>Itens por página:</span>
                  <select className="bg-surface-container-low px-2 py-1 rounded text-on-surface font-semibold focus:outline-none cursor-pointer">
                    <option>8</option>
                    <option>16</option>
                    <option>32</option>
                    <option>64</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  disabled
                  className="p-2 rounded-lg text-outline transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="w-9 h-9 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm">
                  1
                </button>
                <button className="w-9 h-9 rounded-lg text-secondary hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md transition-colors">
                  2
                </button>
                <button className="w-9 h-9 rounded-lg text-secondary hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md transition-colors">
                  3
                </button>
                <span className="w-6 text-center text-secondary font-body-sm">…</span>
                <button className="w-9 h-9 rounded-lg text-secondary hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md transition-colors">
                  19
                </button>
                <button className="p-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Upload & Batch Curation Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-surface-container-lowest shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-8 py-6 bg-surface-container-low flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">cloud_upload</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-serif">
                    Upload &amp; Curadoria de Fotos
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-secondary">
                  Adicione originais em alta resolução. Configure títulos e categorias em lote antes de disponibilizar na vitrine pública.
                </p>
              </div>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="p-2 rounded-full text-secondary hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto flex flex-col gap-6">
              {/* Dropzone */}
              <div
                onClick={() => showToast('Seletor de arquivos RAW/JPEG aberto.')}
                className="relative group cursor-pointer flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-outline-variant/60 hover:border-primary bg-surface transition-all duration-200 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300 mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">add_a_photo</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1 font-serif">
                  Arraste fotografias em alta resolução ou <span className="text-primary underline underline-offset-4">clique para selecionar</span>
                </h4>
                <p className="font-body-sm text-body-sm text-secondary max-w-md">
                  Formatos admitidos: <strong>JPG, PNG e WEBP</strong>. Arquivos de até <strong>20MB</strong> cada para preservação de detalhes cromáticos e nitidez de impressão.
                </p>
              </div>

              {/* Batch Settings Form */}
              <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">tune</span>
                    Definições Gerais para a Remessa (Em Lote)
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">Aplicará a todas as fotos abaixo</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5 md:col-span-1">
                    <label className="font-label-md text-label-md text-secondary">Título do Ensaio / Evento</label>
                    <input
                      defaultValue="Ensaio Botânico Primavera"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
                      placeholder="Ex: Casamento Luísa & Thiago"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-1">
                    <label className="font-label-md text-label-md text-secondary">Categoria do Ensaio</label>
                    <div className="relative">
                      <select defaultValue="Ensaios" className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none shadow-sm cursor-pointer">
                        <option>Casamentos</option>
                        <option>Batizados</option>
                        <option>Aniversários</option>
                        <option>Formaturas</option>
                        <option>Ensaios</option>
                        <option>Corporativos</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary text-[16px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end gap-2 md:col-span-1">
                    <label className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest shadow-sm cursor-pointer hover:bg-surface-variant/40 transition-colors">
                      <span className="font-label-md text-label-md text-on-surface font-medium">Publicar imediatamente</span>
                      <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary/30 cursor-pointer accent-primary" type="checkbox" />
                    </label>
                  </div>
                </div>
              </div>

              {/* Queue Items */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Fila de Transferência (3 arquivos selecionados)
                  </span>
                  <span
                    onClick={() => showToast('Fila reiniciada.')}
                    className="font-label-sm text-label-sm text-primary font-semibold cursor-pointer hover:underline"
                  >
                    Limpar fila
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {/* Queue Item 1 */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-lowest shadow-sm gap-4">
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                        <img
                          alt="SILVA_RAW_8923.jpg"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2rRRh5iyO5gNQAFs-nrwlr9zT6pgI2M4zwOE4G3tJZaeQjMuxtbkioQ025NbsCwA5RRTU8mudMkB1ed43ZjQ3Mqw1m5dRLtwTajuh3TO5ZuQQcnYiX_agHRLgAU-TNBXBFZFYe-oibqLjYR3Mp9DCfb8691HXKjb4wauzfTy0F2cIMxYBSJ52hxsXu033JTZ_tDwNYy-gt1GQ138NCHnROFJEmyi3wuNodHPDNnL-"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-md text-label-md font-semibold text-on-surface truncate">SILVA_RAW_8923.jpg</span>
                          <span className="font-label-sm text-label-sm text-primary font-bold">100% Concluído</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all duration-300 w-full"></div>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-label-sm text-label-sm text-secondary">14.2 MB</span>
                          <span className="text-outline text-label-sm">•</span>
                          <span className="font-label-sm text-label-sm text-secondary">Alta Resolução (6000x4000)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Queue Item 2 */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-lowest shadow-sm gap-4">
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                        <img
                          alt="SILVA_RAW_8924.jpg"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuChY_dp4IUICpm7R0Ki-LkxYjf0TDSrlTb8OUefK1KmnKPwJ2C7i44XXdaAHc8oGJB2VqJt98AD_35gWPmZXNvryhOmvkum6oWdspYfwbMSdsWUaD8XTyZHI-c7DvIDFZw60OOY7cPo6rXh0mx5JrqAKA9_7fg2X4BPS91foWwWq_br41-2y1fA299A5m6g2xMxoWCiFLln5EdBeEEmM1DHHLHFbLWm4-SIODyU2QZR"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-md text-label-md font-semibold text-on-surface truncate">SILVA_RAW_8924.jpg</span>
                          <span className="font-label-sm text-label-sm text-primary font-bold">100% Concluído</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all duration-300 w-full"></div>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-label-sm text-label-sm text-secondary">16.8 MB</span>
                          <span className="text-outline text-label-sm">•</span>
                          <span className="font-label-sm text-label-sm text-secondary">Alta Resolução (6000x4000)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Queue Item 3 */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-lowest shadow-sm gap-4">
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden shrink-0 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px] animate-pulse">image</span>
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-md text-label-md font-semibold text-on-surface truncate">SILVA_RAW_8925.jpg</span>
                          <span className="font-label-sm text-label-sm text-secondary font-bold">Processando 78%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                          <div className="h-full bg-primary-container rounded-full transition-all duration-300 w-[78%]"></div>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-label-sm text-label-sm text-secondary">18.1 MB</span>
                          <span className="text-outline text-label-sm">•</span>
                          <span className="font-label-sm text-label-sm text-secondary">Otimizando metadados EXIF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 bg-surface-container-low flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-secondary">
                3 de 3 fotografias validadas com sucesso.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setUploadModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-secondary hover:bg-surface-container-high font-label-md text-label-md transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setUploadModalOpen(false);
                    showToast('Novas fotografias incorporadas ao acervo com sucesso!');
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">done_all</span>
                  <span>Salvar e Incorporar ao Catálogo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && itemPendingDeletion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-surface-container-lowest shadow-2xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">delete_forever</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">Confirmar exclusão</h4>
              <p className="font-body-sm text-body-sm text-secondary mt-1">
                Você tem certeza que deseja remover <strong className="text-on-surface font-semibold">{itemPendingDeletion.title}</strong> da galeria pública? Os arquivos arquivados precisarão ser reinseridos manualmente.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 rounded-lg text-secondary hover:bg-surface-container-high font-label-md text-label-md cursor-pointer"
              >
                Manter fotografia
              </button>
              <button
                onClick={confirmDelete}
                className="px-5 py-2 rounded-lg bg-error text-on-error font-label-md text-label-md font-semibold hover:opacity-95 shadow-sm cursor-pointer"
              >
                Sim, excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Action Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-inverse-surface text-inverse-on-surface shadow-2xl animate-in slide-in-from-bottom duration-300">
          <span className="material-symbols-outlined text-[20px] text-inverse-primary">check_circle</span>
          <span className="font-body-sm text-body-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
