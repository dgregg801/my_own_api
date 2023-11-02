import express from "express";
import productsRouter from "./products.route";


const router = express.Router();


router.use("/products", productsRouter);

router.get("/test", (req, res) => {
  res.send("working");
});



export default router;
