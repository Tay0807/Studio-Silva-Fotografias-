import React, { useState } from 'react';
import { Sparkles, Sun, Shirt, Clock, Heart, Coffee, Check } from 'lucide-react';

interface PreparationGuideProps {
  onOpenBooking: () => void;
}

export const PreparationGuide: React.FC<PreparationGuideProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'vestuario' | 'criancas' | 'rotina'>('vestuario');

  const steps = [
    {
      roman: 'I',
      title: 'A Harmonização do Vestuário',
      subtitle: 'Cores que abraçam a luz natural e a textura dos papéis de algodão',
      details: [
        'Priorize fibras naturais: linho cru, algodão lavado, tricot leve e sedas rústicas.',
        'Paleta recomendada: tons de areia, marfim, terracota suave, verde-oliva e cinza pedra.',
        'Evite logos grandes, estampas geométricas contrastantes ou tecidos sintéticos reflexivos.',
        'Pés descalços são sempre bem-vindos no ateliê para transmitir aconchego e leveza.',
      ],
    },
    {
      roman: 'II',
      title: 'O Ritmo das Crianças e Bebês',
      subtitle: 'Sem poses forçadas, no compasso do afeto e da curiosidade',
      details: [
        'Planejamos a sessão logo após a soneca matinal ou o lanche, quando a energia está serena.',
        'Traga o brinquedo de madeira predileto, mantinha de apego ou o livro de histórias favorito.',
        'Se o bebê chorar ou pedir colo, nós pausamos imediatamente para amamentar e ninar.',
        'Nunca pedimos para a criança "olhar para a câmera e sorrir"; capturamos seu riso espontâneo.',
      ],
    },
    {
      roman: 'III',
      title: 'A Experiência no Dia do Ensaio',
      subtitle: 'Chegada acolhedora, café coado e tempo desacelerado',
      details: [
        'Pedimos que cheguem 15 minutos antes para uma xícara de café especial e aclimatação calma.',
        'O ambiente do ateliê é climatizado suavemente com luz matinal difusa pelas cortinas.',
        'Músicas acústicas suaves e aromaterapia delicada para acalmar a todos.',
        'Uma sessão que parece uma manhã gostosa de domingo em família.',
      ],
    },
    {
      roman: 'IV',
      title: 'Da Curadoria ao Álbum Tangível',
      subtitle: 'Como suas fotografias se transformam em patrimônio de família',
      details: [
        'Em até 15 dias úteis, você recebe a galeria privativa online para eleger as favoritas.',
        'Nossa equipe diagramadora cria a narrativa visual do seu álbum lâmina por lâmina.',
        'Você aprova cada página digitalmente antes da encadernação artesanal em linho nobre.',
        'Inspeção cuidadosa, perfume de ateliê e entrega em caixa personalizada com fita de algodão.',
      ],
    },
  ];

  return (
    <section id="guia" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E5DFD3]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-2">
              <span>Rito & Preparação</span>
              <span aria-hidden="true" className="text-[#A69C93]">·</span>
              <span>Passo a Passo Afetivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#232220] tracking-tight">
              Como Preparamos o Seu Ensaio
            </h2>
          </div>
          <p className="text-sm text-[#50443c] max-w-md font-normal leading-relaxed">
            Nossa missão é fazer com que o dia da fotografia seja tão memorável e repousante quanto o resultado que você guardará no álbum.
          </p>
        </div>

        {/* Steps with Roman numeral counters and hairline dividers with 1rem 0 padding */}
        <div className="bg-[#EFEAE1] rounded-2xl p-6 sm:p-10 deckle-border shadow-artisan mb-12">
          <div className="divide-y divide-[#E5DFD3]">
            {steps.map((step) => (
              <div
                key={step.roman}
                className="py-6 sm:py-7 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                {/* Roman Counter */}
                <div className="md:col-span-2 flex items-center gap-3">
                  <span className="font-serif text-2xl sm:text-3xl text-[#9E7250] font-normal tracking-wide">
                    {step.roman}.
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C827A] md:hidden">
                    Etapa {step.roman}
                  </span>
                </div>

                {/* Title and subtitle */}
                <div className="md:col-span-4">
                  <h3 className="text-lg sm:text-xl font-serif text-[#232220] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#665d55] leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                {/* Bullets with warm terracotta dot markers */}
                <div className="md:col-span-6 space-y-2.5">
                  {step.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#50443c]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9E7250] shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick action strip */}
        <div className="p-6 sm:p-8 bg-[#FAF8F5] rounded-xl deckle-border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-lg bg-[#EFEAE1] flex items-center justify-center text-[#9E7250] shrink-0">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-serif text-[#232220] mb-0.5">
                Tem dúvidas sobre o que vestir ou como organizar as crianças?
              </h4>
              <p className="text-xs text-[#665d55]">
                Nossa concierge envia um moodboard digital personalizado assim que sua data for reservada.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3 text-xs font-semibold text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all shadow-sm shrink-0 cursor-pointer"
          >
            Reservar Data com Nossa Equipe
          </button>
        </div>
      </div>
    </section>
  );
};
