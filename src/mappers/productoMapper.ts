import { productos } from "@prisma/client";
import { IProducto } from "../models/producto";

export const fromPrismaProducto = (producto: productos): any=> ({
    idProducto: producto.id_producto,
    categoria: producto.id_categoria,
    usuario: producto.id_usuario,
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: producto.precio,
    stock: producto.stock
})

export const toPrismaProducto = (producto: IProducto): any => ({
    id_categoria: producto.categoria,
    id_usuario: producto.usuario,
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: producto.precio,
    stock: producto.stock 
})