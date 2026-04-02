import express from "express";
import { scrapeJD } from "../controllers/jdScraper.js";

const router = express.Router();

router.post("/scrape-jd", scrapeJD);

export default router;