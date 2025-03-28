const express = require("express");
const cors = require("cors");
const { fetchNumbers } = require("./api/fetchData");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 9876;
const WINDOW_SIZE = parseInt(process.env.WINDOW_SIZE, 10);

let numberWindow = [];

app.get("/", (req, res) => {
    res.send("Welcome to the Average Calculator Microservice. Use /numbers/:type");
});

app.get("/numbers/:type", async (req, res) => {
    const type = req.params.type;
    if (!["p", "f", "e", "r"].includes(type)) {
        return res.status(400).json({ error: "Invalid number type" });
    }

    const newNumbers = await fetchNumbers(type);
    numberWindow = [...new Set([...numberWindow, ...newNumbers])].slice(-WINDOW_SIZE);

    res.json({
        windowPrevState: numberWindow.slice(0, -newNumbers.length),
        windowCurrState: numberWindow,
        numbers: newNumbers,
        avg: numberWindow.length ? (numberWindow.reduce((a, b) => a + b, 0) / numberWindow.length).toFixed(2) : 0
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
