import { PrismaClient } from "@prisma/client";
import { fromPrismaCompra, toPrismaCompra } from "../mappers/compraMapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { ICompra } from "../models/compra";

const prisma = new PrismaClient();

export const insertarCompra = async (compra: ICompra) => {
    await prisma.compras.create({
        data: toPrismaCompra(compra)
    });
    return RESPONSE_INSERT_OK;
};

export const listarCompras = async () => {
    const compras: any[] = await prisma.compras.findMany({
        include: {
            usuarios: true,
            estados_compra: true
        },
        where: {
            estado_auditoria: '1'
        }
    });
    return compras.map((compra: any)=> fromPrismaCompra(compra, compra.usuarios, compra.estados_compra));
}

export const obtenerCompra = async (idCompra: number) => {
    const compra: any =  await prisma.compras.findUnique({
        include: {
            usuarios: true,
            estados_compra: true
        },
        where: {
            id_compra: idCompra,
            estado_auditoria: '1'
        }
    });
    return fromPrismaCompra(compra, compra.usuarios, compra.estados_compra);
}

export const modificarCompra = async (idCompra: number, compra: ICompra) => {
    await prisma.compras.update({
        data: toPrismaCompra(compra),
        where:{
            id_compra: idCompra
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarCompra = async (idCompra: number) => {
    await prisma.compras.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_compra: idCompra
        }
    });
    return RESPONSE_DELETE_OK;
}