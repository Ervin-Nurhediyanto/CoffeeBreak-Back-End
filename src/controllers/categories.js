const categoryModels = require('../models/category')
const helpers = require('../helpers/helpers')

const categories = {
    getCategoryById: (req, res) => {
        const id = req.params.id;
        categoryModels.getCategoryById(id)
            .then((result) => {
                resultCategories = result;
                if (resultCategories != '') {
                    helpers.response(res, resultCategories, 200, null)
                } else {
                    helpers.response(res, 'Kategori tidak ditemukan', 200, null)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getAllcategories: (req, res) => {
        const search = req.query.search
        const sort = req.query.sort
        const order = req.query.order

        categoryModels.getAllcategories(search, sort, order)
            .then((result) => {
                resultCategories = result;
                helpers.response(res, resultCategories, 200, null)

            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateCategories: (req, res) => {
        const id = req.params.id
        const { nameCategory } = req.body
        const data = {
            nameCategory
        }
        categoryModels.updateCategories(id, data)
            .then((result) => {
                const resultCategories = result;
                console.log(result)
                helpers.response(res, resultCategories, 200, null)

            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteCategories: (req, res) => {
        const id = req.params.id
        categoryModels.deleteCategories(id)
            .then((result) => {
                resultCategories = result;
                helpers.response(res, resultCategories, 200, null);
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertCategories: (req, res) => {
        const { nameCategories } = req.body
        const data = {
            nameCategories
        }
        categoryModels.insertCategories(data)
            .then((result) => {
                const resultCategories = result;
                console.log(result)
                helpers.response(res, resultCategories, 200, null);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

module.exports = categories