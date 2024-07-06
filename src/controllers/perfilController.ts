import { Request, Response } from "express";
import * as perfilService from "../services/perfilService";
import { ResponseModel } from "../models/ResponseModels";
import { insertarPerfilSchema, modificarPerfilSchema } from "../schemas/perfilSchema";

export const insertarPerfil = async (req: Request, res: Response) => {
    try {
        const { error } = insertarPerfilSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await perfilService.insertarPerfil(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarPerfiles = async (req: Request, res: Response) => {
    try {
        const perfiles = await perfilService.listarPerfiles();
        res.status(200).json(ResponseModel.success(perfiles));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerPerfil = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const perfil = await perfilService.obtenerPerfil(Number(id));
        res.status(200).json(ResponseModel.success(perfil));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarPerfil = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { error } = modificarPerfilSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await perfilService.modificarPerfil(Number(id),req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarPerfil = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await perfilService.eliminarPerfil(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}