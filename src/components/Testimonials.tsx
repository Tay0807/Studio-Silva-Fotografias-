import React from 'react';
import { TESTIMONIALS } from '../data/photographyData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#EFEAE1]/60 border-t border-b border-[#E5DFD3]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-2">
            Histórias Reais
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#232220] tracking-tight mb-3">
            O Testemunho das Famílias
          </h2>
          <p className="text-sm text-[#50443c] leading-relaxed">
            Mais do que fotografias, preservamos o sentimento exato de cada capítulo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF8F5] p-6 sm:p-8 rounded-xl deckle-border shadow-artisan flex flex-col justify-between"
            >
              <div className="mb-6">
                <Quote className="w-6 h-6 text-[#9E7250]/40 mb-4" />
                <p className="font-serif italic text-base sm:text-lg text-[#363432] leading-relaxed [text-wrap:balance]">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD3]/80">
                <div className="text-xs font-semibold text-[#232220]">
                  {t.clientName}
                </div>
                <div className="text-[11px] text-[#8C827A] mt-0.5">
                  {t.sessionType} · {t.city} ({t.year})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
