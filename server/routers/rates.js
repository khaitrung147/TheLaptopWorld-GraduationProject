import express from "express";
import {
  getRates,
  createRates,
  getById,
  updateById,
} from "../controllers/rates.js";

const router = express.Router();

router.get("/", getRates);

router.post("/", createRates);

router.get("/:id", getById);

router.patch("/:id", updateById);

export default router;
