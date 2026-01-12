
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

const ProductoController = {
    getProductos: (req, res) => {
        res.json(productos);
    },
    crearProducto: (req, res) => {
        const { nombre, precio } = req.body;
        const producto = { nombre, precio };
        productos.push(producto);
        res.json(producto);
    }
}


export default ProductoController;