import { categorias_producto } from "@prisma/client";
import { ICategoria } from "../models/categoria";

export const fromPrismaCategoria = (categoria: categorias_producto): any=> ({
    idCategoria: categoria.id_categoria,
    nombre: categoria.nombre
});

export const toPrismaCategoria = (categoria: ICategoria): any => ({
    nombre: categoria.nombre
})