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

router.get("/withId/:id", getById);

router.delete("/withId/:id", deleteById);

router.patch("/withId/:id", updateById);
export default router;
