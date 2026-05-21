# Controle de Gastos

![Expo](https://img.shields.io/badge/Expo-54.0.33-000020?logo=expo&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=000)
![React_Native](https://img.shields.io/badge/React%20Native-0.81.5-20232A?logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=000)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

Aplicativo mobile desenvolvido com React Native (Expo) para registrar e gerenciar gastos de forma simples.

## Objetivo do projeto

Este projeto foi criado para praticar fundamentos de desenvolvimento mobile com React Native:

- Componentes e layout com React Native
- Gerenciamento de estado com `useState`
- Manipulação de listas e cálculos agregados
- Validação de formulário e fluxo de edição/exclusão

## Funcionalidades atuais

- Cadastro de gasto com descrição e valor
- Validação de campos obrigatórios
- Validação de valor numérico
- Edição de gasto existente
- Remoção de gasto
- Cálculo de total de gastos em memória

## Stack utilizada

- Expo
- React
- React Native
- React Native Web
- Expo Status Bar

## Estrutura do projeto

```text
.
├── README.md
└── controle-gastos/
 ├── App.js
 ├── app.json
 ├── index.js
 ├── package.json
 ├── assets/
 └── components/
  └── ExpenseItem-styled-edit.js
```

## Pré-requisitos

- Node.js 18+ (recomendado LTS)
- npm 9+
- Expo Go (Android/iOS) para testes em dispositivo físico

## Como executar localmente

1. Acesse a pasta do app:

```bash
cd controle-gastos
```

1. Instale as dependências:

```bash
npm install
```

1. Inicie o servidor de desenvolvimento:

```bash
npm run start
```

1. Execute no ambiente desejado:

- `a` para Android
- `w` para Web
- `i` para iOS (macOS)

Também é possível usar os scripts abaixo.

## Scripts disponíveis

Na pasta `controle-gastos`:

- `npm run start`: inicia o Expo
- `npm run android`: abre no Android
- `npm run ios`: abre no iOS
- `npm run web`: abre no navegador

## Estado atual da interface

O fluxo principal de cadastro e validação já está implementado. A estilização e a renderização completa da lista podem ser evoluídas para melhorar experiência visual e usabilidade.

## Próximos passos sugeridos

- Finalizar layout e design system da tela
- Exibir a lista de gastos com `FlatList`
- Destacar o total de gastos em área fixa
- Persistir dados localmente (ex.: AsyncStorage)
- Adicionar testes de interface e regras de negócio

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
