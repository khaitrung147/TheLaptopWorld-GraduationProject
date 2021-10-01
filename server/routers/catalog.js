import e from "express";
import express from "express";
import {
  getCatalog,
  createCatalog,
  deleteById,
  getById,
  updateById,
} from "../controllers/catalog.js";
import { CatalogModel } from "../models/catalogModel.js";

const router = express.Router();

router.get("/", getCatalog);

router.post("/", createCatalog);

router.get("/withId/:id", getById);

router.delete("/withId/:id", deleteById);

router.patch("/withId/:id", updateById);
export default router;
