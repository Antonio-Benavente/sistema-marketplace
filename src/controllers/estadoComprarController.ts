import { Request, Response } from "express";
import * as estadoCompraService from "../services/estadoCompraService";
import { ResponseModel } from "../models/ResponseModels";
import { insertarEstadoCompraSchema, modificarEstadoCompraSchema } from "../schemas/estadoCompraSchema";

export const insertarEstadoCompra = async (req: Request, res: Response) => {
    try {
        const { error } = insertarEstadoCompraSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await estadoCompraService.insertarEstadoCompra(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarEstadosCompras = async (req: Request, res: Response) => {
    try {
        const estadosCompras = await estadoCompraService.listarEstadosCompras();
        res.status(200).json(ResponseModel.success(estadosCompras));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerEstadoCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const estadoCompra = await estadoCompraService.obtenerEstadoCompra(Number(id));
        res.status(200).json(ResponseModel.success(estadoCompra));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}


export const modificarEstadoCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { error } = modificarEstadoCompraSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await estadoCompraService.modificarEstadoCompra(Number(id),req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarEstadoCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await estadoCompraService.eliminarEstadoCompra(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}