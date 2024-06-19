import { Request, Response } from "express"
import * as usuarioService from "../services/usuarioService";
import { ResponseModel } from "../models/ResponseModels";

export const insertarUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::insertarUsuario');
    try {
        const response = await usuarioService.insertarUsuario(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}