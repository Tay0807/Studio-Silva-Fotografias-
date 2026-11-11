import React, { useState } from 'react';
import { HEIRLOOM_ALBUM_IMAGE, ALBUM_FABRICS, EMBOSSING_TYPES } from '../data/photographyData';
import { Sparkles, BookOpen, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeirloomAlbumsProps {
  onOpenBooking: () => void;
}

export const HeirloomAlbums: React.FC<HeirloomAlbumsProps> = ({ onOpenBooking }) => {
  const [selectedFabric, setSelectedFabric] = useState(ALBUM_FABRICS[0]);
  const [selectedEmbossing, setSelectedEmbossing] = useState(EMBOSSING_TYPES[0]);
  const [engravedText, setEngravedText] = useState('FAMÍLIA ALENCAR');

  return (
    <section id="albuns" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Intro */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9E7250] uppercase mb-2">
            <span>Matéria & Tempo</span>
            <span aria-hidden="true" className="text-[#A69C93]">·</span>
            <span>Encadernação Manual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#232220] tracking-tight mb-4">
            A Nobreza dos Álbuns Feitos à Mão
          </h2>
          <p className="text-base text-[#50443c] leading-relaxed font-normal">
            Acreditamos que a fotografia só atinge seu propósito pleno quando se torna matéria: quando pode ser folheada no colo, sentida pelas pontas dos dedos e transmitida de geração em geração sem depender de telas ou conexões digitais.
          </p>
        </div>

        {/* 2-Column Split: Visual & Craftsmanship narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: Photograph of open album */}
          <div className="lg:col-span-7">
            <div className="p-3 sm:p-4 bg-[#FAF8F5] rounded-xl deckle-border shadow-artisan">
              <div className="rounded-lg overflow-hidden aspect-[4/3] bg-[#EFEAE1]">
                <img
                  src={HEIRLOOM_ALBUM_IMAGE}
                  alt="Álbum fotográfico artesanal aberto com impressões em borda deckle edge"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#8C827A]">
                <span className="font-serif italic text-sm text-[#363432]">
                  Lâminas com abertura 180° panorâmica em papel 100% algodão
                </span>
                <span>Ateliê de Encadernação Silva</span>
              </div>
            </div>

            {/* Archival Attributes */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E5DFD3]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] block mb-1">
                  150+ Anos de Vida
                </span>
                <p className="text-xs text-[#665d55] leading-relaxed">
                  Papel de algodão com reserva alcalina e pH neutro livre de ácido, imune ao amarelamento.
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] block mb-1">
                  Abertura Panorâmica
                </span>
                <p className="text-xs text-[#665d55] leading-relaxed">
                  Lâminas rígidas de montagem lay-flat contínua que não cortam fotos na dobra central.
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] block mb-1">
                  Tipos Móveis Clássicos
                </span>
                <p className="text-xs text-[#665d55] leading-relaxed">
                  Personalização artesanal com tipos em bronze aquecidos para cunhagem indelével na capa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Album Cover Customizer */}
          <div className="lg:col-span-5 bg-[#EFEAE1] p-6 sm:p-8 rounded-xl deckle-border shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#9E7250] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulador de Acabamento</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#232220] mb-2">
              Personalize a Capa do seu Álbum
            </h3>
            <p className="text-xs text-[#665d55] mb-6 leading-relaxed">
              Veja em tempo real como ficará a harmonia entre o tecido nobre e a gravação personalizada com o sobrenome da sua família.
            </p>

            {/* Live Simulated Album Cover */}
            <div
              className="w-full aspect-[4/3] rounded-lg p-6 mb-6 flex flex-col justify-center items-center text-center shadow-md relative transition-all duration-300"
              style={{
                backgroundColor: selectedFabric.colorHex,
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              {/* Spine shadow simulation */}
              <div className="absolute left-4 top-0 bottom-0 w-3 bg-black/10 blur-[2px] pointer-events-none" />

              <div
                className={`transition-all ${
                  selectedEmbossing.id === 'gold'
                    ? 'text-[#f5d77f] [text-shadow:_0_1px_2px_rgba(0,0,0,0.35)]'
                    : selectedEmbossing.id === 'silver'
                    ? 'text-[#e5e7eb] [text-shadow:_0_1px_2px_rgba(0,0,0,0.35)]'
                    : 'text-[#232220]/75 [text-shadow:_0_-1px_1px_rgba(0,0,0,0.4)]'
                }`}
              >
                <div className="text-[10px] tracking-[0.25em] font-sans font-semibold mb-1 opacity-90">
                  ESTÚDIO SILVA · ACERVO FINE ART
                </div>
                <div className="text-lg sm:text-xl font-serif tracking-[0.15em] uppercase font-normal">
                  {engravedText || 'SUA FAMÍLIA'}
                </div>
                <div className="text-[10px] tracking-[0.2em] font-sans mt-2 opacity-80">
                  VOL. I · 2026
                </div>
              </div>
            </div>

            {/* Custom Engraving Input */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-[#665d55] mb-1.5 uppercase tracking-wide">
                Gravação da Capa (Texto Personalizado)
              </label>
              <input
                type="text"
                value={engravedText}
                onChange={(e) => setEngravedText(e.target.value.toUpperCase())}
                placeholder="Ex: FAMÍLIA ALENCAR"
                maxLength={28}
                className="w-full px-3.5 py-2.5 text-xs font-medium text-[#232220] bg-[#FAF8F5] border border-[#A69C93]/50 rounded-lg focus:outline-none focus:border-[#9E7250] focus:ring-1 focus:ring-[#9E7250]/20"
              />
            </div>

            {/* Fabric Swatch Options */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-[#665d55] mb-2 uppercase tracking-wide">
                Tecido da Encadernação
              </label>
              <div className="grid grid-cols-2 gap-2">
                {ALBUM_FABRICS.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                      selectedFabric.id === fabric.id
                        ? 'bg-[#FAF8F5] border-[#9E7250] shadow-xs'
                        : 'bg-[#FAF8F5]/60 border-transparent hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: fabric.colorHex }}
                    />
                    <span className="text-[11px] font-medium text-[#232220] truncate">
                      {fabric.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Embossing Type */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#665d55] mb-2 uppercase tracking-wide">
                Estilo da Tipografia
              </label>
              <div className="flex flex-col gap-1.5">
                {EMBOSSING_TYPES.map((emb) => (
                  <button
                    key={emb.id}
                    onClick={() => setSelectedEmbossing(emb)}
                    className={`flex items-center justify-between px-3 py-2 text-xs rounded-lg border transition-all cursor-pointer ${
                      selectedEmbossing.id === emb.id
                        ? 'bg-[#FAF8F5] border-[#9E7250] text-[#232220] font-medium'
                        : 'bg-[#FAF8F5]/60 border-transparent text-[#665d55] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{emb.name}</span>
                    <span className="text-[10px] text-[#9E7250]">{emb.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 text-xs font-semibold text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Incluir este Álbum em meu Ensaio</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
