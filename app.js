const express = requiere('express');
const bodyParser = require('body-parser')
const productoRoutes = requiere('./routes/productsRoutes')

const app = express();
const PORT = 3000

app.use(bodyParser.json());

app.use('/products', productoRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor'});
});

app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost${POST}`);
});