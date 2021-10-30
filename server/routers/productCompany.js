import express from "express";
import {
  getProductCompany,
  createProductCompany,
  getById,
  deleteById,
  updateById,
} from "../controllers/productCompany.js";

const router = express.Router();

router.get("/", getProductCompany);

router.post("/", createProductCompany);

router.get("/:id", getById);

router.delete("/:id", deleteById);

router.patch("/:id", updateById);
export default router;