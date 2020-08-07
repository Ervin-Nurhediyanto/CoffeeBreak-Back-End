const express = require('express')
const productsRoutes = require('./products')
const historiesRouters = require('./histories')
const categoriesRouters = require('./categories')
// const routerCategetory = require('./category')
// const routerHistory = require('./history')
const router = express.Router();

router
    .use('/products', productsRoutes)
    .use('/histories', historiesRouters)
    .use('/categories', categoriesRouters)
// .use('/category',routerCategetory)
// .use('/hostory', routerHistory)

module.exports = router;