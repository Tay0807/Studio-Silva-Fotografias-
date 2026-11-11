import React, { useState } from 'react';

interface AdminDashboardProps {
  onNavigateToGallery: () => void;
  onNavigateToPublicSite: () => void;
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onNavigateToGallery,
  onNavigateToPublicSite,
  onLogout,
}) => {
  const [quickUploadOpen, setQuickUploadOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const currentDateFormatted = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

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
            <button className="flex items-center gap-3 px-3 py-2.5 transition-colors bg-secondary-container text-on-secondary-container font-medium rounded-lg w-full text-left cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>Visão Geral</span>
            </button>
            <button
              onClick={onNavigateToGallery}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors w-full text-left cursor-pointer"
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
              onClick={() => showToast('Biografia editorial do fotógrafo em sincronização.')}
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
              onClick={() => showToast('Atalhos rápidos ativos.')}
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
            {/* Top Greeting & Atmosphere Banner */}
            <div className="relative bg-surface-container-low rounded-xl p-8 mb-8 shadow-sm overflow-hidden">
              <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
              <div className="absolute right-36 -bottom-16 w-48 h-48 rounded-full bg-secondary-container/40 blur-2xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface text-on-surface-variant font-label-sm text-label-sm shadow-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Site online &amp; atualizado
                    </span>
                    <span className="text-outline text-body-sm font-body-sm">•</span>
                    <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      {currentDateFormatted}
                    </span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-serif">
                    Olá, Silva. <span className="italic font-quote text-primary font-serif">Bem-vindo de volta!</span>
                  </h2>
                  <p className="font-body-md text-body-md text-secondary mt-2 leading-relaxed">
                    O acervo do estúdio segue preservado e em harmonia. Aqui está a visão das memórias organizadas, publicações ativas e atalhos de curadoria.
                  </p>
                </div>

                {/* Quick Session Timestamp Card */}
                <div className="flex items-center gap-4 bg-surface/90 backdrop-blur-md px-5 py-3.5 rounded-lg shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">calendar_today</span>
                  </div>
                  <div>
                    <span className="block font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
                      Último Ensaio Adicionado
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-medium">
                      Casamento Fazenda Santa Rosa
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Bento Row (4 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {/* Card 1: Total Fotos */}
              <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                    Total do Arquivo
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">photo_library</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-normal font-serif">148</span>
                    <span className="font-label-md text-label-md text-primary font-medium">+12 este mês</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">Fotografias cadastradas</p>
                </div>
              </div>

              {/* Card 2: Categorias */}
              <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                    Categorias Ativas
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">category</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-normal font-serif">08</span>
                    <span className="font-label-md text-label-md text-secondary">seções</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">Organização no portfólio</p>
                </div>
              </div>

              {/* Card 3: Publicadas */}
              <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                    Publicadas
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-normal font-serif">136</span>
                    <span className="font-label-md text-label-md text-secondary">visíveis</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">Exibidas publicamente</p>
                </div>
              </div>

              {/* Card 4: Rascunhos */}
              <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                    Rascunhos &amp; Ocultas
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">draft</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-normal font-serif">12</span>
                    <span className="font-label-md text-label-md text-outline font-medium">aguardando</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">Prontas para curadoria</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-serif">Ações de Curadoria</h3>
                  <p className="font-body-sm text-body-sm text-secondary">Operações frequentes de alimentação do portfólio</p>
                </div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest hidden sm:inline-block font-semibold">
                  Atalhos Diretos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Action 1: Upload em lote */}
                <button
                  onClick={() => setQuickUploadOpen(true)}
                  className="group text-left bg-surface p-5 rounded-xl shadow-sm hover:bg-secondary-container/40 transition-all duration-200 flex flex-col justify-between h-40 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span>
                  </div>
                  <div>
                    <span className="font-label-lg text-label-lg text-on-surface block group-hover:text-primary transition-colors font-semibold">
                      Adicionar Novas Fotos
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary mt-0.5 block">
                      Envio em lote para o arquivo
                    </span>
                  </div>
                </button>

                {/* Action 2: Textos */}
                <button
                  onClick={() => showToast('Módulo de Textos do Site aberto.')}
                  className="group text-left bg-surface p-5 rounded-xl shadow-sm hover:bg-secondary-container/40 transition-all duration-200 flex flex-col justify-between h-40 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">article</span>
                  </div>
                  <div>
                    <span className="font-label-lg text-label-lg text-on-surface block group-hover:text-primary transition-colors font-semibold">
                      Editar Textos do Site
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary mt-0.5 block">
                      Avisos, bio e manifestos
                    </span>
                  </div>
                </button>

                {/* Action 3: Serviços */}
                <button
                  onClick={() => showToast('Módulo de Serviços aberto.')}
                  className="group text-left bg-surface p-5 rounded-xl shadow-sm hover:bg-secondary-container/40 transition-all duration-200 flex flex-col justify-between h-40 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">auto_stories</span>
                  </div>
                  <div>
                    <span className="font-label-lg text-label-lg text-on-surface block group-hover:text-primary transition-colors font-semibold">
                      Gerenciar Serviços
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary mt-0.5 block">
                      Categorias, pacotes e ordem
                    </span>
                  </div>
                </button>

                {/* Action 4: Visualizar Site */}
                <button
                  onClick={onNavigateToPublicSite}
                  className="group text-left bg-surface p-5 rounded-xl shadow-sm hover:bg-secondary-container/40 transition-all duration-200 flex flex-col justify-between h-40 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                  </div>
                  <div>
                    <span className="font-label-lg text-label-lg text-on-surface block group-hover:text-primary transition-colors font-semibold">
                      Visualizar Site Público
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary mt-0.5 block">
                      Conferir visualização ao vivo
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Photographs Strip */}
            <div className="mb-12">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-serif">Fotografias Recentes</h3>
                  <p className="font-body-sm text-body-sm text-secondary">Últimos registros catalogados no acervo digital</p>
                </div>
                <button
                  onClick={onNavigateToGallery}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors group cursor-pointer font-semibold"
                >
                  <span>Gerenciar todas as 148 fotos</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>

              {/* 4 Recent Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Photo 1 */}
                <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col group">
                  <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Casamento na Fazenda"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1fz-Q_P71olpT5bRxf1c6iMhHxT83o_cfmX1hr_6CMjeHIHfqju1q6JwxtXcsiZ0tqyT5hGHBYqsn5wBXNvTkSr4vY6UR8XPWBMF9jYJc4bcuhPMyZjCE0jhXuS5pypgDa2T6IPBIPXEsh8ESvfPQuwzyZ-nZOcMQ4Lrr9Osp0h0bsdzyNH-3oHmdyS8dGP7LHx0voO0cmp-nZeMc0X9ZLfTfH2veMTetdAMGr8EQ"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface/90 backdrop-blur-md text-primary font-label-sm text-label-sm shadow-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Publicado
                      </span>
                    </div>
                    <button
                      onClick={() => showToast('Opções da fotografia "Casamento na Fazenda".')}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Casamentos</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 truncate font-serif">Casamento na Fazenda</h4>
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-2 text-outline font-label-sm text-label-sm">
                      <span>24 Out, 2024</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                        RAW + JPG
                      </span>
                    </div>
                  </div>
                </div>

                {/* Photo 2 */}
                <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col group">
                  <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Batizado Luísa"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5RgWYqNwXerqZzbZyD8riaaee4ZShukzceX0ojCfy2MOmquAx_MuIbz5235OTNP3XjPabNkAxy_WicNitz9YUHp2g7aPghXHx7tpe5uHqjXsBnruZRaOG2RqNbu8ZEKDd0pzSNdlVFnRLBnKgmUT2WyPpEtbLd5YwTrellj8w5zBlaWhQKfhs0pX9TbBY1x7G8sE-_f7GoboC9zacVt8B4XNBEL40M742gyuWrqRs"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface/90 backdrop-blur-md text-primary font-label-sm text-label-sm shadow-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Publicado
                      </span>
                    </div>
                    <button
                      onClick={() => showToast('Opções da fotografia "Batizado Luísa".')}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Batizados</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 truncate font-serif">Batizado Luísa</h4>
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-2 text-outline font-label-sm text-label-sm">
                      <span>22 Out, 2024</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                        Sony A7 IV
                      </span>
                    </div>
                  </div>
                </div>

                {/* Photo 3 */}
                <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col group">
                  <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Formatura Direito"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPjTmRUgC2TozMZ8MjzJ31-CQ5XsEL4GmW_EwGHxxekuyfc0bCMOVPouYJhgbEP2uwiyg8_-Nk3Q_-xTuYEeqR8KMdz_lRtyUxQxlgKWHkyFl30J5x_XtepJi2kpR6XZn0Snwqbd2aQwldrMU5BCHryql-vSFSgts6sACqQ0jAG2N9BIH7cjh-FMDFbex5Td1X0o7MrKGq4MHp6a4dhxtig7YnEjXqXwIKggMaak3n"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface/90 backdrop-blur-md text-outline font-label-sm text-label-sm shadow-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                        Rascunho
                      </span>
                    </div>
                    <button
                      onClick={() => showToast('Opções da fotografia "Formatura Direito".')}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Retratos &amp; Formaturas</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 truncate font-serif">Formatura Direito</h4>
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-2 text-outline font-label-sm text-label-sm">
                      <span>19 Out, 2024</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">visibility_off</span>
                        Oculta
                      </span>
                    </div>
                  </div>
                </div>

                {/* Photo 4 */}
                <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col group">
                  <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Aniversário 1 Ano"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLq7Ts1aC3eSLI47OzrH8pyJEmzrl_hJbzBS-AuiE6x93RhJZk4FNV_tMu_6kOOKWKjR8v-2jwXiDE-dqS6lfIvC6jbnJg9y3FvHwtmrQiJT9868p_4RFv6QbFhft9ZZbCfxNsTGXZVxZDCdROp-LbnDJJOdNacClv5Z059zWDpO_SoctTCG_92rnZJJtD9pSWDElrKAwiafmE17nTNtcuYmjFNRiMu6x503j-ttce"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface/90 backdrop-blur-md text-primary font-label-sm text-label-sm shadow-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Publicado
                      </span>
                    </div>
                    <button
                      onClick={() => showToast('Opções da fotografia "Aniversário 1 Ano".')}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Família &amp; Infância</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 truncate font-serif">Aniversário 1 Ano</h4>
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-2 text-outline font-label-sm text-label-sm">
                      <span>15 Out, 2024</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                        50mm f/1.4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage & Infrastructure Card */}
            <div className="bg-surface-container-low rounded-xl p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-md">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="material-symbols-outlined text-primary text-[20px]">cloud_sync</span>
                    <h4 className="font-label-lg text-label-lg text-on-surface font-semibold">Supabase Media Storage &amp; Backup</h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Armazenamento em nuvem com alta fidelidade de imagem e backup automático a cada carregamento de galeria.
                  </p>
                </div>

                <div className="flex-1 max-w-lg">
                  <div className="flex items-center justify-between font-label-sm text-label-sm mb-2">
                    <span className="text-on-surface font-medium">3.4 GB utilizados</span>
                    <span className="text-secondary">10.0 GB do plano Ateliê</span>
                  </div>
                  <div className="w-full h-2.5 bg-surface rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-primary rounded-full transition-all duration-500 w-[34%]"></div>
                  </div>
                  <div className="flex items-center justify-between text-outline font-label-sm text-label-sm mt-2">
                    <span>66% de espaço disponível</span>
                    <span className="inline-flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      Backup espelhado hoje às 04:00
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => showToast('Todos os 148 arquivos estão sincronizados e espelhados em nuvem.')}
                    className="px-4 py-2.5 rounded-lg bg-surface text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-2 cursor-pointer font-medium"
                  >
                    <span className="material-symbols-outlined text-[18px]">history</span>
                    <span>Logs de Sincronização</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Quick Upload Modal */}
      {quickUploadOpen && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-surface rounded-xl p-8 max-w-xl w-full shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">cloud_upload</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                    Envio de Fotografias em Lote
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Carregue arquivos em alta resolução para curadoria
                  </p>
                </div>
              </div>
              <button
                onClick={() => setQuickUploadOpen(false)}
                className="p-1.5 rounded-lg text-secondary hover:bg-surface-container transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Drag & Drop Zone */}
            <div
              onClick={() => showToast('Selecione os arquivos RAW/JPEG do computador.')}
              className="p-8 rounded-xl bg-surface-container-low text-center flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container transition-colors mb-5"
            >
              <span className="material-symbols-outlined text-[40px] text-primary mb-2">add_photo_alternate</span>
              <span className="font-label-lg text-label-lg text-on-surface font-medium">
                Arraste os arquivos RAW, JPEG ou TIFF aqui
              </span>
              <span className="font-body-sm text-body-sm text-secondary mt-1">
                ou selecione do seu computador (máx. 45MB por imagem)
              </span>
            </div>

            {/* Form selections */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block font-label-md text-label-md text-secondary mb-1.5 font-medium">
                  Atribuir Categoria Inicial
                </label>
                <select className="w-full bg-surface-container-low rounded-lg px-4 py-2.5 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer">
                  <option>Casamentos &amp; Uniões</option>
                  <option>Batizados &amp; Primeiros Anos</option>
                  <option>Família no Campo</option>
                  <option>Gestantes &amp; Maternidade</option>
                  <option>Retratos Atemporais</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input
                  className="rounded text-primary focus:ring-primary h-4 w-4 bg-surface-container-low cursor-pointer"
                  id="direct-publish"
                  type="checkbox"
                />
                <label className="font-body-sm text-body-sm text-on-surface cursor-pointer" htmlFor="direct-publish">
                  Publicar imediatamente após o envio (sem passar por rascunho)
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                onClick={() => setQuickUploadOpen(false)}
                className="px-4 py-2 rounded-lg font-label-md text-label-md text-secondary hover:bg-surface-container transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setQuickUploadOpen(false);
                  showToast('Upload iniciado com sucesso! Arquivos em processamento.');
                }}
                className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm font-semibold cursor-pointer"
              >
                Iniciar Processamento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-inverse-surface text-inverse-on-surface shadow-2xl animate-in slide-in-from-bottom duration-300">
          <span className="material-symbols-outlined text-[20px] text-inverse-primary">check_circle</span>
          <span className="font-body-sm text-body-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
