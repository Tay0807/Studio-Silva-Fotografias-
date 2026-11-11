import { PortfolioItem, CollectionPackage, AddonOption, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_family_portrait_1794420427712.jpg';
export const MATERNITY_IMAGE = '/src/assets/images/session_maternity_linen_1794420428441.jpg';
export const HEIRLOOM_ALBUM_IMAGE = '/src/assets/images/session_heirloom_album_1794420429096.jpg';
export const BABY_IMAGE = '/src/assets/images/session_baby_portrait_1794420429344.jpg';
export const PHOTOGRAPHER_IMAGE = '/src/assets/images/photographer_portrait_1794420431215.jpg';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'ser-01',
    title: 'Aconchego na Manhã de Domingo',
    category: 'familia',
    categoryLabel: 'Ensaio Família',
    image: HERO_IMAGE,
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Ateliê Pinheiros · São Paulo',
    lighting: 'Luz natural matinal suave de janela',
    story: 'Um encontro sem relógio, onde os passos descalços e as gargalhadas espontâneas da pequena Clara deram o compasso para registrar a intimidade da família Alencar.',
    exif: {
      camera: 'Leica SL2',
      lens: 'Summilux-SL 50mm f/1.4 ASPH',
      aperture: 'f/2.0',
      iso: '200',
      speed: '1/320s',
      recommendedPaper: 'Hahnemühle Photo Rag 308g (100% Algodão)',
    },
  },
  {
    id: 'ser-02',
    title: 'A Doce Espera de Teresa',
    category: 'gestante',
    categoryLabel: 'Gestante',
    image: MATERNITY_IMAGE,
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Sala de Luz do Estúdio',
    lighting: 'Luz lateral difusa e suave',
    story: 'Com linho cru e um ambiente acolhedor e silencioso, Helena celebrou as 32 semanas de gestação. Um tributo à beleza da transformação e ao primeiro vínculo materno.',
    exif: {
      camera: 'Contax 645 (Digital Back)',
      lens: 'Carl Zeiss Planar 80mm f/2.0',
      aperture: 'f/2.8',
      iso: '160',
      speed: '1/250s',
      recommendedPaper: 'Canson Edition Etching Rag 310g',
    },
  },
  {
    id: 'ser-03',
    title: 'Encadernação & Memórias Vivas',
    category: 'albuns',
    categoryLabel: 'Álbuns & Acervo',
    image: HEIRLOOM_ALBUM_IMAGE,
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Bancada do Encadernador Artesanal',
    lighting: 'Luz ambiente de ateliê',
    story: 'Álbum mestre aberto exibindo impressões com corte manual em borda deckle edge. Cada lâmina é montada à mão com adesivos neutros e costura de linhagem clássica.',
    exif: {
      camera: 'Fujifilm GFX 100S',
      lens: 'GF 63mm f/2.8 R WR',
      aperture: 'f/5.6',
      iso: '100',
      speed: '1/125s',
      recommendedPaper: 'Awagami Washi Kozo Natural 110g / Photo Rag',
    },
  },
  {
    id: 'ser-04',
    title: 'O Primeiro Sono nos Braços',
    category: 'bebe',
    categoryLabel: 'Bebê & Infância',
    image: BABY_IMAGE,
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Ateliê Silva · Luz Suave',
    lighting: 'Contraluz natural com difusores de seda',
    story: 'Fotografia em preto e branco atemporal do pequeno Theo aos 18 dias de vida, amparado pelas mãos firmes e carinhosas da mãe. O tempo parece desacelerar.',
    exif: {
      camera: 'Leica M11 Monochrome',
      lens: 'Noctilux-M 50mm f/0.95 ASPH',
      aperture: 'f/1.4',
      iso: '400',
      speed: '1/500s',
      recommendedPaper: 'Ilford Galerie Prestige Gold Fibre Gloss',
    },
  },
  {
    id: 'ser-05',
    title: 'A Água Sagrada & As Bênçãos',
    category: 'batizado',
    categoryLabel: 'Batizado',
    image: BABY_IMAGE,
    aspectRatio: 'portrait',
    year: '2025',
    location: 'Igreja Nossa Senhora do Brasil · São Paulo',
    lighting: 'Luz filtrada por vitrais centenários',
    story: 'A unção e o carinho dos padrinhos registrados com discrição e respeito absoluto ao rito sagrado. Luz e sombra em harmonia arquitetônica.',
    exif: {
      camera: 'Leica SL2',
      lens: 'Apo-Summicron-SL 35mm f/2 ASPH',
      aperture: 'f/2.2',
      iso: '800',
      speed: '1/200s',
      recommendedPaper: 'Hahnemühle William Turner 310g',
    },
  },
  {
    id: 'ser-06',
    title: 'A Poesia do Olhar Maduro',
    category: 'retrato',
    categoryLabel: 'Retrato Atemporal',
    image: PHOTOGRAPHER_IMAGE,
    aspectRatio: 'square',
    year: '2026',
    location: 'Sala de Retratos do Ateliê',
    lighting: 'Luz Rembrandt suave de janela norte',
    story: 'Retrato individual intimista de presença e dignidade serena. Sem pressa, buscando a verdade do rosto e a calma que os anos trazem.',
    exif: {
      camera: 'Hasselblad 907X 50C',
      lens: 'XCD 80mm f/1.9',
      aperture: 'f/2.8',
      iso: '100',
      speed: '1/160s',
      recommendedPaper: 'Canson Platine Fibre Rag 310g',
    },
  },
];

