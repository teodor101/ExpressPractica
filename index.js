import express from "express";
import productosRouter from "./routes/productos.js";
import saludosRouter from "./routes/saludos.js";
import pkg from "pg";

const PORT = process.env.PORT || 3000
const app = express() //inicializamos express


const { Pool } = pkg;

app.use(express.json());
app.use("/saludos",saludosRouter)
app.use("/productos", productosRouter);

const db = new Pool({
  host: "db",
  user: "postgres",
  password: "123456",
  database: "postgres",
  port: 5432,
});

db.connect()
  .then(() => {
    console.log("Conectado a PostgreSQL");
  })
  .catch((err) => {
    console.error("Error de conexión:", err);
  });



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})