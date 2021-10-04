import e from "express";
import express from "express";
import {
  getCatalog,
  createCatalog,
  deleteById,
  getById,
  updateById,
} from "../controllers/catalog.js";

const router = express.Router();

router.get("/", getCatalog);

router.post("/", createCatalog);

router.get("/:id", getById);

router.delete("/:id", deleteById);

router.patch("/:id", updateById);
export default router;
