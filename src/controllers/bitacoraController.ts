import { Request, Response } from "express";
import * as bitacoraService from "../services/bitacoraService";
import { ResponseModel } from "../models/ResponseModels";
import { insertarBitacoraSchema, modificarBitacoraSchema } from "../schemas/bitacoraSchema";

export const insertarBitacora = async (req: Request, res: Response) => {
    try {
        const { error } = insertarBitacoraSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await bitacoraService.insertarBitacora(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarBitacoras = async (req: Request, res: Response) => {
    try {
        const bitacoras = await bitacoraService.listarBitacoras();
        res.status(200).json(ResponseModel.success(bitacoras));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerBitacora = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const bitacora = await bitacoraService.obtenerBitacora(Number(id));
        res.status(200).json(ResponseModel.success(bitacora));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarBitacora = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { error } = modificarBitacoraSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await bitacoraService.modificarBitacora(Number(id),req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarBitacora = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await bitacoraService.eliminarBitacora(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}