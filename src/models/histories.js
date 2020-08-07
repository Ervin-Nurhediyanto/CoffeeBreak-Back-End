const connection = require('../configs/db')
const { promise } = require('../configs/db')

const histories = {
    getHistoryById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM product INNER JOIN category ON product.idCategory = category.id INNER JOIN history ON history.idproduct = product.id WHERE history.id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getAllhistory: (search, sort, order, page, limit) => {
        return new Promise((resolve, reject) => {
            let searchHistory = '';
            let sortHistory = '';
            let pageHistory = '';

            if (search != null) {
                searchHistory = `WHERE product.name LIKE '%${search}%'`;
            }
            if (sort != null) {
                if (order != null) {
                    sortHistory = `ORDER BY ${sort} ${order}`
                } else {
                    sortHistory = `ORDER BY ${sort} ASC`
                }
            }
            if (page != null) {
                if (limit != null) {
                    let pageNumber = (page - 1) * limit
                    pageHistory = `LIMIT ${limit} OFFSET ${pageNumber}`
                } else {
                    let defaultPageNumber = (page - 1) * 3
                    pageHistory = `LIMIT 3 OFFSET ${defaultPageNumber}`
                }
            }

            connection.query(`SELECT *, product.price*history.countItem AS 'Total' FROM product INNER JOIN category ON product.idCategory = category.id INNER JOIN history ON history.idproduct = product.id ${searchHistory} ${sortHistory}`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updateHistory: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE history SET ? WHERE id = ?", [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteHistory: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM history WHERE id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertHistory: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO history SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}

module.exports = histories