import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Akanni Portfolio Backend Running");
});

app.get("/projects", (req, res) => {
    res.json([
        {
            name: "Startup Instagram Management",
            category: "Social Media",
            description: "Instagram page management for a startup brand"
        },
        {
            name: "Creator Portfolio Website",
            category: "Website",
            description: "Portfolio website designed for a content creator"
        },
        {
            name: "Small Business Branding",
            category: "Branding",
            description: "Social media branding for a small business"
        }
    ]);
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log(name, email, message);

    res.json({
        success: true,
        message: "Message received successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});