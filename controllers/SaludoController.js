
const SaludoController = {
    saludar: (req, res) => {
        res.send("Hello World");
    },
    despedir: (req, res) => {
        res.send("Bye World");
    }
}

export default SaludoController;