import productsController from "../controllers/products.controller"; 
import express from "express";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
        const { id } = req.params;

        let data;
        if (id) {
            data = await productsController.getOne(id);
        } else {
            data = await productsController.getAll();
        }

        res.json(data);
    } catch(err) {
        next(err);
    }
});

export default router;