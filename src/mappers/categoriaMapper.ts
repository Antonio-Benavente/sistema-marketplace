import { categorias } from "@prisma/client";
import { ICategoria } from "../models/categoria";

export const fromPrismaCategoria = (categoria: categorias): any=> ({
    idCategoria: categoria.id_categoria,
    nombre: categoria.nombre
});

export const toPrismaCategoria = (categoria: ICategoria): any => ({
    nombre: categoria.nombre
})