class ProductsController {
    constructor() {
        this.products = require('../data/products.json'); // Load products data from JSON file
    }

    // Method to get all products
    getProducts(req, res) {
        res.status(200).json(this.products); // Respond with the list of products
    }

    // Method to create a new product
    createProduct(req, res) {
        const newProduct = req.body; // Get the new product data from the request body
        newProduct.id = this.products.length + 1; // Assign a new ID based on the current length of the products array
        this.products.push(newProduct); // Add the new product to the products array
        this.saveProducts(); // Save the updated products array to the JSON file
        res.status(201).json(newProduct); // Respond with the created product
    }

    // Method to update an existing product
    updateProduct(req, res) {
        const { id } = req.params; // Get the product ID from the request parameters
        const index = this.products.findIndex(product => product.id == id); // Find the index of the product to update

        if (index === -1) {
            return res.status(404).json({ message: 'Product not found' }); // Respond with an error if the product is not found
        }

        const updatedProduct = { ...this.products[index], ...req.body }; // Merge the existing product with the updated data
        this.products[index] = updatedProduct; // Update the product in the array
        this.saveProducts(); // Save the updated products array to the JSON file
        res.status(200).json(updatedProduct); // Respond with the updated product
    }

    // Method to delete a product
    deleteProduct(req, res) {
        const { id } = req.params; // Get the product ID from the request parameters
        const index = this.products.findIndex(product => product.id == id); // Find the index of the product to delete

        if (index === -1) {
            return res.status(404).json({ message: 'Product not found' }); // Respond with an error if the product is not found
        }

        this.products.splice(index, 1); // Remove the product from the array
        this.saveProducts(); // Save the updated products array to the JSON file
        res.status(204).send(); // Respond with no content status
    }

    // Helper method to save products to the JSON file
    saveProducts() {
        const fs = require('fs');
        fs.writeFileSync('./src/data/products.json', JSON.stringify(this.products, null, 2)); // Write the products array to the JSON file
    }
}

module.exports = new ProductsController(); // Export an instance of the ProductsController class