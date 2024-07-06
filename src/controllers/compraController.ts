import { Request, Response } from "express";
import * as compraService from "../services/compraService";
import { ResponseModel } from "../models/ResponseModels";
import { insertarCompraSchema, modificarCompraSchema } from "../schemas/compraSchema";

export const insertarCompra = async (req: Request, res: Response) => {
    try {
        const { error } = insertarCompraSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await compraService.insertarCompra(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarCompras = async (req: Request, res: Response) => {
    try {
        const compras = await compraService.listarCompras();
        res.status(200).json(ResponseModel.success(compras));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const compra = await compraService.obtenerCompra(Number(id));
        res.status(200).json(ResponseModel.success(compra));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { error } = modificarCompraSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await compraService.modificarCompra(Number(id),req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await compraService.eliminarCompra(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}