import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD3]/80 transition-colors">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-xl sm:text-2xl font-serif tracking-tight text-[#232220] hover:text-[#9E7250] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
        >
          Studio Silva Fotografias
        </button>

        {/* Zone 2: 4-5 Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#665d55]">
          <button
            onClick={() => handleNavClick('portfolio')}
            className="hover:text-[#232220] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Portfólio
          </button>
          <button
            onClick={() => handleNavClick('albuns')}
            className="hover:text-[#232220] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Álbuns & Acervo
          </button>
          <button
            onClick={() => handleNavClick('investimento')}
            className="hover:text-[#232220] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Investimento
          </button>
          <button
            onClick={() => handleNavClick('guia')}
            className="hover:text-[#232220] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Guia de Preparação
          </button>
          <button
            onClick={() => handleNavClick('sobre')}
            className="hover:text-[#232220] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sobre o Ateliê
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="hover:text-[#232220] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Sessão</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="md:hidden p-2 text-[#50443c] hover:text-[#232220] rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5DFD3] bg-[#FAF8F5] px-6 py-5 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#50443c]">
            <button
              onClick={() => handleNavClick('portfolio')}
              className="text-left py-1 hover:text-[#9E7250] transition-colors cursor-pointer"
            >
              Portfólio de Ensaios
            </button>
            <button
              onClick={() => handleNavClick('albuns')}
              className="text-left py-1 hover:text-[#9E7250] transition-colors cursor-pointer"
            >
              Álbuns & Acervo Físico
            </button>
            <button
              onClick={() => handleNavClick('investimento')}
              className="text-left py-1 hover:text-[#9E7250] transition-colors cursor-pointer"
            >
              Coleções & Investimento
            </button>
            <button
              onClick={() => handleNavClick('guia')}
              className="text-left py-1 hover:text-[#9E7250] transition-colors cursor-pointer"
            >
              Guia de Preparação da Sessão
            </button>
            <button
              onClick={() => handleNavClick('sobre')}
              className="text-left py-1 hover:text-[#9E7250] transition-colors cursor-pointer"
            >
              Sobre Taynara & Lucas
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-1 hover:text-[#9E7250] transition-colors cursor-pointer"
            >
              Perguntas Frequentes
            </button>
            <div className="pt-2 border-t border-[#E5DFD3]/60">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Sessão Afetiva</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
