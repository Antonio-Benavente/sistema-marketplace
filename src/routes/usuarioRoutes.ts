import { eliminarUsuario, insertarUsuario, listarUsuarios, modificarUsuario, obtenerUsuario } from "../controllers/usuarioController";
import { Router } from "express";

const router:Router = Router();

router.post('/', insertarUsuario);
router.get('/', listarUsuarios);
router.get('/:id', obtenerUsuario);
router.put('/:id', modificarUsuario);
router.patch('/:id', eliminarUsuario);

export default router;