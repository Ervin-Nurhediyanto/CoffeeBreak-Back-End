const connection = require('../configs/db')
const { promise } = require('../configs/db')

const products = {
    getProductById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM category INNER JOIN product ON product.idCategory = category.id WHERE product.id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },


    getAllproduct: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM category INNER JOIN product ON product.idCategory = category.id", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getProductBySearch: (search) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM category INNER JOIN product ON product.idCategory = category.id WHERE product.name LIKE '%${search}%'`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getProductBySort: (sort) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM category INNER JOIN product ON product.idCategory = category.id ORDER BY ${sort} ASC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getProductByLimit: (limit) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM category INNER JOIN product ON product.idCategory = category.id LIMIT ${limit}`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateProduct: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE product SET ? WHERE id = ?", [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM product WHERE id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertProduct: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO product SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}

module.exports = products