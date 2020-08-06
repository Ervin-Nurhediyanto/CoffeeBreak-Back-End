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


    // getAllproduct: (search) => {
    //     return new Promise((resolve, reject) => {
    //         if (search != "") {
    //             connection.query(`SELECT * FROM category INNER JOIN product ON product.idCategory = category.id WHERE product.name LIKE '%${search}%'`, (err, result) => {
    //                 if (!err) {
    //                     resolve(result)
    //                 } else {
    //                     reject(new Error(err))
    //                 }
    //             })
    //         } else {
    //             connection.query(`SELECT * FROM category INNER JOIN product ON product.idCategory = category.id`, (err, result) => {
    //                 if (!err) {
    //                     resolve(result)
    //                 } else {
    //                     reject(new Error(err))
    //                 }
    //             })
    //         }

    //     })
    // },

    getAllproduct: (search, sort, order) => {
        return new Promise((resolve, reject) => {
            let searchProduct = '';
            let sortProduct = '';

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

            connection.query(`SELECT * FROM category INNER JOIN product ON product.idCategory = category.id ${searchProduct} ${sortProduct}`, (err, result) => {
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