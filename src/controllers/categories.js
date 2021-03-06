const categoryModels = require('../models/categories')
const helpers = require('../helpers/helpers')

const categories = {
  getCategoryById: (req, res) => {
    const id = req.params.id
    categoryModels.getCategoryById(id)
      .then((result) => {
        if (result != '') {
          helpers.response(res, result, 200, null)
        } else {
          helpers.response(res, 'Kategori tidak ditemukan', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getAllcategory: (req, res) => {
    const search = req.query.search
    const sort = req.query.sort
    const order = req.query.order
    const page = req.query.page
    const limit = req.query.limit

    categoryModels.getAllcategory(search, sort, order, page, limit)
      .then((result) => {
        if (result != '') {
          helpers.response(res, result, 200, null)
        } else {
          helpers.response(res, 'Kategori tidak ditemukan', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateCategory: (req, res) => {
    const id = req.params.id
    const { nameCategory } = req.body
    const data = {
      nameCategory
    }
    categoryModels.updateCategory(id, data)
      .then((result) => {
        const resultCategories = result
        console.log(result)
        helpers.response(res, resultCategories, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteCategory: (req, res) => {
    const id = req.params.id
    categoryModels.deleteCategory(id)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertCategory: (req, res) => {
    const { nameCategory } = req.body
    const data = {
      nameCategory
    }
    categoryModels.insertCategory(data)
      .then((result) => {
        console.log(result)
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = categories
