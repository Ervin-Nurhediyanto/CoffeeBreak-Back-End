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

    getAllproduct: (search, sort, order, page, limit) => {
        return new Promise((resolve, reject) => {
            let searchProduct = '';
            let sortProduct = '';
            let pageProduct = '';

            if (search != null) {
                searchProduct = `WHERE product.name LIKE '%${search}%'`;
            }
            if (sort != null) {
                if (order != null) {
                    sortProduct = `ORDER BY ${sort} ${order}`
                } else {
                    sortProduct = `ORDER BY ${sort} ASC`
                }
            }
            if (page != null) {
                if (limit != null) {
                    let pageNumber = (page - 1) * limit
                    pageProduct = `LIMIT ${limit} OFFSET ${pageNumber}`
                } else {
                    let defaultPageNumber = (page - 1) * 3
                    pageProduct = `LIMIT 3 OFFSET ${defaultPageNumber}`
                }
            }

            connection.query(`SELECT * FROM category INNER JOIN product ON product.idCategory = category.id ${searchProduct} ${sortProduct} ${pageProduct}`, (err, result) => {
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