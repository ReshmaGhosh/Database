// product route

import { Router } from "express";
import {
  createProducts,
  getAllProducts,
  getProductById,
} from "../controllers/products";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createProducts);

export default router;
