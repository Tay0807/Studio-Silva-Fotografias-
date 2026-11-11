import React, { useState } from 'react';
import { FAQS } from '../data/photographyData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-[860px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-2">
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#232220] tracking-tight mb-3">
            Tudo o que Você Precisa Saber
          </h2>
          <p className="text-sm text-[#50443c]">
            Respostas transparentes para que sua família chegue ao ensaio com total tranquilidade.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-xl deckle-border transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[#EFEAE1]/30 transition-colors"
                >
                  <span className="text-sm sm:text-base font-serif text-[#232220] font-medium">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#9E7250] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#50443c] leading-relaxed border-t border-[#E5DFD3]/60 bg-[#EFEAE1]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
