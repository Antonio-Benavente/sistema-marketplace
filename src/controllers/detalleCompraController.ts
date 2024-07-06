import { Request, Response } from "express";
import * as detalleCompraService from "../services/detalleCompraService";
import { ResponseModel } from "../models/ResponseModels";
import { insertarCompraSchema, modificarCompraSchema } from "../schemas/compraSchema";
import { insertarDetalleCompraSchema, modificarDetalleCompraSchema } from "../schemas/detalleCompraSchema";

export const insertarDetalleCompra = async (req: Request, res: Response) => {
    try {
        const { error } = insertarDetalleCompraSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await detalleCompraService.insertarDetalleCompra(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarDetallesCompras = async (req: Request, res: Response) => {
    try {
        const detallesCompras = await detalleCompraService.listarDetallesCompras();
        res.status(200).json(ResponseModel.success(detallesCompras));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerDetalleCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const detalleCompra = await detalleCompraService.obtenerDetalleCompra(Number(id));
        res.status(200).json(ResponseModel.success(detalleCompra));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarDetalleCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { error } = modificarDetalleCompraSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await detalleCompraService.modificarDetalleCompra(Number(id),req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarDetalleCompra = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await detalleCompraService.eliminarDetalleCompra(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}