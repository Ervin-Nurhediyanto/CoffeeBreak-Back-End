const connection = require('../configs/db')
const { promise } = require('../configs/db')

const histories = {
    gethistoryById: (id) => {
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

    getAllhistory: (search, sort, order) => {
        return new Promise((resolve, reject) => {
            let searchhistory = '';
            let sorthistory = '';

            if (search != null) {
                searchhistory = `WHERE product.name LIKE '%${search}%'`;
            }
            if (sort != null) {
                if (order != null) {
                    sorthistory = `ORDER BY ${sort} ${order}`
                } else {
                    sorthistory = `ORDER BY ${sort} ASC`
                }
            }

            connection.query(`SELECT *, product.price*history.countItem AS 'Total' FROM product INNER JOIN category ON product.idCategory = category.id INNER JOIN history ON history.idproduct = product.id ${searchhistory} ${sorthistory}`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updatehistory: (id, data) => {
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
    deletehistory: (id) => {
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
    inserthistory: (data) => {
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