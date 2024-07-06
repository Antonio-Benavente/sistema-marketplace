import { compras, estados_compra, PrismaClient } from "@prisma/client";
import { fromPrismaDetalleCompra, toPrismaDetalleCompra } from "../mappers/detalleCompraMapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { IDetalleCompra } from "../models/detalleCompra";

const prisma = new PrismaClient();

export const insertarDetalleCompra = async (detalleCompra: IDetalleCompra) => {
    await prisma.detalle_compra.create({
        data: toPrismaDetalleCompra(detalleCompra)
    });
    return RESPONSE_INSERT_OK;
};

export const listarDetallesCompras = async () => {
    const detallesCompras: any[] = await prisma.detalle_compra.findMany({
        include: {
            compras: true,
            productos: true
        },
        where: {
            estado_auditoria: '1'
        }
    });
    return detallesCompras.map((detalleCompra: any)=> fromPrismaDetalleCompra(detalleCompra, detalleCompra.compras, detalleCompra.productos));
}

export const obtenerDetalleCompra = async (idDetalleCompra: number) => {
    const detalleCompra: any =  await prisma.detalle_compra.findUnique({
        include: {
            compras: true,
            productos: true
        },
        where: {
            id_detalle: idDetalleCompra,
            estado_auditoria: '1'
        }
    });
    return fromPrismaDetalleCompra(detalleCompra, detalleCompra.compras, detalleCompra.productos);
}

export const modificarDetalleCompra = async (idDetalleCompra: number, detalleCompra: IDetalleCompra) => {
    await prisma.detalle_compra.update({
        data: toPrismaDetalleCompra(detalleCompra),
        where:{
            id_detalle: idDetalleCompra
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarDetalleCompra = async (idDetalleCompra: number) => {
    await prisma.detalle_compra.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_detalle: idDetalleCompra
        }
    });
    return RESPONSE_DELETE_OK;
}