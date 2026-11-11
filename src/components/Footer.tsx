import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E5DFD3] pt-16 pb-12 text-[#50443c]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#E5DFD3]">
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-serif text-[#232220] tracking-tight mb-3">
              Studio Silva Fotografias
            </h3>
            <p className="text-xs text-[#665d55] leading-relaxed max-w-sm mb-6 font-normal">
              Um ateliê fotográfico dedicado à preservação tangível de histórias de família. Com luz natural, papel algodão e encadernação manual, criamos relíquias para atravessar séculos.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#9E7250] font-medium">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Rua dos Pinheiros, Pinheiros · São Paulo - SP</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#232220] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#665d55]">
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#9E7250] transition-colors cursor-pointer"
                >
                  Portfólio de Ensaios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('albuns')}
                  className="hover:text-[#9E7250] transition-colors cursor-pointer"
                >
                  Álbuns & Acervo Físico
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('investimento')}
                  className="hover:text-[#9E7250] transition-colors cursor-pointer"
                >
                  Coleções & Investimento
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guia')}
                  className="hover:text-[#9E7250] transition-colors cursor-pointer"
                >
                  Guia de Preparação da Sessão
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-[#9E7250] transition-colors cursor-pointer"
                >
                  Sobre os Fotógrafos
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#9E7250] transition-colors font-medium text-[#9E7250] cursor-pointer"
                >
                  Agendar Sessão
                </button>
              </li>
            </ul>
          </div>

          {/* Working hours & Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#232220] mb-4">
              Atendimento Privativo
            </h4>
            <div className="space-y-2 text-xs text-[#665d55] mb-5">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#9E7250] shrink-0" />
                <span>Terça a Sábado · 08h30 às 18h00 (Com hora marcada)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#9E7250] shrink-0" />
                <span>(11) 99842-1200 · WhatsApp Oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9E7250] shrink-0" />
                <span>contato@studiosilvafotografias.com.br</span>
              </div>
            </div>

            <a
              href="https://wa.me/5511998421200"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#232220] border border-[#8C827A] hover:bg-[#EFEAE1] rounded-lg transition-colors"
            >
              <span>Falar com Nossa Concierge</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C827A]">
          <p>© 2026 Studio Silva Fotografias. Todos os direitos reservados.</p>
          <p className="font-serif italic text-xs text-[#50443c]">
            Fotografia afetiva, luz natural e respeito à infância.
          </p>
        </div>
      </div>
    </footer>
  );
};
