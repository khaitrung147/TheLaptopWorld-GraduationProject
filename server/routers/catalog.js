import express from 'express';
import { getCatalog, createCatalog } from '../controllers/catalog.js';

const router = express.Router();

router.get("/", getCatalog);

router.post("/", createCatalog);

export default router