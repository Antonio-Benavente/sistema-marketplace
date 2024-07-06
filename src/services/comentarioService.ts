import { PrismaClient } from "@prisma/client";
import { fromPrismaComentario, toPrismaComentario } from "../mappers/comentarioMapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { IComentario } from "../models/comentario";

const prisma = new PrismaClient();

export const insertarComentario = async (comentario: IComentario) => {
    await prisma.comentarios.create({
        data: toPrismaComentario(comentario)
    });
    return RESPONSE_INSERT_OK;
};

export const listarComentarios = async () => {
    const comentarios: any[] = await prisma.comentarios.findMany({
        include: {
            usuarios: true,
            productos: true
        },
        where: {
            estado_auditoria: '1'
        }
    });
    return comentarios.map((comentario: any)=> fromPrismaComentario(comentario, comentario.usuarios, comentario.productos));
}

export const obtenerComentario = async (idComentario: number) => {
    const comentario: any =  await prisma.comentarios.findUnique({
        include: {
            usuarios: true,
            productos: true
        },
        where: {
            id_comentario: idComentario,
            estado_auditoria: '1'
        }
    });
    return fromPrismaComentario(comentario, comentario.usuarios, comentario.productos);
}

export const modificarComentario = async (idComentario: number, comentario: IComentario) => {
    await prisma.comentarios.update({
        data: toPrismaComentario(comentario),
        where:{
            id_comentario: idComentario
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarComentario = async (idComentario: number) => {
    await prisma.comentarios.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_comentario: idComentario
        }
    });
    return RESPONSE_DELETE_OK;
}