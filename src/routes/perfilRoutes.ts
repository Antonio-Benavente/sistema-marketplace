import { eliminarPerfil, insertarPerfil, listarPerfiles, modificarPerfil, obtenerPerfil } from "../controllers/perfilController";
import { Router } from "express";

const router:Router = Router();

router.post('/',insertarPerfil);
router.get('/',listarPerfiles);
router.get('/:id',obtenerPerfil);
router.put('/:id',modificarPerfil);
router.patch('/:id',eliminarPerfil);

export default router;