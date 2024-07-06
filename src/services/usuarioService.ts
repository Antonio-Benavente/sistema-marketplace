import { PrismaClient, usuarios } from "@prisma/client";
import { IUsuario } from "../models/usuario";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaUsuario, toPrismaUsuario } from "../mappers/usuarioMapper";

const prisma = new PrismaClient();

export const insertarUsuario = async (usuario: IUsuario) => {
    await prisma.usuarios.create({
        data: toPrismaUsuario(usuario),
    });
    return RESPONSE_INSERT_OK;
}

export const listarUsuarios = async () => {
    const usuarios : any[] = await prisma.usuarios.findMany({
        include: {
            perfiles: true
        },
        where: {
            estado_auditoria: '1'
        }
    });
    return usuarios.map((usuario: any)=> fromPrismaUsuario(usuario, usuario.perfiles));
}

export const obtenerUsuario = async (idUsuario: number) => {
    const usuario: any =  await prisma.usuarios.findUnique({
        include: {
            perfiles: true
        },
        where: {
            id_usuario: idUsuario,
            estado_auditoria: '1'
        }
    });
    return fromPrismaUsuario(usuario, usuario.perfiles);
}

export const modificarUsuario = async (idUsuario: number, usuario:IUsuario) => {
    await prisma.usuarios.update({
        data: toPrismaUsuario(usuario),
        where:{
            id_usuario: idUsuario
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarUsuario = async (idUsuario: number) => {
    await prisma.usuarios.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_usuario: idUsuario
        }
    });
    return RESPONSE_DELETE_OK;
}