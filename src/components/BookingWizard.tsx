import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { COLLECTIONS, ADDONS } from '../data/photographyData';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Sun,
  Home,
  Building2,
} from 'lucide-react';

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCollectionId?: string;
  preselectedAddonIds?: string[];
  preselectedSessionType?: string;
}

const SESSION_TYPES = [
  {
    id: 'familia',
    name: 'Ensaio Família',
    description: 'Espontâneo, acolhedor e focado na conexão real entre pais e filhos.',
    recommendedTiming: 'Manhãs suaves',
  },
  {
    id: 'gestante',
    name: 'Ensaio Gestante',
    description: 'Celebração poética das curvas e da doce espera maternal.',
    recommendedTiming: 'Entre a 28ª e 32ª semana',
  },
  {
    id: 'bebe',
    name: 'Bebê & Infância',
    description: 'Ritmo respeitoso, sem poses forçadas, capturando a curiosidade pura.',
    recommendedTiming: 'Horário após a primeira soneca',
  },
  {
    id: 'retrato',
    name: 'Retrato Atemporal',
    description: 'Sessão individual íntima para marcas pessoais, autores ou memórias.',
    recommendedTiming: 'Luz difusa de estúdio',
  },
];

const LOCATIONS = [
  {
    id: 'atelie',
    name: 'Ateliê Pinheiros (Luz Natural)',
    description: 'Ambiente silencioso, piso de madeira maciça, cortinas de linho e café artesanal.',
    icon: Building2,
  },
  {
    id: 'casa',
    name: 'O Conforto da sua Casa',
    description: 'Estilo documental afetivo no quarto do bebê, na cama dos pais ou no jardim.',
    icon: Home,
  },
  {
    id: 'externa',
    name: 'Ao Ar Livre / Campo ou Parque',
    description: 'Luz dourada do entardecer em fazenda, serra ou parque arborizado.',
    icon: Sun,
  },
];

const AVAILABLE_DATES = [
  { date: '2026-11-21', label: '21 de Novembro (Sábado)', slots: ['08:30 · Manhã Suave', '15:30 · Golden Hour'] },
  { date: '2026-11-22', label: '22 de Novembro (Domingo)', slots: ['09:00 · Manhã Suave', '11:00 · Luz Plena'] },
  { date: '2026-11-27', label: '27 de Novembro (Sexta-feira)', slots: ['10:00 · Manhã Suave', '15:30 · Golden Hour'] },
  { date: '2026-11-28', label: '28 de Novembro (Sábado)', slots: ['08:30 · Manhã Suave', '15:00 · Golden Hour'] },
  { date: '2026-12-05', label: '05 de Dezembro (Sábado)', slots: ['09:00 · Manhã Suave', '15:30 · Golden Hour'] },
];

