const historyModels = require('../models/histories')
const helpers = require('../helpers/helpers')

const histories = {
    getHistoryById: (req, res) => {
        const id = req.params.id;
        historyModels.getHistoryById(id)
            .then((result) => {
                resulthistories = result;
                if (resulthistories != '') {
                    helpers.response(res, resulthistories, 200, null)
                } else {
                    helpers.response(res, 'Pencarian tidak ditemukan', 200, null)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getAllhistory: (req, res) => {
        const search = req.query.search
        const sort = req.query.sort
        const order = req.query.order
        const date = req.query.date

        historyModels.getAllhistory(search, sort, order, date)
            .then((result) => {
                resulthistories = result;
                if (resulthistories != '') {
                    helpers.response(res, resulthistories, 200, null)
                } else {
                    helpers.response(res, 'Pencarian tidak ditemukan', 200, null)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },

    updateHistory: (req, res) => {
        const id = req.params.id
        const { idProduct, countItem, date } = req.body
        const data = {
            idProduct,
            countItem,
            date
        }
        historyModels.updateHistory(id, data)
            .then((result) => {
                const resulthistories = result;
                console.log(result)
                helpers.response(res, resulthistories, 200, null)

            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteHistory: (req, res) => {
        const id = req.params.id
        historyModels.deleteHistory(id)
            .then((result) => {
                resulthistories = result;
                helpers.response(res, resulthistories, 200, null);
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertHistory: (req, res) => {
        const { idProduct, countItem, date } = req.body
        const data = {
            idProduct,
            countItem,
            date
        }
        historyModels.insertHistory(data)
            .then((result) => {
                const resulthistories = result;
                console.log(result)
                helpers.response(res, resulthistories, 200, null);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

module.exports = histories