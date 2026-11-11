# Studio Silva Fotografias

> Estúdio de fotografia afetiva, documental e artesanal para famílias, gestantes, casamentos e memórias atemporais em Penápolis – SP e região.

---

## 📸 Sobre o Projeto

O **Studio Silva Fotografias** é uma plataforma web completa desenvolvida para apresentar o portfólio visual do estúdio e fornecer um painel administrativo intuitivo para gestão e curadoria de fotografias em alta resolução.

O sistema integra tanto a experiência pública dos clientes quanto as ferramentas internas de catalogação do fotógrafo, com design editorial inspirado em tons terrosos, linho natural e estética *fine art*.

---

## 🖥️ Telas do Aplicativo

O projeto é composto por 4 telas interativas e conectadas:

### 1. Site Oficial (Landing Page Pública)
- **Hero Editorial**: Apresentação sensível com moldura *fine art mat*, métricas de afeto e atendimento em Penápolis & Região.
- **8 Seções de Serviços**:
  1. Aniversários (Infantis e Adultos)
  2. Batizados & 1ª Comunhão
  3. Crismas & Religiosos
  4. Formaturas
  5. Casamentos
  6. Ensaios & Família
  7. Eventos Corporativos
  8. Outros Especiais
  *Cada serviço conta com botão direto para orçamento via WhatsApp com mensagens pré-formatadas.*
- **Portfólio com Filtros & Lightbox**:
  - Filtros por categoria (*Todos, Aniversários, Eventos Religiosos, Casamentos, Formaturas, Ensaios, Corporativos*).
  - Modal Lightbox em alta resolução com navegação anterior/próxima e suporte a teclas de atalho (`Esc`, setas direcionais).
- **Sobre o Fotógrafo**: Retrato editorial, manifesto humanizado e pilares de *Cuidado Humano* e *Entrega Dedicada*.
- **Feed do Instagram**: Grade de 6 imagens quadradas com interação e atalho direto para `@studiosilva_fotografias`.
- **Área de Contato Exclusiva**:
  - Cards elegantes para WhatsApp e Instagram com design minimalista, **sem expor o número de telefone em texto**.
  - Informação de atendimento presencial sob agendamento prévio em Penápolis e cidades vizinhas.
- **Botão Flutuante de WhatsApp**: Atalho de suporte rápido no canto inferior direito.

### 2. Login Administrativo
- Autenticação corporativa com e-mail institucional e senha.
- Botão de alternância para exibição da senha (ícone de olho).
- Opção *"Lembrar deste dispositivo"* e link para recuperação de acesso.
- Animação de autenticação (`Autenticando...` ➔ `Acesso Autorizado`).
- Selo de segurança com criptografia de ponta a ponta e link de retorno ao site público.

### 3. Dashboard Geral (Painel Executivo)
- Saudação com data brasileira dinâmica em formato editorial.
- **4 Cards Bento de Métricas**:
  - *Total do Arquivo*: 148 fotografias cadastradas (+12 no mês).
  - *Categorias Ativas*: 08 seções organizadas.
  - *Publicadas*: 136 fotos visíveis na vitrine.
  - *Rascunhos & Ocultas*: 12 fotos aguardando curadoria.
- **Atalhos Rápidos de Curadoria**: Envio em lote, edição de textos, gerenciamento de pacotes e visualização do site ao vivo.
- **Faixa de Fotografias Recentes**: Registros com metadados fotográficos (Sony A7 IV, lentes 50mm f/1.4, arquivos RAW + JPG).
- **Armazenamento Supabase**: Gauge visual com 3.4 GB / 10.0 GB utilizados (34%), indicador de espaço livre e status do backup diário.
- **Modal de Upload Rápido**: Suporte a arrastar e soltar (drag & drop) para arquivos RAW, JPEG e TIFF com atribuição de categoria.

### 4. Gestão da Galeria (Catálogo de Fotos)
- **Barra de Busca Inteligente**: Pesquisa por título, cliente, evento ou localização com botão para limpar busca.
- **Seletores e Filtros**:
  - Ordenação por recentes, antigas, personalizada ou ordem alfabética (A-Z).
  - Filtro por status (*Todos, Publicados, Rascunhos, Somente Destaques*).
