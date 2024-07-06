import { Request, Response } from "express";
import * as comentarioService from "../services/comentarioService";
import { ResponseModel } from "../models/ResponseModels";
import { insertarComentarioSchema, modificarComentarioSchema } from "../schemas/comentarioSchema";

export const insertarComentario = async (req: Request, res: Response) => {
    try {
        const { error } = insertarComentarioSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await comentarioService.insertarComentario(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarComentarios = async (req: Request, res: Response) => {
    try {
        const comentarios = await comentarioService.listarComentarios();
        res.status(200).json(ResponseModel.success(comentarios));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerComentario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const comentario = await comentarioService.obtenerComentario(Number(id));
        res.status(200).json(ResponseModel.success(comentario));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarComentario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { error } = modificarComentarioSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await comentarioService.modificarComentario(Number(id),req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarComentario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await comentarioService.eliminarComentario(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}