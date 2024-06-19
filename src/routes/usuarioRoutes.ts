import { insertarUsuario } from "../controllers/usuarioController";
import { Router } from "express";

const router:Router = Router();

router.post('/',insertarUsuario);

export default router;