- **Pílulas de Categorias com Contadores**:
  - Todas (148)
  - Casamentos (42)
  - Batizados (24)
  - Aniversários (28)
  - Formaturas (18)
  - Ensaios (20)
  - Corporativos (16)
- **Ações em Lote**: Barra contextual que surge ao selecionar fotos, permitindo *Publicar em Lote*, *Marcar Destaque* ou *Excluir Seleção*.
- **Ações Individuais por Card**:
  - Editar detalhes do ensaio.
  - Alternar visibilidade no site (olho aberto / oculto).
  - Destacar foto na vitrine principal (estrela preenchida).
  - Excluir fotografia com modal de confirmação de segurança.
- **Modal de Upload & Curadoria em Lote**:
  - Área de dropzone para arquivos de até 20MB.
  - Definições gerais da remessa (título, categoria e publicação imediata).
  - Fila de transferência com barras de progresso (concluído 100%, otimizando metadados EXIF 78%).
- **Toast de Notificações Dinâmico**: Feedback flutuante instantâneo para cada ação executada.

---

## 🎛️ Barra Seletora de Telas (Screen Switcher)

Para facilitar a apresentação, testes e homologação das 4 telas criadas, o aplicativo inclui uma **barra suspensa flutuante** no canto superior direito:

| Opção | Tela de Destino |
|---|---|
| **1. Site Oficial** | Landing Page completa voltada aos clientes e visitantes |
| **2. Login Admin** | Tela de autenticação institucional restrita |
| **3. Dashboard Geral** | Painel analítico de métricas, atalhos e status do armazenamento |
| **4. Gestão da Galeria** | Catálogo administrativo com filtros, ações em lote e upload |

*Além do seletor, todas as transições naturais (ícone de perfil, botões "Visualizar Site", "Voltar para o site público", menus da barra lateral e "Sair") continuam funcionando perfeitamente de forma integrada.*

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [React 19](https://react.dev/) com functional components e hooks
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) com tokens de cores customizados
- **Ícones**: [Google Material Symbols Outlined](https://fonts.google.com/icons) e [Lucide React](https://lucide.dev/)
- **Tipografia**:
  - *Newsreader* (Google Fonts): Tipografia com serifa clássica para títulos, citações e atmosfera editorial.
  - *Plus Jakarta Sans* (Google Fonts): Tipografia sem serifa geométrica e legível para corpos de texto, botões e labels.
- **Build & Dev Tool**: [Vite 8](https://vitejs.dev/)

---

## 📁 Estrutura de Arquivos

```text
├── index.html                           # Entry-point HTML com links de fontes e metatags
├── metadata.json                        # Metadados do applet AI Studio
├── package.json                         # Dependências e scripts do projeto
├── tsconfig.json                        # Configuração do TypeScript
├── vite.config.ts                       # Configuração do Vite e Tailwind v4
├── src/
│   ├── main.tsx                         # Bootstrap da aplicação React
│   ├── App.tsx                          # Roteamento de telas e barra seletora flutuante
│   ├── index.css                        # Tokens de tema, fontes e utilitários globais
│   └── components/
│       ├── PublicLandingPage.tsx        # Tela 1: Site Oficial & Mobile com Lightbox
│       ├── AdminLogin.tsx               # Tela 2: Login Administrativo seguro
│       ├── AdminDashboard.tsx           # Tela 3: Dashboard Geral com KPIs e Supabase Storage
│       └── AdminGalleryManagement.tsx   # Tela 4: Gestão da Galeria, filtros e upload
```

---

## 🚀 Como Executar Localmente

1. **Clone o repositório** ou abra no ambiente AI Studio.
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
4. **Gere a build de produção**:
   ```bash
   npm run build
   ```

---

## 📍 Localização e Atendimento

- **Estúdio**: Studio Silva Fotografias
- **Sede**: Penápolis – SP (atendimento em toda a região sob agendamento prévio)
- **Instagram**: [@studiosilva_fotografias](https://www.instagram.com/studiosilva_fotografias/)
- **WhatsApp**: Atendimento institucional direto pelo site
