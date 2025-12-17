import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/saludar", (req, res) => {
    res.send("Hello World");
});

app.get("/despedir", (req, res) => {
    res.send("Bye World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});