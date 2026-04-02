import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const scrapeJD = async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }

        const isLocal = process.env.NODE_ENV !== "production";

        let browser;

        // 🔥 LOCAL → use puppeteer
        if (isLocal) {
            const puppeteer = (await import("puppeteer")).default;

            browser = await puppeteer.launch({
                headless: true,
            });
        }
        // 🔥 PRODUCTION → use chromium
        else {
            browser = await puppeteerCore.launch({
                args: chromium.args,
                executablePath: await chromium.executablePath(),
                headless: chromium.headless,
            });
        }

        const page = await browser.newPage();

        // ✅ Speed optimization
        await page.setRequestInterception(true);
        page.on("request", (req) => {
            if (["image", "stylesheet", "font"].includes(req.resourceType())) {
                req.abort();
            } else {
                req.continue();
            }
        });

        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
        );

        await page.setViewport({ width: 1280, height: 800 });

        await page.goto(url, {
            waitUntil: "networkidle2",
            timeout: 60000,
        });

        await page.waitForSelector("body");

        const jdText = await page.evaluate(() => {
            return document.body.innerText;
        });

        await browser.close();

        if (!jdText || jdText.length < 200) {
            return res.json({
                success: false,
                error: "Could not extract JD",
            });
        }

        return res.json({
            success: true,
            text: jdText,
        });

    } catch (err) {
        console.error(err);

        return res.json({
            success: false,
            error: "Scraping failed",
        });
    }
};