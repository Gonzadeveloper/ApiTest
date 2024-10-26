let productos = [];
let nextId = 1;

//Get productos 
const ObtenerProductos = (req, res) => {
    res.json(productos);
}

// Crear Prudcto
const CrearProducto = (req, res) => {
    const { nombre, precio, stock } = req.body;

    if(!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
        return res.status(400).json({ message: 'el nombre no puede estar vacio'});
    }
    if(typeof precio !== 'number'){
        return res.status(400).json({ message: 'el precio debe ser un numero'});
    }

    const nuevoProducto = { id:nextId++, nombre, precio, stock};
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
};

//Actualizar producto
const actualizarProducto = (req, res) => {
    const { id } = req.params;
    const { nombre, precio, stock } = req.body;

    const producto = productos.find(p => p.id === parseInt(id));

    if(!producto) {
        return res.status(404).json({ message: 'producto no encontrado' });
    }

    if(nombre) producto.nombre = nombre;
    if(precio) producto.precio = precio;
    if(stock) producto.stock = stock;
    
    res.json(producto);
};

// Eliminar producto 
const eliminarProducto = (req, res) => {
    const { id } = req.params;
    const index = productos.findIndex(p => p.id === parseInt(id));

    if(index === -1){
        return res.status(404).json({ message: 'producto no encontrado' });
    }

    productos.slice(index, 1);
    res.status(204).send();

};

module.exports = {
    ObtenerProductos,
    CrearProducto,
    actualizarProducto,
    eliminarProducto 
}