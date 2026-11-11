import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/photographyData';
import { Category, PortfolioItem } from '../types';
import { X, Camera, Sparkles, Layers, SlidersHorizontal, Calendar } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectSessionForBooking: (sessionType: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectSessionForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'Todas as Séries' },
    { id: 'familia', label: 'Ensaio Família' },
    { id: 'gestante', label: 'Gestante' },
    { id: 'bebe', label: 'Bebê & Infância' },
    { id: 'batizado', label: 'Batizado' },
    { id: 'retrato', label: 'Retrato Atemporal' },
    { id: 'albuns', label: 'Álbuns & Acervo' },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-[#EFEAE1]/50 border-t border-b border-[#E5DFD3]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-2">
              Curadoria de Imagens
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#232220] tracking-tight">
              Séries Fotográficas Selecionadas
            </h2>
          </div>
          <p className="text-sm text-[#50443c] max-w-md font-normal leading-relaxed">
            Cada ensaio é um livro aberto. Registramos gestos despretensiosos, toques sutis e a genuína conexão entre aqueles que se amam.
          </p>
        </div>

        {/* Functional Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-[#FAF8F5] rounded-xl deckle-border w-fit shadow-xs">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#9E7250] text-[#FAF8F5] shadow-xs'
                    : 'text-[#665d55] hover:text-[#232220] hover:bg-[#EFEAE1]/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Photo Gallery Grid with exact Card & Image Frames specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer bg-[#EFEAE1] rounded-2xl p-6 border border-[#E5DFD3] shadow-artisan hover:shadow-artisan-hover transition-all duration-300"
            >
              {/* Framed Photographic Presentation: Inset paper margin (0.75rem of #FAF8F5) */}
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E5DFD3]/80 mb-5 shadow-xs">
                <div className="overflow-hidden rounded-lg aspect-[4/3] bg-[#EFEAE1] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#232220]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#FAF8F5]/95 backdrop-blur-xs text-xs font-semibold text-[#232220] rounded-lg shadow-sm">
                      Examinar Ficha do Acervo
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Metadata */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs text-[#8C827A]">
                  <span className="font-semibold text-[#9E7250]">{item.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="text-xl font-serif text-[#232220] group-hover:text-[#9E7250] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#50443c] line-clamp-2 leading-relaxed">
                  {item.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Archival Placard Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#1c1b1a]/85 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto deckle-border shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-xs z-10 px-6 py-4 border-b border-[#E5DFD3] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9E7250] uppercase tracking-wider">
                <span>{selectedPhoto.categoryLabel}</span>
                <span aria-hidden="true" className="text-[#A69C93]">·</span>
                <span>Registro Oficial de Acervo</span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 text-[#50443c] hover:text-[#232220] rounded-lg hover:bg-[#EFEAE1] transition-colors"
                aria-label="Fechar ficha"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Framed Image */}
              <div className="p-3 bg-[#FAF8F5] rounded-lg deckle-border shadow-sm">
                <div className="rounded overflow-hidden max-h-[500px] bg-[#EFEAE1] flex items-center justify-center">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain max-h-[500px]"
                  />
                </div>
              </div>

              {/* Title & Story */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#232220] mb-3">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm sm:text-base text-[#50443c] leading-relaxed mb-6 font-normal">
                  {selectedPhoto.story}
                </p>
              </div>

              {/* Technical Archival & EXIF Details */}
              <div className="p-4 sm:p-5 bg-[#EFEAE1] rounded-xl deckle-border">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#232220] mb-3 uppercase tracking-wider">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#9E7250]" />
                  <span>Metadados Técnicos & Recomendações Museológicas</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-[#8C827A] block mb-0.5">Câmera</span>
                    <span className="font-medium text-[#232220]">{selectedPhoto.exif.camera}</span>
                  </div>
                  <div>
                    <span className="text-[#8C827A] block mb-0.5">Lente</span>
                    <span className="font-medium text-[#232220]">{selectedPhoto.exif.lens}</span>
                  </div>
                  <div>
                    <span className="text-[#8C827A] block mb-0.5">Abertura / ISO</span>
                    <span className="font-medium text-[#232220]">{selectedPhoto.exif.aperture} · ISO {selectedPhoto.exif.iso}</span>
                  </div>
                  <div>
                    <span className="text-[#8C827A] block mb-0.5">Iluminação</span>
                    <span className="font-medium text-[#232220]">{selectedPhoto.lighting}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#8C827A] block mb-0.5">Papel de Impressão Homologado</span>
                    <span className="font-medium text-[#9E7250]">{selectedPhoto.exif.recommendedPaper}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-[#8C827A]">
                  Disponível para reprodução em álbum artesanal e ampliações fine art.
                </div>
                <button
                  onClick={() => {
                    const type = selectedPhoto.category === 'familia' ? 'Ensaio Família' :
                                 selectedPhoto.category === 'gestante' ? 'Gestante' :
                                 selectedPhoto.category === 'bebe' ? 'Bebê & Infância' : 'Retrato Atemporal';
                    onSelectSessionForBooking(type);
                    setSelectedPhoto(null);
                  }}
                  className="px-6 py-3 text-xs font-semibold text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Quero um Ensaio Nessa Atmosfera</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
