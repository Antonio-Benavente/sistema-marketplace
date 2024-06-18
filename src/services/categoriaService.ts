import { PrismaClient, categorias_producto } from "@prisma/client";
import { ICategoria } from "../models/categoria";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaCategoria, toPrismaCategoria } from "../mappers/categoriaMapper";

const prisma = new PrismaClient();

export const insertarCategoria = async (categoria: ICategoria) => {
    console.log('categoriaService::insertarCategoria');
    await prisma.categorias_producto.create({
        data: toPrismaCategoria(categoria)
    });
    return RESPONSE_INSERT_OK;
}

export const listarCategorias = async () => {
    console.log('categoriaService::listarCategorias');
    const categorias_producto: categorias_producto[] = await prisma.categorias_producto.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return categorias_producto.map((categoria: categorias_producto)=> fromPrismaCategoria(categoria));
}

export const obtenerCategoria = async (idCategoria: number) => {
    console.log('categoriaService::obtenerCategoria',idCategoria);
    
    const categoria: categorias_producto =  await prisma.categorias_producto.findUnique({
        where: {
            id_categoria: idCategoria,
            estado_auditoria: '1'
        }
    });

    return fromPrismaCategoria(categoria);
}

export const modificarCategoria = async (idCategoria: number, categoria:ICategoria) => {
    console.log('categoriaService::modificarCategoria',idCategoria,categoria);

    await prisma.categorias_producto.update({
        data: toPrismaCategoria(categoria),
        where:{
            id_categoria: idCategoria
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const eliminarCategoria = async (idCategoria: number) => {
    console.log('categoriaService::eliminarCategoria',idCategoria);

    await prisma.categorias_producto.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_categoria: idCategoria
        }
    });
    
    return RESPONSE_DELETE_OK;
}