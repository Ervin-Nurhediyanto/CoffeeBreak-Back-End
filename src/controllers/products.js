const productModels = require('../models/products')
const helpers = require('../helpers/helpers')

const products = {
    getProductById: (req, res) => {
        const id = req.params.id;
        productModels.getProductById(id)
            .then((result) => {
                resultProducts = result;
                if (resultProducts != '') {
                    helpers.response(res, resultProducts, 200, null)
                } else {
                    helpers.response(res, 'Produk yang anda cari tidak ada', 200, null)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getAllproduct: (req, res) => {
        const search = req.query.search;
        const sort = req.query.sort;
        const limit = req.query.limit;

        // productModels.getAllproduct()
        // .then((result) => {
        //     resultProducts = result;
        //     helpers.response(res, resultProducts, 200, null)

        // })
        // .catch((err) => {
        //     console.log(err)
        // })

        if (search != "") {
            productModels.getProductBySearch(search)
                .then((result) => {
                    resultProducts = result;
                    helpers.response(res, resultProducts, 200, null)

                })
                .catch((err) => {
                    console.log(err)
                })
        } else if (sort != "") {
            productModels.getProductBySort(sort)
                .then((result) => {
                    resultProducts = result;
                    helpers.response(res, resultProducts, 200, null)

                })
                .catch((err) => {
                    console.log(err)
                })
        } else if (limit != "") {
            productModels.getProductByLimit(limit)
                .then((result) => {
                    resultProducts = result;
                    helpers.response(res, resultProducts, 200, null)

                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            productModels.getAllproduct()
                .then((result) => {
                    resultProducts = result;
                    helpers.response(res, resultProducts, 200, null)

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },

    updateProduct: (req, res) => {
        const id = req.params.id
        const { name, image, price, idCategory } = req.body
        const data = {
            name,
            image,
            price,
            idCategory
        }
        productModels.updateProduct(id, data)
            .then((result) => {
                const resultProducts = result;
                console.log(result)
                helpers.response(res, resultProducts, 200, null)

            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteProduct: (req, res) => {
        const id = req.params.id
        productModels.deleteProduct(id)
            .then((result) => {
                resultProducts = result;
                helpers.response(res, resultProducts, 200, null);
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertProduct: (req, res) => {
        const { name, image, price, idCategory } = req.body
        const data = {
            name,
            image,
            price,
            idCategory
        }
        productModels.insertProduct(data)
            .then((result) => {
                const resultProducts = result;
                console.log(result)
                helpers.response(res, resultProducts, 200, null);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

module.exports = products