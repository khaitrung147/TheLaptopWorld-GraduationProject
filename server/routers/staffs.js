import e from "express";
import express from "express";
import {
  getStaff,
  createAccount,
  deleteById,
  getById,
  updateById,
  login,
} from "../controllers/staffs.js";

const router = express.Router();

router.get("/", getStaff);

router.post("/", createAccount);

router.get("/:id", getById);

router.delete("/:id", deleteById);

router.patch("/:id", updateById);

router.post("/login", login);
export default router;
