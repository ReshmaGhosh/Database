// product route

import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
} from "../controllers/products";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);

export default router;
