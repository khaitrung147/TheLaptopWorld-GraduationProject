import express from "express";
import {
  getOrder,
  createOrder,
  getOrderById,
  deleteOrderById,
  updateOrderById,
} from "../controllers/order.js";

const router = express.Router();

router.get("/", getOrder);

router.post("/", createOrder);

router.get("/:id", getOrderById);

router.delete("/:id", deleteOrderById);

router.patch("/:id", updateOrderById);
export default router;