import React from 'react';
import { HERO_IMAGE } from '../data/photographyData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePortfolio }) => {
  return (
    <section id="hero" className="pt-8 sm:pt-14 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Asymmetrical 7-column / 5-column editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9E7250] uppercase mb-4">
              <span>Memórias de Gerações</span>
              <span aria-hidden="true" className="text-[#A69C93]">·</span>
              <span>Fotografia Afetiva</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] font-serif font-normal text-[#232220] tracking-tight mb-6 [text-wrap:balance]">
              Capturando a poesia silenciosa da sua história familiar.
            </h1>

            <p className="text-base sm:text-lg text-[#50443c] leading-relaxed mb-8 max-w-xl font-normal">
              Com luz natural e sensibilidade editorial, transformamos instantes fugazes em relíquias tangíveis para atravessar as próximas gerações. Sem poses forçadas, no ritmo acolhedor da sua família.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <button
                onClick={onOpenBooking}
                className="py-3 px-7 text-xs font-semibold tracking-wide text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Reservar Sua Sessão</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExplorePortfolio}
                className="py-3 px-7 text-xs font-medium text-[#232220] border border-[#8C827A] hover:bg-[#EFEAE1] rounded-lg transition-colors flex items-center justify-center cursor-pointer"
              >
                Explorar Portfólio
              </button>
            </div>

            {/* Session Badges / Chips specified in design system */}
            <div className="mb-6">
              <div className="text-[11px] font-semibold tracking-wider text-[#8C827A] uppercase mb-2">
                Especialidades do Ateliê:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {['Ensaio Família', 'Gestante', 'Batizado', 'Retrato Atemporal'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-[#FAF8F5] border border-[#E5DFD3] rounded-full text-[11px] font-semibold tracking-wider text-[#8C827A]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Quiet reassurance text */}
            <p className="text-xs text-[#8C827A] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9E7250] shrink-0" />
              <span>Ateliê com luz natural em Pinheiros ou no conforto do seu lar · Atendimento exclusivo</span>
            </p>
          </div>

          {/* Right Column: Inset Matted Archival Frame */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative p-3 sm:p-4 bg-[#FAF8F5] rounded-xl deckle-border shadow-artisan">
              <div className="overflow-hidden rounded-lg aspect-[16/10] sm:aspect-[16/9] relative bg-[#EFEAE1]">
                <img
                  src={HERO_IMAGE}
                  alt="Fotografia afetiva de família em estúdio com luz natural suave"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Museum placard caption */}
              <div className="mt-3.5 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#8C827A]">
                <span className="font-serif italic text-sm text-[#363432]">
                  Família Alencar · Manhã de luz suave no Ateliê
                </span>
                <span className="font-normal tracking-wide">
                  São Paulo · Acervo Permanente
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Archival Milestone Strip - Full width row below hero */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E5DFD3] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-serif text-[#232220] mb-1 tabular-nums">
              14 Anos
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-1">
              De Trajetória
            </div>
            <p className="text-xs text-[#665d55] leading-relaxed">
              Dedicados exclusivamente à preservação de memórias familiares.
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif text-[#232220] mb-1 tabular-nums">
              1.200+
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-1">
              Famílias Registradas
            </div>
            <p className="text-xs text-[#665d55] leading-relaxed">
              Do primeiro ultrassom aos encontros multigeracionais.
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif text-[#232220] mb-1">
              100% Algodão
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-1">
              Papel Archival
            </div>
            <p className="text-xs text-[#665d55] leading-relaxed">
              Impressões Hahnemühle livres de ácido com durabilidade de 150+ anos.
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif text-[#232220] mb-1">
              Luz Natural
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-1">
              Ateliê em Pinheiros
            </div>
            <p className="text-xs text-[#665d55] leading-relaxed">
              Ambiente privativo e silencioso preparado para o conforto dos pequenos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
