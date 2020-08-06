const connection = require('../configs/db')

const category = {
    getProductById: (id) =>{
        return new Promise((resolve, reject) =>{
            connection.query("SELECT * FROM category WHERE id = ?", id, (err, result) =>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    getAllproduct: () =>{
        return new Promise((resolve, reject) =>{
            connection.query("SELECT * FROM product", (err, result) =>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    updateProduct: (id, data) =>{
        return new Promise((resolve, reject) =>{
            connection.query("UPDATE product SET ? WHERE id = ?", [data, id], (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    deleteProduct: (id) =>{
        return new Promise((resolve, reject) =>{
            connection.query("DELETE FROM product WHERE id = ?", id, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    insertProduct: (data) =>{
        console.log(data)
        return new Promise((resolve, reject) =>{
            connection.query("INSERT INTO product SET ?", data, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    }
}

module.exports = category