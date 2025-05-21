const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up product routes
app.use('/api/products', productsRoutes);

// Default route for handling 404 errors
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});