import express from "express";
import {
  getProducts,
  createProduct,
  getById,
  deleteById,
  updateById,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:id", getById);

router.delete("/:id", deleteById);

router.patch("/:id", updateById);
export default router;
