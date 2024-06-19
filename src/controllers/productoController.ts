import { Request, Response } from "express";
import * as productoService from "../services/productoService";
import { ResponseModel } from "../models/ResponseModels";

export const insertarProducto = async (req: Request, res: Response) => {
    try {
        const response = await productoService.insertarProducto(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarProductos = async (req: Request, res: Response) => {
    try {
        const productos = await productoService.listarProductos();
        res.status(200).json(ResponseModel.success(productos));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const producto = await productoService.obtenerProducto(Number(id));
        res.status(200).json(ResponseModel.success(producto));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}


export const modificarProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await productoService.modificarProducto(Number(id),req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await productoService.eliminarProducto(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}