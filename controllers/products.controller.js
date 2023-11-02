import query from "../config/connection";

async function getOne(id) {
    return query("SELECT * FROM orders WHERE productID = ?", [id]);
}

async function getAll() {
    return query("SELECT * FROM orders");
}

async function addProduct(newProductInfo) {
    return query("INSERT INTO orders SET ?", [newProductInfo]);
}

async function updateProduct(id, updatedProductInfo) {
    return query("UPDATE orders SET ? WHERE productID = ?", [updatedProductInfo, id]);
}

async function deleteProduct(id) {
    return query("DELETE FROM orders WHERE productID = ?", [id]);
}

export default {
    getOne, 
    getAll, 
    addProduct, 
    updateProduct, 
    deleteProduct
}