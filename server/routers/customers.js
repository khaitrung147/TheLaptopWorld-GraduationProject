import express, { Router } from "express";
import passport from "passport";
import JWT from "jsonwebtoken";
import {
  createAccount,
  getCustomers,
  deleteById,
  getById,
  updateById,
  login,
} from "../controllers/customers.js";

const router = express.Router();

router.get("/", getCustomers);

router.post("/", createAccount);

router.get("/:id", getById);

router.delete("/:id", deleteById);

router.patch("/:id", updateById);

router.post("/login", login);
export default router;
