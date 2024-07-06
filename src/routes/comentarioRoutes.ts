import { insertarComentario, listarComentarios, obtenerComentario, modificarComentario, eliminarComentario } from "../controllers/comentarioController";
import { Router } from "express";

const router:Router = Router();

router.post('/',insertarComentario);
router.get('/',listarComentarios);
router.get('/:id',obtenerComentario);
router.put('/:id',modificarComentario);
router.patch('/:id',eliminarComentario);

export default router;