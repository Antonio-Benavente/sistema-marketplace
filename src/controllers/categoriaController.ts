import { Request, Response } from "express"
import * as categoriaService from "../services/categoriaService";

export const insertarCategoria = async (req: Request, res: Response) => {
    console.log('categoriaController::insertarCategoria');
    try {
        const response = await categoriaService.insertarCategoria(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const listarCategorias = async (req: Request, res: Response) => {
    console.log('categoriaController::listarCategorias');
    try {
        const perfiles = await categoriaService.listarCategorias();
        res.status(200).json(perfiles);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const obtenerCategoria = async (req: Request, res: Response) => {
    console.log('categoriaController::obtenerCategoria');
    try {
        const { id } = req.params;
        const perfil = await categoriaService.obtenerCategoria(Number(id))
        res.status(200).json(perfil);
    } catch (error) {
        res.status(500).json({error: error})
    }
}


export const modificarCategoria = async (req: Request, res: Response) => {
    console.log('categoriaController::modificarCategoria');
    try {
        const { id } = req.params;
        const response = await categoriaService.modificarCategoria(Number(id),req.body)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const eliminarCategoria = async (req: Request, res: Response) => {
    console.log('categoriaController::eliminarCategoria');
    try {
        const { id } = req.params;
        const response = await categoriaService.eliminarCategoria(Number(id));
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}