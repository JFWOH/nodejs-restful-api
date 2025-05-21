const { body, validationResult } = require('express-validator');

// Middleware for validating product creation
exports.validateCreateProduct = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('price')
        .isNumeric()
        .withMessage('Price must be a number')
        .notEmpty()
        .withMessage('Price is required'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware for validating product updates
exports.validateUpdateProduct = [
    body('name')
        .optional()
        .isString()
        .withMessage('Name must be a string'),
    body('price')
        .optional()
        .isNumeric()
        .withMessage('Price must be a number'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];