const express = require ('express')
const router = express.Router();
const productoController = require('../controllers/productsController')

router.get('/', productoController.ObtenerProductos);
router.post('/', productoController.CrearProducto);
router.put('/:id', productoController.actualizarProducto);
router.delete('./:id', productoController.eliminarProducto);

module.exports = router; 