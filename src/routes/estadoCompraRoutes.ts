import { insertarEstadoCompra, listarEstadosCompras, obtenerEstadoCompra, modificarEstadoCompra, eliminarEstadoCompra } from "../controllers/estadoComprarController";
import { Router } from "express";

const router:Router = Router();

router.post('/',insertarEstadoCompra);
router.get('/',listarEstadosCompras);
router.get('/:id',obtenerEstadoCompra);
router.put('/:id',modificarEstadoCompra);
router.patch('/:id',eliminarEstadoCompra);

export default router;