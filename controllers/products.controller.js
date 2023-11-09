import query from "../config/connection";

async function getOne(order_id) {
    return query("SELECT * FROM orders WHERE order_id = ?", [order_id]);
}

async function getAll() {
    return query("SELECT * FROM orders");
}

async function addProduct(newProductInfo) {
    return query("INSERT INTO orders SET ?", [newProductInfo]);
}

async function updateProduct(order_id, updatedProductInfo) {
    return query("UPDATE orders SET ? WHERE order_id = ?", [updatedProductInfo, order_id]);
}

async function deleteProduct(order_id) {
    return query("DELETE FROM orders WHERE order_id = ?", [order_id]);
}

export default {
    getOne, 
    getAll, 
    addProduct, 
    updateProduct, 
    deleteProduct
}