import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const productos = [
    {
        nombre: "Producto 1",
        precio: 100
    },
    {
        nombre: "Producto 2",
        precio: 200
    },
    {
        nombre: "Producto 3",
        precio: 300
    }
]

app.get("/saludar", (req, res) => {
    res.send("Hello World");
});

app.get("/despedir", (req, res) => {
    res.send("Bye World");
});

app.get("/productos", (req, res) => {
    res.json(productos);
});

/*app.get("/productos/:id", (req, res) => {
    const { id } = req.params;
    const producto = productos.find((producto) => producto.id === id);
    res.json(producto);
});
*/

app.post("/productos", (req, res) => {
    const { nombre, precio } = req.body;
    const producto = { nombre, precio };
    productos.push(producto);
    res.json(producto);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});