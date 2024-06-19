import { eliminarCategoria, insertarCategoria, listarCategorias, modificarCategoria, obtenerCategoria } from "../controllers/categoriaController";
import { Router } from "express";

const router:Router = Router();

router.post('/',insertarCategoria);
router.get('/',listarCategorias);
router.get('/:id',obtenerCategoria);
router.put('/:id',modificarCategoria);
router.patch('/:id',eliminarCategoria);

export default router;