export const BookingWizard: React.FC<BookingWizardProps> = ({
  isOpen,
  onClose,
  preselectedCollectionId = 'legado',
  preselectedAddonIds = [],
  preselectedSessionType,
}) => {
  const [step, setStep] = useState<number>(1);
  const [sessionType, setSessionType] = useState<string>(
    preselectedSessionType || 'Ensaio Família'
  );
  const [locationPreference, setLocationPreference] = useState<string>(
    'Ateliê Pinheiros (Luz Natural)'
  );
  const [selectedDate, setSelectedDate] = useState<string>(AVAILABLE_DATES[0].label);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(
    AVAILABLE_DATES[0].slots[0]
  );

  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [familyMembers, setFamilyMembers] = useState('');
  const [specialWishes, setSpecialWishes] = useState('');

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const currentCollection =
    COLLECTIONS.find((c) => c.id === preselectedCollectionId) || COLLECTIONS[1];

  const handleNext = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      // Complete booking
      const generatedCode = `ST-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingId(generatedCode);
      setBookingConfirmed(true);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá, Studio Silva! Gostaria de confirmar minha solicitação de agendamento (${bookingId}):\n\n` +
      `• Ensaio: ${sessionType}\n` +
      `• Pacote: ${currentCollection.name}\n` +
      `• Data: ${selectedDate} às ${selectedTimeSlot}\n` +
      `• Local: ${locationPreference}\n` +
      `• Responsável: ${fullName}`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1c1b1a]/85 backdrop-blur-sm p-3 sm:p-6 md:p-10 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] rounded-xl max-w-2xl w-full max-h-[92vh] overflow-y-auto deckle-border shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-xs z-10 px-6 py-4 border-b border-[#E5DFD3] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#9E7250] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento de Ensaio Afetivo</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#50443c] hover:text-[#232220] rounded-lg hover:bg-[#EFEAE1] transition-colors cursor-pointer"
            aria-label="Fechar formulário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator */}
        {!bookingConfirmed && (
          <div className="px-6 sm:px-8 pt-5 pb-2">
            <div className="flex items-center justify-between text-xs text-[#8C827A] mb-2">
              <span>Etapa {step} de 4</span>
              <span className="font-medium text-[#232220]">
                {step === 1 && 'Tipo de Memória'}
                {step === 2 && 'Cenário & Atmosfera'}
                {step === 3 && 'Data & Luz Natural'}
                {step === 4 && 'A História de Vocês'}
              </span>
            </div>
            <div className="w-full bg-[#E5DFD3] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#9E7250] h-full transition-all duration-300 rounded-full"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Body Steps */}
        <div className="p-6 sm:p-8 flex-1">
          {bookingConfirmed ? (
            /* Confirmation Screen */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#9E7250]/15 text-[#9E7250] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="text-xs font-semibold text-[#9E7250] uppercase tracking-wider mb-1">
                Solicitação Recebida com Carinho
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#232220] mb-2">
                Reserva Pré-Confirmada
              </h3>
              <p className="text-xs text-[#8C827A] mb-6">
                Código de Agendamento: <span className="font-semibold text-[#232220]">{bookingId}</span>
              </p>

              <div className="bg-[#EFEAE1] rounded-xl p-5 text-left text-xs space-y-2 mb-6 max-w-lg mx-auto deckle-border">
                <div className="flex justify-between">
                  <span className="text-[#8C827A]">Titular:</span>
                  <span className="font-medium text-[#232220]">{fullName || 'Não informado'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C827A]">Experiência:</span>
                  <span className="font-medium text-[#232220]">{sessionType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C827A]">Coleção:</span>
                  <span className="font-medium text-[#232220]">{currentCollection.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C827A]">Data & Horário:</span>
                  <span className="font-medium text-[#232220]">{selectedDate} às {selectedTimeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C827A]">Local:</span>
                  <span className="font-medium text-[#232220]">{locationPreference}</span>
                </div>
              </div>

              <p className="text-xs text-[#50443c] leading-relaxed max-w-md mx-auto mb-6">
                Nossa produtora entrará em contato pelo seu WhatsApp em até 24 horas para enviar o Guia de Harmonização e tirar qualquer dúvida com total calma.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/5511999998888?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Conversar Agora no WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-medium text-[#232220] border border-[#8C827A] hover:bg-[#EFEAE1] rounded-lg transition-colors cursor-pointer"
                >
                  Concluir & Fechar
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Session Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-[#232220] mb-1">
                    Qual história você deseja eternizar?
                  </h3>
                  <p className="text-xs text-[#665d55] mb-4">
                    Escolha o propósito principal da sua sessão fotográfica.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SESSION_TYPES.map((type) => {
                      const isSelected = sessionType === type.name;
                      return (
                        <div
                          key={type.id}
                          onClick={() => setSessionType(type.name)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#EFEAE1] border-[#9E7250] shadow-xs ring-1 ring-[#9E7250]'
                              : 'bg-[#FAF8F5] border-[#E5DFD3] hover:bg-[#EFEAE1]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-semibold text-[#232220]">{type.name}</h4>
                            <span className="w-3.5 h-3.5 rounded-full border border-[#8C827A] flex items-center justify-center">
                              {isSelected && <span className="w-2 h-2 rounded-full bg-[#9E7250]" />}
                            </span>
                          </div>
                          <p className="text-xs text-[#50443c] leading-relaxed mb-2">
                            {type.description}
                          </p>
                          <span className="text-[10px] text-[#9E7250] font-medium block">
                            {type.recommendedTiming}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Location & Atmosphere */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-[#232220] mb-1">
                    Onde sua família se sente mais em paz?
                  </h3>
                  <p className="text-xs text-[#665d55] mb-4">
                    Priorizamos ambientes silenciosos, seguros e com iluminação natural generosa.
                  </p>

                  <div className="space-y-3">
                    {LOCATIONS.map((loc) => {
                      const Icon = loc.icon;
                      const isSelected = locationPreference === loc.name;
                      return (
                        <div
                          key={loc.id}
                          onClick={() => setLocationPreference(loc.name)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                            isSelected
                              ? 'bg-[#EFEAE1] border-[#9E7250] ring-1 ring-[#9E7250]'
                              : 'bg-[#FAF8F5] border-[#E5DFD3] hover:bg-[#EFEAE1]/50'
                          }`}
                        >
                          <div className="p-2 bg-[#FAF8F5] rounded-lg border border-[#E5DFD3] text-[#9E7250] shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-0.5">
                              <h4 className="text-sm font-semibold text-[#232220]">{loc.name}</h4>
                              <span className="w-3.5 h-3.5 rounded-full border border-[#8C827A] flex items-center justify-center">
                                {isSelected && <span className="w-2 h-2 rounded-full bg-[#9E7250]" />}
                              </span>
                            </div>
                            <p className="text-xs text-[#50443c] leading-relaxed">
                              {loc.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Available Dates & Natural Light Slots */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-[#232220] mb-1">
                    Datas e Janelas de Luz Disponíveis
                  </h3>
                  <p className="text-xs text-[#665d55] mb-4">
                    Limitamos nossos ensaios a no máximo 2 famílias por dia para preservar a tranquilidade.
                  </p>

                  <div className="space-y-3 mb-5">
                    {AVAILABLE_DATES.map((d) => {
                      const isSelectedDate = selectedDate === d.label;
                      return (
                        <div
                          key={d.date}
                          onClick={() => {
                            setSelectedDate(d.label);
                            setSelectedTimeSlot(d.slots[0]);
                          }}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                            isSelectedDate
                              ? 'bg-[#EFEAE1] border-[#9E7250]'
                              : 'bg-[#FAF8F5] border-[#E5DFD3] hover:bg-[#EFEAE1]/40'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-[#232220] flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5 text-[#9E7250]" />
                              {d.label}
                            </span>
                            <span className="text-[10px] text-[#9E7250] font-medium">Vagas Restritas</span>
                          </div>

                          {/* Time Slots */}
                          {isSelectedDate && (
                            <div className="pt-2 border-t border-[#E5DFD3] flex flex-wrap gap-2">
                              {d.slots.map((slot) => {
                                const isCurrentSlot = selectedTimeSlot === slot;
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedTimeSlot(slot);
                                    }}
                                    className={`px-3 py-1.5 text-xs rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                                      isCurrentSlot
                                        ? 'bg-[#9E7250] text-[#FAF8F5] font-medium'
                                        : 'bg-[#FAF8F5] text-[#50443c] border border-[#E5DFD3] hover:border-[#8C827A]'
                                    }`}
                                  >
                                    <Clock className="w-3 h-3" />
                                    <span>{slot}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Family Details & Narrative */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-[#232220] mb-1">
                    Sobre Vocês & Contato
                  </h3>
                  <p className="text-xs text-[#665d55] mb-4">
                    Queremos conhecer quem estará presente para preparar o espaço com o máximo de aconchego.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8C827A] mb-1.5 tracking-wide">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ex: Carolina Alencar"
                        required
                        className="w-full py-3.5 px-4 text-xs font-normal text-[#232220] bg-[#FAF8F5] border border-[#A69C93]/50 rounded-lg focus:outline-none focus:border-[#9E7250] focus:ring-4 focus:ring-[#9E7250]/15 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-medium text-[#8C827A] mb-1.5 tracking-wide">
                          WhatsApp com DDD
                        </label>
                        <input
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="(11) 99999-9999"
                          required
                          className="w-full py-3.5 px-4 text-xs font-normal text-[#232220] bg-[#FAF8F5] border border-[#A69C93]/50 rounded-lg focus:outline-none focus:border-[#9E7250] focus:ring-4 focus:ring-[#9E7250]/15 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#8C827A] mb-1.5 tracking-wide">
                          E-mail
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="carolina@exemplo.com"
                          required
                          className="w-full py-3.5 px-4 text-xs font-normal text-[#232220] bg-[#FAF8F5] border border-[#A69C93]/50 rounded-lg focus:outline-none focus:border-[#9E7250] focus:ring-4 focus:ring-[#9E7250]/15 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8C827A] mb-1.5 tracking-wide">
                        Quem estará no ensaio? (Nomes e idades dos filhos/pets)
                      </label>
                      <input
                        type="text"
                        value={familyMembers}
                        onChange={(e) => setFamilyMembers(e.target.value)}
                        placeholder="Ex: Eu, meu marido Rodrigo e nossa filha Clara de 2 anos"
                        className="w-full py-3.5 px-4 text-xs font-normal text-[#232220] bg-[#FAF8F5] border border-[#A69C93]/50 rounded-lg focus:outline-none focus:border-[#9E7250] focus:ring-4 focus:ring-[#9E7250]/15 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8C827A] mb-1.5 tracking-wide">
                        O que você mais deseja lembrar deste momento daqui a 20 anos?
                      </label>
                      <textarea
                        value={specialWishes}
                        onChange={(e) => setSpecialWishes(e.target.value)}
                        rows={2}
                        placeholder="Ex: O jeito que ela segura nosso dedo com força e a risada com a covinha..."
                        className="w-full py-3 px-4 text-xs font-normal text-[#232220] bg-[#FAF8F5] border border-[#A69C93]/50 rounded-lg focus:outline-none focus:border-[#9E7250] focus:ring-4 focus:ring-[#9E7250]/15 transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {!bookingConfirmed && (
          <div className="px-6 py-4 border-t border-[#E5DFD3] flex items-center justify-between bg-[#FAF8F5]">
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                step === 1
                  ? 'text-[#A69C93] cursor-not-allowed'
                  : 'text-[#50443c] hover:bg-[#EFEAE1]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>

            <button
              onClick={handleNext}
              className="px-6 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#9E7250] hover:bg-[#896041] rounded-lg transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>{step === 4 ? 'Confirmar Solicitação' : 'Continuar'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
