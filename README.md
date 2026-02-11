# API de Arquivo de Filmes

Esta é uma API RESTful desenvolvida em Node.js com Express e TypeScript para gerenciar um catálogo de filmes. O projeto permite listar, buscar e adicionar filmes, além de fornecer informações consolidadas sobre atores, diretores e gêneros.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv) (para variáveis de ambiente)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken) (para autenticação via JWT)

## 🛠️ Como rodar o projeto a partir do GitHub

Para baixar e rodar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd api
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Configuração:**
    Crie um arquivo `.env` na raiz do projeto e defina as variáveis:

    ```env
    PORT=3000
    JWT_SECRET=sua_chave_secreta
    ```

5.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

## 📍 Endpoints da API

### Autenticação (`/`)

- **`POST /register`**
    - Registra um novo usuário.
    - **Body (JSON):** `email` e `password`.

- **`POST /login`**
    - Realiza login e retorna um token JWT.
    - **Body (JSON):** `email` e `password`.
    - **Resposta:** `{ "token": "..." }`

### Filmes (`/filmes`)

- **`GET /filmes`**
    - Retorna a lista de todos os filmes.
    - **Query Params:** `ignore` (opcional): Lista separada por vírgulas de campos a serem excluídos da resposta (ex: `?ignore=sinopse,elenco`).

- **`GET /filmes/:id`**
    - Retorna os detalhes de um filme específico pelo ID.
    - **Query Params:** `ignore` (opcional).

- **`POST /filmes`** 🔒
    - Adiciona um novo filme ao catálogo.
    - **Body (JSON):** Requer campos obrigatórios como `titulo`, `sinopse`, `ano`, `genero`, `diretor` e `elenco`.
    - **Autenticação:** Requer token JWT no header `Authorization: Bearer <token>`.

- **`DELETE /filmes/:id`** 🔒
    - Remove um filme do catálogo pelo ID.
    - **Autenticação:** Requer token JWT no header `Authorization: Bearer <token>`.

### Informações (`/info`) 🔒

> Todas as rotas de informações requerem autenticação via token JWT no header `Authorization: Bearer <token>`.

- **`GET /info/atores`**
    - Retorna uma lista única de todos os atores presentes nos filmes cadastrados.

- **`GET /info/diretores`**
    - Retorna uma lista única de todos os diretores.

- **`GET /info/genero`**
    - Retorna uma lista única de todos os gêneros disponíveis.

### Utilitários

- **`GET /ping`**
    - Endpoint de health check. Retorna `{ "message": "pong" }`.

## 🔐 Autenticação

A API utiliza **JSON Web Token (JWT)** para proteger rotas. O fluxo é:

1. Registre um usuário via `POST /register`.
2. Faça login via `POST /login` para obter o token.
3. Envie o token nas rotas protegidas (🔒) no header:
   `     Authorization: Bearer <seu_token>
    `
   O token expira em **1 hora**.