export const COLLECTIONS: CollectionPackage[] = [
  {
    id: 'essencia',
    name: 'Coleção Essência',
    subtitle: 'Para celebrar marcos íntimos com leveza e serenidade',
    price: 1480,
    duration: '1 hora e 15 minutos',
    deliveredPhotos: '30 fotografias com curadoria artística fina',
    albumIncluded: false,
    recommendedCover: 'Linho Cru Natural',
    features: [
      'Ensaio intimista no Ateliê de Luz Natural ou em sua residência',
      'Guia de harmonização de vestuário e paleta afetiva',
      '30 fotografias em altíssima resolução com tratamento individual tonal',
      'Galeria privativa online para download e seleção protegida por senha (1 ano)',
      'Opção de encomenda avulsa de álbuns artesanais e ampliações emolduradas',
    ],
    idealFor: 'Famílias pequenas, gestação ou renovação anual de retratos',
  },
  {
    id: 'legado',
    name: 'Coleção Legado',
    subtitle: 'Nossa experiência completa com o álbum fine art artesanal',
    tag: 'Mais Escolhida pelas Famílias',
    price: 2650,
    duration: '2 horas e 30 minutos sem pressa',
    deliveredPhotos: '65 fotografias tratadas + Álbum Físico Nobre',
    albumIncluded: true,
    albumDescription: '1 Álbum Fine Art 25x25cm encadernado à mão em linho nobre europeu (30 páginas)',
    recommendedCover: 'Camurça Terracota com Hot Stamping Dourado',
    features: [
      'Sessão descontraída sem olhar para o relógio (tempo para lanchinho e trocas)',
      '65 fotografias refinadas em alta resolução e prontas para impressão',
      '1 Álbum Fine Art 25x25cm (30 páginas) em papel 100% algodão archival',
      'Caixa protetora personalizada forrada em tecido com fita de algodão',
      '10 ampliações matted (passe-partout de museu) tamanho 15x21cm',
      'Galeria online completa ativa por 2 anos com compartilhamento para parentes',
    ],
    idealFor: 'Famílias que valorizam o toque físico do papel e querem uma relíquia duradoura',
  },
  {
    id: 'geracoes',
    name: 'Coleção Gerações',
    subtitle: 'O acervo definitivo para envolver avós, netos e toda a linhagem',
    tag: 'Acervo Multigeracional',
    price: 4200,
    duration: 'Até 4 horas de vivência documental',
    deliveredPhotos: 'Todas as fotografias da curadoria final (100+ imagens)',
    albumIncluded: true,
    albumDescription: '1 Álbum Mestre 30x30cm em couro legítimo + 2 Réplicas para os Avós (20x20cm)',
    recommendedCover: 'Couro Sela Italiano com Gravação em Baixo-Relevo Seco',
    features: [
      'Cobertura documental completa: pais, filhos, avós, tios e pets de estimação',
      'Todas as fotografias selecionadas tratadas com excelência (100+ imagens)',
      '1 Álbum Mestre 30x30cm (40 páginas) com capa em couro nobre artesanal',
      '2 Mini-álbuns réplicas idênticas (20x20cm) para presentear os dois lados da família',
      'Caixa de madeira maciça entalhada com pen drive de linho e 30 impressões deckle edge',
      '1 Quadro emoldurado com vidro antirreflexo museológico 40x50cm',
      'Acesso vitalício à galeria digital em nuvem com backup triplo',
    ],
    idealFor: 'Comemorações de bodas de ouro, encontros de várias gerações e patrimônio afetivo',
  },
];

