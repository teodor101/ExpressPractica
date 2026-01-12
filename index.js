import express from "express";
import productosRouter from "./routes/productos.js";
import saludosRouter from "./routes/saludos.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/productos", productosRouter);
app.use("/saludos", saludosRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});