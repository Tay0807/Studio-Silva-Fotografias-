import React from 'react';
import { PHOTOGRAPHER_IMAGE } from '../data/photographyData';
import { Heart, Coffee, Sun, Compass } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="p-3 sm:p-4 bg-[#FAF8F5] rounded-xl deckle-border shadow-artisan">
              <div className="rounded-lg overflow-hidden aspect-[1/1] bg-[#EFEAE1]">
                <img
                  src={PHOTOGRAPHER_IMAGE}
                  alt="Taynara Silva, fundadora e fotógrafa do Studio Silva"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3.5 px-2 flex items-center justify-between text-xs text-[#8C827A]">
                <span className="font-serif italic text-sm text-[#363432]">
                  Taynara Silva · Diretora Criativa
                </span>
                <span>Pinheiros · Desde 2012</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9E7250] uppercase mb-2">
              <span>Sobre os Fotógrafos</span>
              <span aria-hidden="true" className="text-[#A69C93]">·</span>
              <span>Nossa Filosofia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#232220] tracking-tight mb-6 [text-wrap:balance]">
              "Acreditamos no tempo lento, no café coado e na beleza do que é genuíno."
            </h2>

            <p className="text-sm sm:text-base text-[#50443c] leading-relaxed mb-4 font-normal">
              O Studio Silva nasceu da convicção de que fotografias de família não deveriam parecer encenações publicitárias. Quando uma criança chega ao nosso espaço, nós não pedimos para ela sorrir; oferecemos um brinquedo de madeira, deixamos que sinta a textura do tapete e ouvimos suas histórias.
            </p>

            <p className="text-sm sm:text-base text-[#50443c] leading-relaxed mb-8 font-normal">
              Ao longo de mais de uma década, aperfeiçoamos um olhar que respeita a luz natural do dia e a verdade de cada ciclo de vida. Cada fotografia entregue carrega o compromisso de se manter comovente daqui a 50 anos, quando os filhos mostrarem o álbum aos seus próprios filhos.
            </p>

            {/* Studio Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E5DFD3]">
              <div className="flex items-start gap-3">
                <Coffee className="w-4 h-4 text-[#9E7250] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#232220] uppercase tracking-wide mb-0.5">
                    Acolhimento & Calma
                  </h4>
                  <p className="text-xs text-[#665d55] leading-relaxed">
                    Sessões sem cronômetro visível para que pais e bebês se sintam em casa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sun className="w-4 h-4 text-[#9E7250] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#232220] uppercase tracking-wide mb-0.5">
                    Luz Natural Soberana
                  </h4>
                  <p className="text-xs text-[#665d55] leading-relaxed">
                    Janelões amplos e filtros suaves que dispensam flashes invasivos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
