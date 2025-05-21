// Importing necessary modules
const express = require('express');
const ProductsController = require('../controllers/productsController');
const { validateProduct, validateProductUpdate } = require('../middleware/validation');

// Creating a router instance
const router = express.Router();

// Creating an instance of the ProductsController
const productsController = new ProductsController();

// Route for creating a new product
router.post('/', validateProduct, (req, res) => {
    productsController.createProduct(req, res);
});

// Route for retrieving all products
router.get('/', (req, res) => {
    productsController.getProducts(req, res);
});

// Route for updating an existing product
router.put('/:id', validateProductUpdate, (req, res) => {
    productsController.updateProduct(req, res);
});

// Route for deleting a product
router.delete('/:id', (req, res) => {
    productsController.deleteProduct(req, res);
});

// Exporting the router to be used in the app
module.exports = router;