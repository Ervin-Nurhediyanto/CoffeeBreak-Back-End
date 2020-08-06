const express = require('express');
const productController = require('../controllers/products')
const router = express.Router()

router
    .get('/:id', productController.getProductById)
    // .get('/search', productController.getProductBySearch)
    .get('/', productController.getAllproduct)
    .post('/', productController.insertProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

module.exports = router