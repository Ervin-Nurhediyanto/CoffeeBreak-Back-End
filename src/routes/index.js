const express = require('express');
const productsRoutes = require('./products');
// const routerCategetory = require('./category')
// const routerHistory = require('./history')
const router = express.Router();

router
    .use('/products', productsRoutes);
// .use('/category',routerCategetory)
// .use('/hostory', routerHistory)

module.exports = router;