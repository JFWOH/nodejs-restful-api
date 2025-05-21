class Product {
    constructor(id, name, price, description) {
        this.id = id; // Unique identifier for the product
        this.name = name; // Name of the product
        this.price = price; // Price of the product
        this.description = description; // Description of the product
    }
}

module.exports = Product; // Export the Product class for use in other modules