import productsController from "../controllers/products.controller"; 
import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get("/:order_id?", async (req, res, next) => {
    try {
        const { order_id } = req.params;

        let data;
        if (order_id) {
            data = await productsController.getOne(order_id);
        } else {
            data = await productsController.getAll();
        }

        res.json(data);
    } catch(err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newProduct = {...req.body, order_id:uuidv4()};
        const data = await productsController.addProduct(newProduct);
        res.json(data);
    } catch(err) {
        next(err);
    }
});

router.put("/:order_id", async (req, res, next) => {
    try {
        const { order_id } = req.params;
        const updatedProduct = req.body;
        const data = productsController.updateProduct(order_id, updatedProduct);
        console.log(updatedProduct);
        //res.json(data);
    } catch(err) {
        next(err);
    }
});

router.delete("/:order_id", async (req, res, next) => {
    try {
        const { order_id } = req.params;
        const data = await productsController.deleteProduct(order_id);
        res.json(data);
    } catch(err) {
        next(err);
    }
});

export default router;