import React, { useState } from 'react';
import { COLLECTIONS, ADDONS } from '../data/photographyData';
import { CollectionPackage } from '../types';
import { Check, Plus, Minus, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';

interface CollectionsPricingProps {
  onSelectCollectionAndAddons: (collectionId: string, addonIds: string[]) => void;
}

export const CollectionsPricing: React.FC<CollectionsPricingProps> = ({
  onSelectCollectionAndAddons,
}) => {
  const [selectedCollection, setSelectedCollection] = useState<CollectionPackage>(COLLECTIONS[1]); // Default to 'legado'
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const grandTotal = selectedCollection.price + addonsTotal;
  const installmentAmount = (grandTotal / 6).toFixed(2).replace('.', ',');

  const handleProceedToBooking = (collection: CollectionPackage) => {
    setSelectedCollection(collection);
    onSelectCollectionAndAddons(collection.id, selectedAddonIds);
  };

  return (
    <section id="investimento" className="py-16 sm:py-24 bg-[#EFEAE1]/40 border-t border-[#E5DFD3]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#9E7250] mb-2">
            Investimento & Coleções
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#232220] tracking-tight mb-4">
            Escolha Como Sua História Será Guardada
          </h2>
          <p className="text-sm text-[#50443c] leading-relaxed">
            Sem custos ocultos e sem pressa. Todos os nossos pacotes incluem curadoria individualizada, tratamento refinado de luz e arquivos em resolução máxima.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {COLLECTIONS.map((pkg) => {
            const isFeatured = pkg.id === 'legado';
            const isCurrentSelected = selectedCollection.id === pkg.id;

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedCollection(pkg)}
                className={`flex flex-col justify-between rounded-xl p-6 sm:p-8 transition-all duration-300 cursor-pointer relative ${
                  isFeatured
                    ? 'bg-[#FAF8F5] deckle-border shadow-artisan-hover ring-2 ring-[#9E7250]/40 lg:-translate-y-2'
                    : 'bg-[#FAF8F5] deckle-border shadow-artisan hover:shadow-artisan-hover'
                }`}
              >
                {/* Header info */}
                <div>
                  {pkg.tag && (
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#9E7250] mb-2">
                      {pkg.tag}
                    </div>
                  )}

                  <h3 className="text-2xl font-serif text-[#232220] mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#665d55] mb-6 min-h-[32px]">
                    {pkg.subtitle}
                  </p>

                  {/* Price display with tabular figures */}
                  <div className="mb-6 pb-6 border-b border-[#E5DFD3]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-[#8C827A] font-medium">R$</span>
                      <span className="text-3xl sm:text-4xl font-serif text-[#232220] tabular-nums">
                        {pkg.price.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8C827A] block mt-1">
                      ou até 6x de R$ {(pkg.price / 6).toFixed(2).replace('.', ',')} sem juros
                    </span>
                  </div>

                  {/* Duration & Delivery summary */}
                  <div className="mb-4 space-y-2 text-xs text-[#363432]">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E5DFD3]">
                      <span className="font-semibold text-[#8C827A]">Duração da Sessão</span>
                      <span className="font-medium text-[#232220]">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E5DFD3]">
                      <span className="font-semibold text-[#8C827A]">Fotografias Entregues</span>
                      <span className="font-medium text-[#232220]">{pkg.deliveredPhotos}</span>
                    </div>
                  </div>

                  {/* Information list with hairline dividers (#E5DFD3) and generous vertical padding (1rem 0) with terracotta dot markers */}
                  <div className="divide-y divide-[#E5DFD3] mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="py-3 flex items-start gap-3 text-xs text-[#50443c]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9E7250] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom select button matching 0.75rem 1.75rem padding & 0.5rem radius */}
                <div className="pt-4 border-t border-[#E5DFD3]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProceedToBooking(pkg);
                    }}
                    className={`w-full py-3 px-7 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isCurrentSelected
                        ? 'bg-[#9E7250] text-[#FAF8F5] hover:bg-[#896041] shadow-xs'
                        : 'border border-[#8C827A] text-[#232220] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{isCurrentSelected ? 'Coleção Selecionada' : 'Selecionar Esta Coleção'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Add-ons & Investment Calculator */}
        <div className="bg-[#FAF8F5] rounded-xl p-6 sm:p-10 deckle-border shadow-artisan">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Add-ons checkboxes */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9E7250] uppercase tracking-wider mb-2">
                <span>Personalização do Encomenda</span>
                <span aria-hidden="true" className="text-[#A69C93]">·</span>
                <span>Opcionais Museológicos</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#232220] mb-4">
                Deseja enriquecer a sua coleção?
              </h3>
              <p className="text-xs text-[#665d55] mb-6 leading-relaxed">
                Você pode adicionar peças individuais ao seu pacote agora ou decidir após a visualização da galeria completa tratada.
              </p>

              <div className="space-y-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-[#EFEAE1]/70 border-[#9E7250]'
                          : 'bg-[#FAF8F5] border-[#E5DFD3] hover:bg-[#EFEAE1]/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-[0.25rem] mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                            isChecked
                              ? 'bg-[#9E7250] border-[1.5px] border-[#9E7250] text-[#FAF8F5]'
                              : 'border-[1.5px] border-[#8C827A] bg-[#FAF8F5]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#232220]">
                            {addon.name}
                          </div>
                          <div className="text-[11px] text-[#665d55] leading-relaxed">
                            {addon.description}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs font-serif font-medium text-[#232220] tabular-nums shrink-0 whitespace-nowrap">
                        + R$ {addon.price.toLocaleString('pt-BR')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Real-time Investment Calculation Box */}
            <div className="lg:col-span-5 bg-[#EFEAE1] p-6 sm:p-7 rounded-xl deckle-border">
              <h4 className="text-base font-serif text-[#232220] mb-4 pb-2 border-b border-[#E5DFD3]">
                Resumo do Investimento
              </h4>

              <div className="space-y-2.5 text-xs text-[#50443c] mb-6">
                <div className="flex justify-between items-center">
                  <span>{selectedCollection.name}</span>
                  <span className="font-serif font-medium tabular-nums text-[#232220]">
                    R$ {selectedCollection.price.toLocaleString('pt-BR')}
                  </span>
                </div>

                {selectedAddonIds.map((id) => {
                  const item = ADDONS.find((a) => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between items-center text-[#665d55]">
                      <span className="truncate pr-2">{item.name}</span>
                      <span className="font-serif tabular-nums text-[#232220] shrink-0">
                        + R$ {item.price.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  );
                })}

                <div className="pt-3 border-t border-[#E5DFD3] flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#232220]">Total</span>
                    <span className="block text-[11px] text-[#8C827A]">
                      Em até 6x sem juros de R$ {installmentAmount}
                    </span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-serif text-[#9E7250] tabular-nums font-medium">
                    R$ {grandTotal.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleProceedToBooking(selectedCollection)}
                className="w-full py-3.5 text-xs font-semibold text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Avançar para Agendamento com Este Pacote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-[#8C827A]">
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-[#9E7250]" />
                  <span>Cartão ou PIX com 5% desc.</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#9E7250]" />
                  <span>Reserva 100% segura</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
