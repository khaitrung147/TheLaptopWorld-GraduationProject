import express from "express";
import {
  getComment,
  createComment,
  getById,
  deleteById,
  updateById,
} from "../controllers/comment.js";

const router = express.Router();

router.get("/", getComment);

router.post("/", createComment);

router.get("/:id", getById);

router.delete("/:id", deleteById);

router.patch("/:id", updateById);
export default router;