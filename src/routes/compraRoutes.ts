import { insertarCompra, listarCompras, obtenerCompra, modificarCompra, eliminarCompra } from "../controllers/compraController";
import { Router } from "express";

const router:Router = Router();

router.post('/', insertarCompra);
router.get('/', listarCompras);
router.get('/:id', obtenerCompra);
router.put('/:id', modificarCompra);
router.patch('/:id', eliminarCompra);

export default router;