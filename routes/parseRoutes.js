// routes/parseRoutes.js
import express from "express";
import { parsePDF } from "../controllers/parseController.js";

const router = express.Router();

router.post("/parse", parsePDF);

export default router;