import { Router } from "express";
import SaludoController from "../controllers/SaludoController.js";

const router = Router();

router.get("/saludar", SaludoController.saludar);
router.get("/despedir", SaludoController.despedir);

export default router;