import { estados_compra, PrismaClient } from "@prisma/client";
import { fromPrismaEstadoCompra, toPrismaEstadoCompra } from "../mappers/estadoCompraMapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { IEstadoCompra } from "../models/estadoCompra";

const prisma = new PrismaClient();

export const insertarEstadoCompra = async (estadoCompra: IEstadoCompra) => {
    await prisma.estados_compra.create({
        data: toPrismaEstadoCompra(estadoCompra)
    });
    return RESPONSE_INSERT_OK;
};

export const listarEstadosCompras = async () => {
    const estadosCompras: estados_compra[] = await prisma.estados_compra.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return estadosCompras.map((estadoCompra: estados_compra)=> fromPrismaEstadoCompra(estadoCompra));
}

export const obtenerEstadoCompra = async (idEstadoCompra: number) => {
    const estadoCompra: estados_compra =  await prisma.estados_compra.findUnique({
        where: {
            id_estado: idEstadoCompra
        }
    });
    return fromPrismaEstadoCompra(estadoCompra);
}

export const modificarEstadoCompra = async (idEstadoCompra: number, estadoCompra: IEstadoCompra) => {
    await prisma.estados_compra.update({
        data: toPrismaEstadoCompra(estadoCompra),
        where:{
            id_estado: idEstadoCompra
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarEstadoCompra = async (idEstadoCompra: number) => {
    await prisma.estados_compra.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_estado: idEstadoCompra
        }
    });
    return RESPONSE_DELETE_OK;
}