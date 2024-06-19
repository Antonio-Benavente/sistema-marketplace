import { PrismaClient, productos } from "@prisma/client";
import { IProducto } from "../models/producto";
import { fromPrismaProducto, toPrismaProducto } from "../mappers/productoMapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

export const insertarProducto = async (producto: IProducto) => {
    await prisma.productos.create({
        data: toPrismaProducto(producto)
    });
    return RESPONSE_INSERT_OK;
}

export const listarProductos = async () => {
    const productos : productos[] = await prisma.productos.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return productos.map((producto: productos)=> fromPrismaProducto(producto));
}

export const obtenerProducto = async (idProducto: number) => {
    const producto: productos =  await prisma.productos.findUnique({
        where: {
            id_producto: idProducto,
            estado_auditoria: '1'
        }
    });
    return fromPrismaProducto(producto);
}

export const modificarProducto = async (idProducto: number, producto:IProducto) => {
    await prisma.productos.update({
        data: toPrismaProducto(producto),
        where:{
            id_producto: idProducto
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarProducto = async (idProducto: number) => {
    await prisma.productos.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_producto: idProducto
        }
    });
    return RESPONSE_DELETE_OK;
}