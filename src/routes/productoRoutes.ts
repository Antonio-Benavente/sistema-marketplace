import { eliminarProducto, insertarProducto, listarProductos, modificarProducto, obtenerProducto } from "../controllers/productoController";
import { Router } from "express";

const router:Router = Router();

router.post('/', insertarProducto);
router.get('/', listarProductos);
router.get('/:id', obtenerProducto);
router.put('/:id', modificarProducto);
router.patch('/:id', eliminarProducto);

export default router;