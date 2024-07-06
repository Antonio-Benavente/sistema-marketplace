import { categorias, comentarios, perfiles, productos, usuarios } from "@prisma/client";
import { fromPrismaUsuario } from "./usuarioMapper";
import { fromPrismaProducto } from "./productoMapper";
import { IComentario } from "../models/comentario";

export const fromPrismaComentario = (comentario: comentarios, usuario: usuarios, producto: productos): any => ({
    idComentario: comentario.id_comentario,
    idUsuario: usuario.id_usuario,
    usuario: usuario.nombres + ' ' + usuario.apellido_paterno + ' ' + usuario.apellido_materno,
    idProducto: producto.id_producto,
    producto: producto.nombre,
    comentario: comentario.comentario,
    calificacion: comentario.calificacion
});

export const toPrismaComentario = (comentario: IComentario): any => ({
    id_usuario: comentario.usuario,
    id_producto: comentario.producto,
    comentario: comentario.comentario,
    calificacion: comentario.calificacion
});