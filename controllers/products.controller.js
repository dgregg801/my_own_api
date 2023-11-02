import query from "../config/connection";

async function getOne(id) {
    return query("SELECT * FROM orders WHERE order_id = ?", [id]);
}

async function getAll() {
    return query("SELECT * FROM orders");
}

async function addProduct(newProductInfo) {
    return query("INSERT INTO orders SET ?", [newProductInfo]);
}

async function updateProduct(id, updatedProductInfo) {
    return query("UPDATE orders SET ? WHERE order_id = ?", [updatedProductInfo, id]);
}

async function deleteProduct(id) {
    return query("DELETE FROM orders WHERE order_id = ?", [id]);
}

export default {
    getOne, 
    getAll, 
    addProduct, 
    updateProduct, 
    deleteProduct
}