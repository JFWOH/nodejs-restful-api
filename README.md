# Node.js RESTful API - Gerenciamento de Produtos

API RESTful desenvolvida em Node.js para gerenciar produtos, com persistência em arquivo JSON e validação de entrada nos endpoints de criação e edição.

## Funcionalidades

- Listar todos os produtos
- Criar novo produto (com validação)
- Editar produto existente (com validação)
- Remover produto

## Estrutura do Projeto

```
src/
├── controllers/
│   └── productsController.js
├── data/
│   └── products.json
├── routes/
│   └── products.js
└── app.js
```

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o servidor:
   ```sh
   node src/app.js
   ```

3. A API estará disponível em `http://localhost:3000`.

## Endpoints

- `GET /products`  
  Lista todos os produtos.

- `POST /products`  
  Cria um novo produto.  
  **Body JSON:**  
  ```json
  {
    "name": "Nome do Produto",
    "price": 99.99
  }
  ```

- `PUT /products/:id`  
  Atualiza um produto existente.  
  **Body JSON:**  
  ```json
  {
    "name": "Novo Nome",
    "price": 123.45
  }
  ```

- `DELETE /products/:id`  
  Remove um produto.

## Validação

- `name` (string, obrigatório)
- `price` (number, obrigatório, maior que zero)

Se algum campo estiver ausente ou inválido, a API retorna erro 400.

## Testes

Recomenda-se o uso do [Insomnia](https://insomnia.rest/) ou Postman para testar os endpoints.

## Observações

- Os dados são persistidos em `src/data/products.json`.
- Para produção, recomenda-se uso de banco de dados real.

---

Desenvolvido para fins didáticos.
