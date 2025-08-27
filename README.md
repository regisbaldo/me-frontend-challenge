# Documentação do Projeto

<img src="https://cdn.me.com.br/logos/me_primary.png" alt="ME">

# Desafio Front-end

Este projeto é uma implementação em Vue.js de uma página de detalhes de pedido, exibindo informações completas sobre um pedido de compra, incluindo detalhes do cabeçalho, informações do fornecedor e endereços de entrega.

## 📋 Índice

- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Executando Testes](#executando-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades relevantes](#funcionalidades-relevantes)
- [Alterações visuais do protótipo](#alterações-visuais-do-protótipo)

## 🚀 Instalação

### Pré-requisitos
- Node.js (v20.19.0 ou >=22.12.0)

### Usando npm

```bash
# Clone o repositório
git clone <url-do-repositório>
cd me-frontend-challenge

# Instale as dependências
npm install

# Crie o arquivo .env a partir do exemplo
cp .env.example .env
```

### Usando yarn

```bash
# Clone o repositório
git clone <url-do-repositório>
cd me-frontend-challenge

# Instale as dependências
yarn

# Crie o arquivo .env a partir do exemplo
cp .env.example .env
```

## 💻 Executando o Projeto

### Servidor de desenvolvimento

#### npm
```bash
npm run dev
```

#### yarn
```bash
yarn dev
```

A aplicação estará disponível em http://localhost:5173

### Build de produção

#### npm
```bash
npm run build
npm run preview
```

#### yarn
```bash
yarn build
yarn preview
```

## 🧪 Executando Testes

O projeto usa Cypress para testes de componentes e end-to-end.

### Testes de componentes

#### npm
```bash
# Executar testes de componentes em modo headless
npm run test:component

# Executar testes de componentes com interface
npm run test:component:open
```

#### yarn
```bash
# Executar testes de componentes em modo headless
yarn test:component

# Executar testes de componentes com interface
yarn test:component:open
```

### Testes end-to-end

#### npm
```bash
# Executar testes e2e em modo headless
npm run test:e2e

# Executar testes e2e com interface
npm run test:e2e:open
```

#### yarn
```bash
# Executar testes e2e em modo headless
yarn test:e2e

# Executar testes e2e com interface
yarn test:e2e:open
```

### Todos os testes

Para executar todos os testes (componentes e e2e) em modo headless:

```bash
npm test
# ou
yarn test
```

## 📁 Estrutura do Projeto

```
src/
├── assets/         # Ativos estáticos e estilos globais
├── components/     # Componentes UI reutilizáveis
│   ├── common/     # Componentes genéricos (cards, loaders)
│   └── Order/      # Componentes específicos para pedidos
├── containers/     # Componentes container que conectam aos stores
├── services/       # Serviços de API
└── stores/         # Stores Pinia para gerenciamento de estado
```

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Vue.js 3](https://vuejs.org/) com API de Composição
- **Ferramenta de Build**: [Vite](https://vitejs.dev/)
- **Gerenciamento de Estado**: [Pinia](https://pinia.vuejs.org/)
- **Cliente HTTP**: [Axios](https://axios-http.com/)
- **Formatação de Datas**: [Day.js](https://day.js.org/)
- **Pré-processador CSS**: [SASS/SCSS](https://sass-lang.com/)
- **Testes**:
  - [Cypress](https://www.cypress.io/) para testes de componentes e E2E
- **Qualidade de Código**:
  - [ESLint](https://eslint.org/) para linting de código
  - [Prettier](https://prettier.io/) para formatação de código

## ✨ Funcionalidades relevantes

- **Design Responsivo**: Interface totalmente responsiva desktop, tablet e mobile
- **Estados de Carregamento**: Feedback visual durante o carregamento de dados
- **Tratamento de Erros**: Estados de erro com possibilidade de tentar novamente
- **Exibição Dinâmica de Dados**: Dados formatados adequadamente para datas, contatos e endereços (além de linkar redirecionar pros protocolos mailto e tel)
- **Marcação Semântica**: Estrutura HTML acessível e semântica

## ✨ Alterações visuais do protótipo
- Inserido formatação na data de leitura do fornecedor
- Inserido ancôragem de mailto e tel nos dados de e-mail e telefone
- Alterado cor de fundo para ficar um pouco mais amigável ao olhos (e colocado no card a cor branca padrão)
- Inserido componente de tela de erro (com opção de tentar novamente)
