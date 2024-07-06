import { insertarBitacora, listarBitacoras, obtenerBitacora, modificarBitacora, eliminarBitacora } from "../controllers/bitacoraController";
import { Router } from "express";

const router:Router = Router();

router.post('/',insertarBitacora);
router.get('/',listarBitacoras);
router.get('/:id',obtenerBitacora);
router.put('/:id',modificarBitacora);
router.patch('/:id',eliminarBitacora);

export default router;