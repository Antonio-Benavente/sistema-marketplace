import { insertarDetalleCompra, listarDetallesCompras, obtenerDetalleCompra, modificarDetalleCompra, eliminarDetalleCompra } from "../controllers/detalleCompraController";
import { Router } from "express";

const router:Router = Router();

router.post('/', insertarDetalleCompra);
router.get('/', listarDetallesCompras);
router.get('/:id', obtenerDetalleCompra);
router.put('/:id', modificarDetalleCompra);
router.patch('/:id', eliminarDetalleCompra);

export default router;