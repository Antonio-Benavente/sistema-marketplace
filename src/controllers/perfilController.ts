import { Request, Response } from "express"
import * as perfilService from "../services/perfilService";

export const insertarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::insertarPerfil');
    try {
        const response = await perfilService.insertarPerfil(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const listarPerfiles = async (req: Request, res: Response) => {
    console.log('perfilController::listarPerfiles');
    try {
        const perfiles = await perfilService.listarPerfiles();
        res.status(200).json(perfiles);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const obtenerPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::obtenerPerfil');
    try {
        const { id } = req.params;
        const perfil = await perfilService.obtenerPerfil(Number(id))
        res.status(200).json(perfil);
    } catch (error) {
        res.status(500).json({error: error})
    }
}


export const modificarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::modificarPerfil');
    try {
        const { id } = req.params;
        const response = await perfilService.modificarPerfil(Number(id),req.body)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const eliminarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::eliminarPerfil');
    try {
        const { id } = req.params;
        const response = await perfilService.eliminarPerfil(Number(id));
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}