import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import parseRoutes from "./routes/parseRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.use(express.json());

app.use("/api", parseRoutes);

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
