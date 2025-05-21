# Node.js RESTful API for Product Management

This project is a simple RESTful API built with Node.js and Express to manage products. It allows users to create, read, update, and delete product entries. The API is designed to be easy to use and test with tools like Insomnia.

## Project Structure

```
nodejs-restful-api
├── src
│   ├── app.js                  # Entry point of the application
│   ├── controllers             # Contains the logic for handling requests
│   │   └── productsController.js
│   ├── routes                  # Defines the API routes
│   │   └── products.js
│   ├── models                  # Defines the data structure
│   │   └── product.js
│   ├── middleware              # Contains validation middleware
│   │   └── validation.js
│   └── data                   # Simple data store for products
│       └── products.json
├── package.json                # NPM configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nodejs-restful-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   node src/app.js
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### Create a Product
- **Endpoint:** `POST /products`
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "description": "Product Description"
  }
  ```

### Get All Products
- **Endpoint:** `GET /products`

### Update a Product
- **Endpoint:** `PUT /products/:id`
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "price": 150,
    "description": "Updated Product Description"
  }
  ```

### Delete a Product
- **Endpoint:** `DELETE /products/:id`

## Testing with Insomnia

You can use Insomnia to test the API endpoints. Create requests for each of the endpoints listed above, and ensure to set the appropriate HTTP method and request body where applicable.

## License

This project is licensed under the MIT License.