import express from "express";

import {
  createAccount,
  getCustomers,
  deleteById,
  getById,
  updateById,
} from "../controllers/customers.js";

const router = express.Router();

router.get("/", getCustomers);

router.post("/", createAccount);

router.get("/:id", getById);

router.delete("/:id", deleteById);

router.patch("/:id", updateById);
export default router;
