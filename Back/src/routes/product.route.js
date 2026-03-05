import { Router } from "express";
import ProductController from "../controllers/product.js";

const ProductRouter = Router();

ProductRouter.get("/", ProductController.getAllProducts);
ProductRouter.get("/inactivos", ProductController.getAllProductsInactivos);
ProductRouter.get("/:id", ProductController.getProductById);
ProductRouter.post("/", ProductController.createProduct);
ProductRouter.put("/:id", ProductController.updateProduct);
ProductRouter.delete("/:id", ProductController.deleteProduct);
ProductRouter.post("/activate/:id", ProductController.activateProduct);

export default ProductRouter;
