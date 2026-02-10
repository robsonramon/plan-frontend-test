# Plan | Países do Mundo

Aplicação web desenvolvida com **Next.js**, **TypeScript** e **Sass**, que permite explorar países do mundo de forma interativa, com filtros, paginação e visualização de detalhes.

O projeto consome a **REST Countries API** e foi construído com foco em organização de código, UX, responsividade, acessibilidade e boas práticas modernas do **Next.js App Router**.

---

## Como rodar o projeto localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/robsonramon/plan-frontend-test

# Entre na pasta do projeto
cd plan-frontend-test

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev

A aplicação estará disponível em:
http://localhost:3000

```

Se preferir, pode acessar diretamente o deploy em: https://plan-frontend-test-lemon.vercel.app/

## Tecnologias utilizadas

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Sass (CSS Modules)**
- **REST Countries API**
- **ESLint + Prettier**
- **Git + Conventional Commits**

## Arquitetura do Projeto

O projeto foi estruturado seguindo os princípios do **Next.js App Router**, com separação clara de responsabilidades, foco em manutenibilidade, reutilização de código e facilidade de evolução.

### Estrutura de pastas

```bash
src
├── app
│ ├── api
│ │ └── countries
│ │ ├── [name]
│ │ │ └── route.ts
│ │ └── route.ts
│ ├── country
│ │ └── [name]
│ │ ├── Country.module.scss
│ │ └── page.tsx
│ ├── Home.module.scss
│ ├── layout.tsx
│ └── page.tsx
├── components
├── hooks
├── services
├── styles
└── types
```

### app/ — Rotas e Layout

Responsável por:

- Rotas da aplicação
- Layouts compartilhados
- Páginas principais
- API Routes

**Principais arquivos:**

- `app/page.tsx` → Página inicial (Home)
- `app/country/[name]/page.tsx` → Página de detalhes do país
- `app/layout.tsx` → Layout global (metadata, estilos globais, estrutura base)

---

### app/api/ — API Routes

Camada intermediária entre o frontend e a REST Countries API.

Benefícios:

- Normalização de dados
- Redução de payloads
- Cache (`revalidate`)
- Desacoplamento do frontend

**Endpoints:**

- `GET /api/countries` → lista de países
- `GET /api/countries/[name]` → detalhes de um país específico

---

### components/ — Componentes reutilizáveis

Componentes visuais desacoplados e isolados por responsabilidade.

Exemplos:

- `CountryCard`
- `CountryDetailsCard`
- `Header`
- `Pagination`
- `Loading` e `Error`
- `Footer`

Cada componente possui:

- Arquivo `.tsx`
- Arquivo `.module.scss`

---

### hooks/ — Lógica e estado isolados

Hooks customizados para manter componentes simples e declarativos.

Principais hooks:

- `useCountries`
- `useCountryDetails`
- `useFilters`
- `usePagination`
- `useItemsPerPage`
- `useIsMobile`

Benefícios:

- Legibilidade
- Reutilização
- Testabilidade
- Organização

---

### services/ — Integração com APIs

Centraliza chamadas à API interna (`/api/countries`).

Exemplo:

- `restCountries.ts`

Facilita manutenção, reduzindo duplicação, mudanças futuras e testabilidade.

---

### styles/ — Estilos globais e design tokens

- `globals.scss` → estilos globais
- `_breakpoints.scss` → mixins de responsividade
- `variables.scss` → cores e variáveis do tema

Mantém consistência visual e base simples de design system.

---

### types/ — Tipagens TypeScript

Tipagens globais do projeto:

- `country.ts` → dados de países
- `filters.ts` → filtros

Benefícios:

- Segurança
- Autocomplete
- Menos erros em runtime

---

### Considerações finais

Decisões arquiteturais foram tomadas visando:

- Separação clara de responsabilidades
- Facilidade de leitura e manutenção
- Uso correto do App Router
- Boa experiência do usuário
- Escalabilidade

## Integração com a REST Countries API

A integração é feita através de **services dedicados**, garantindo organização e desacoplamento da lógica de comunicação externa.

- As **API Routes do Next.js** foram utilizadas como camada intermediária entre o frontend e a REST Countries API.
- Uso de `fetch` com **cache nativo do Next.js (`revalidate`)** para melhorar performance e reduzir chamadas desnecessárias.

### Exemplos de uso

- **Listagem de países**
- **Busca de país por código (cca3)**

## Filtros e Paginação

### Filtros implementados

- **Busca por nome do país**
- **Filtro por continente**
- **Filtro por idioma** (países que falam o idioma)

> Os filtros foram implementados inicialmente no **client-side** por simplicidade e clareza, com possibilidade de migração futura para filtros **server-side**.

---

### Paginação

- **Paginação dinâmica** ajustada conforme o tamanho da tela:
  - Mobile → 2 itens por página
  - Tablet → 4 itens por página
  - Desktop → 8 itens por página
- Componente de paginação adaptado para mobile, reduzindo poluição visual

## Responsividade

A responsividade foi implementada utilizando **media queries em Sass**, com breakpoints centralizados em um único arquivo:

`styles/_breakpoints.scss`

### Benefícios

- Consistência entre componentes
- Fácil manutenção
- Layout adaptado para **mobile, tablet e desktop**

## Acessibilidade (A11y)

Foram aplicadas boas práticas de acessibilidade, incluindo:

- `alt` descritivo em imagens (especialmente bandeiras)
- Labels invisíveis (`sr-only`) para inputs e selects
- Uso correto de `aria-label` em botões de ícone
- `aria-current` na paginação
- Estrutura semântica (`header`, `main`, `nav`, `footer`)
- Foco visível para navegação por teclado

### Benefícios

Essas práticas melhoram:

- Usabilidade
- Inclusão
- SEO
- Qualidade geral da aplicação

## Imagens Otimizadas

- Uso do formato **WebP** para todas as imagens
- Compressão mais eficiente que **JPEG** e **PNG**, reduzindo o tamanho dos arquivos
- Suporte a **transparência** e **compressão com perdas ou sem perdas**
- Compatibilidade ampla em navegadores modernos
- Melhora significativa no **tempo de carregamento** e na **performance** da aplicação

## Estilização

- Utilização de **Sass Modules**
- Estilos isolados por componente
- Sem dependência de bibliotecas externas de UI
- Layout fiel ao design proposto
- Componentes reutilizáveis e bem definidos

## SEO

- Configuração de **metadata global** no `layout.tsx`
- Uso da **Metadata API do Next.js**
- Titles dinâmicos por página (quando aplicável)
- Estrutura preparada para indexação correta

> A opção foi por manter o SEO centralizado no layout, garantindo consistência e evitando complexidade desnecessária.

## Qualidade de Código

- **ESLint** configurado conforme recomendações do Next.js
- **Prettier** para padronização de código
- Tipagem forte com **TypeScript**
- Commits padronizados seguindo **Conventional Commits**

## Possíveis evoluções futuras

- **Filtros server-side** (região / idioma)
- **Skeleton loaders** para melhorar UX em carregamentos
- **Persistência de filtros na URL**
- **Internacionalização (i18n)**
- **Sitemap automático** para SEO
- **Testes automatizados** para garantir qualidade

```

```
