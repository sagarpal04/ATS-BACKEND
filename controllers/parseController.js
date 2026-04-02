// controllers/parseController.js
import "pdf-parse/worker";
import { PDFParse } from "pdf-parse";

export const parsePDF = async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }

        const parser = new PDFParse({ url });
        const result = await parser.getText();

        res.json({
            success: true,
            text: result.text
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to parse PDF" });
    }
};