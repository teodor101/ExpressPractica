import { Router } from "express";
import ProductoController from "../controllers/ProductoController.js";

const router = Router();



router.get("/productos", ProductoController.getProductos);

router.post("/productos" , ProductoController.crearProducto);

export default router;