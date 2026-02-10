# API de Arquivo de Filmes

Esta é uma API RESTful desenvolvida em Node.js com Express e TypeScript para gerenciar um catálogo de filmes. O projeto permite listar, buscar e adicionar filmes, além de fornecer informações consolidadas sobre atores, diretores e gêneros.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv) (para variáveis de ambiente)

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
    Crie um arquivo `.env` na raiz do projeto (opcional) e defina a porta:

    ```env
    PORT=3000
    ```

5.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

## 📍 Endpoints da API

### Filmes (`/filmes`)

- **`GET /filmes`**
    - Retorna a lista de todos os filmes.
    - **Query Params:** `ignore` (opcional): Lista separada por vírgulas de campos a serem excluídos da resposta (ex: `?ignore=sinopse,elenco`).

- **`GET /filmes/:id`**
    - Retorna os detalhes de um filme específico pelo ID.
    - **Query Params:** `ignore` (opcional).

- **`POST /filmes`**
    - Adiciona um novo filme ao catálogo.
    - **Body (JSON):** Requer campos obrigatórios como `titulo`, `sinopse`, `ano`, `genero`, `diretor` e `elenco`.

### Informações (`/info`)

- **`GET /info/atores`**
    - Retorna uma lista única de todos os atores presentes nos filmes cadastrados.

- **`GET /info/diretores`**
    - Retorna uma lista única de todos os diretores.

- **`GET /info/genero`**
    - Retorna uma lista única de todos os gêneros disponíveis.