export const ADDONS: AddonOption[] = [
  {
    id: 'addon-album-extra',
    name: 'Álbum Réplica para Avós (20x20cm)',
    description: 'Cópia encadernada idêntica ao álbum principal, presente perfeito para os avós guardarem.',
    price: 680,
    iconName: 'BookOpen',
  },
  {
    id: 'addon-matted-print',
    name: 'Quadro em Madeira Nobre com Vidro Museu (30x40cm)',
    description: 'Moldura artesanal em madeira maciça com passe-partout de algodão neutro livre de ácido.',
    price: 390,
    iconName: 'Frame',
  },
  {
    id: 'addon-deckle-box',
    name: 'Caixa de Memórias com 20 Fotos Borda Deckle Edge',
    description: 'Papel artesanal de bordas rústicas e desfiadas, guardadas em caixa de linho com fita de algodão.',
    price: 320,
    iconName: 'Layers',
  },
  {
    id: 'addon-outdoor-location',
    name: 'Deslocamento para Locação Externa / Campo',
    description: 'Acompanhamento do estúdio em fazenda, serra ou litoral dentro do raio de 100km de SP.',
    price: 350,
    iconName: 'Sun',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    quote: 'Quando abrimos a caixa do álbum com os avós da Marina, todos choraram. Não é apenas uma foto bonita; o Studio Silva conseguiu capturar a essência da nossa família de um jeito tão doce e verdadeiro que parece que o tempo parou.',
    clientName: 'Carolina & Rodrigo Alencar',
    sessionType: 'Coleção Legado · Ensaio Família',
    year: '2025',
    city: 'São Paulo',
  },
  {
    id: 'dep-2',
    quote: 'Eu estava tímida por conta das mudanças do meu corpo na gravidez, mas o carinho e o silêncio respeitoso durante a sessão me deixaram completamente em paz. Hoje olho o retrato da minha barriga e sinto um orgulho indescritível.',
    clientName: 'Mariana Drummond',
    sessionType: 'Coleção Essência · Ensaio Gestante',
    year: '2026',
    city: 'Campinas',
  },
  {
    id: 'dep-3',
    quote: 'O álbum que encomendamos para os 80 anos do meu pai foi o maior presente que já demos a ele. As fotos têm uma textura e profundidade que você não encontra em telas digitais. É arte de verdade.',
    clientName: 'Gustavo Mendonça',
    sessionType: 'Coleção Gerações · Encontro de Família',
    year: '2025',
    city: 'São Paulo',
  },
];

export const ALBUM_FABRICS = [
  {
    id: 'linho-cru',
    name: 'Linho Cru Natural',
    description: 'Fibra vegetal pura europeia com trama visível e toque acolhedor.',
    colorHex: '#dfd7cc',
  },
  {
    id: 'terracota',
    name: 'Camurça Terracota',
    description: 'Toque aveludado e cor calorosa que remete aos pigmentos de terra.',
    colorHex: '#9E7250',
  },
  {
    id: 'couro-sela',
    name: 'Couro Sela Artesanal',
    description: 'Couro legítimo de curtimento vegetal com pátina que envelhece nobremente.',
    colorHex: '#6c4728',
  },
  {
    id: 'areia-algodao',
    name: 'Algodão Areia Suave',
    description: 'Tecido minimalista de trama fina e tonalidade neutra aconchegante.',
    colorHex: '#ebe4dc',
  },
];

export const EMBOSSING_TYPES = [
  { id: 'gold', name: 'Hot Stamping Ouro Envelhecido', label: 'Dourado Nobre' },
  { id: 'blind', name: 'Baixo-Relevo Seco (Sem cor)', label: 'Elegância Minimal' },
  { id: 'silver', name: 'Hot Stamping Prata Mate', label: 'Prata Discreta' },
];

export const FAQS = [
  {
    q: 'E se meu filho estiver agitado ou tímido no dia do ensaio?',
    a: 'Nossa filosofia é baseada no tempo desacelerado. Nunca forçamos sorrisos ou poses estáticas. Começamos com uma conversa suave, deixamos a criança explorar o espaço do ateliê no ritmo dela e esperamos a confiança se formar naturalmente. As melhores memórias surgem justamente dos momentos espontâneos e desarmados.',
  },
  {
    q: 'Como funciona a escolha do figurino para a família?',
    a: 'Após a confirmação do agendamento, compartilhamos nosso Guia de Harmonização e Paleta Afetiva. Recomendamos tons neutros e terrosos (cru, areia, linho, verde-oliva, terracota suave) e tecidos com texturas naturais que conversam em harmonia com a nossa iluminação e com o acabamento dos álbuns.',
  },
  {
    q: 'Como é feita a curadoria e a diagramação do álbum físico?',
    a: 'Você terá acesso a uma galeria privada e intuitiva para favoritar as fotografias mais significativas. Nossa equipe então cuida da diagramação editorial, respeitando respiros e narrativa visual cronológica. Você aprova a prévia digital lâmina por lâmina antes do envio para a encadernação artesanal.',
  },
  {
    q: 'Qual o prazo de produção dos álbuns e ampliações fine art?',
    a: 'A galeria digital tratada é entregue em até 15 dias úteis. Após sua aprovação final do layout, a encadernação manual e as impressões em algodão levam cerca de 25 a 35 dias úteis para serem confeccionadas e inspecionadas com rigor museológico em nosso ateliê.',
  },
  {
    q: 'Onde fica localizado o Ateliê do Studio Silva?',
    a: 'Nosso espaço fica no charmoso bairro de Pinheiros, em São Paulo. Um ambiente silencioso com janelões amplos voltados para a luz da manhã, piso de madeira maciça e café artesanal coado na hora. O atendimento é estritamente privativo e com hora marcada.',
  },
];
