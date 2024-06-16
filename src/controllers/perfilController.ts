import { Request, Response } from "express"
import * as perfilService from "../services/perfilService";
import { ResponseModel } from "../models/ResponseModels";

export const insertarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::insertarPerfil');
    try {
        const response = await perfilService.insertarPerfil(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarPerfiles = async (req: Request, res: Response) => {
    console.log('perfilController::listarPerfiles');
    try {
        const perfiles = await perfilService.listarPerfiles();
        res.status(200).json(ResponseModel.success(perfiles));
        where: {
            estado_auditoria: '1'
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::obtenerPerfil');
    try {
        const { id } = req.params;
        const perfil = await perfilService.obtenerPerfil(Number(id))
        res.status(200).json(ResponseModel.success(perfil));
        where: {
            estado_auditoria: '1'
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}


export const modificarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::modificarPerfil');
    try {
        const { id } = req.params;
        const response = await perfilService.modificarPerfil(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::eliminarPerfil');
    try {
        const { id } = req.params;
        const response = await perfilService.eliminarPerfil(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}