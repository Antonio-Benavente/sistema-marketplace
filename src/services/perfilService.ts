import { PrismaClient, perfiles } from "@prisma/client";
import { IPerfil } from "../models/perfil";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaPerfil, toPrismaPerfil } from "../mappers/perfilMapper";

const prisma = new PrismaClient();

export const insertarPerfil = async (perfil: IPerfil) => {
    await prisma.perfiles.create({
        data: toPrismaPerfil(perfil)
    });
    return RESPONSE_INSERT_OK;
}

export const listarPerfiles = async () => {
    const perfiles: perfiles[] = await prisma.perfiles.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return perfiles.map((perfil: perfiles)=> fromPrismaPerfil(perfil));
}

export const obtenerPerfil = async (idPerfil: number) => {
    const perfil: perfiles =  await prisma.perfiles.findUnique({
        where: {
            id_perfil: idPerfil,
            estado_auditoria: '1'
        }
    });
    return fromPrismaPerfil(perfil);
}

export const modificarPerfil = async (idPerfil: number, perfil:IPerfil) => {
    await prisma.perfiles.update({
        data: toPrismaPerfil(perfil),
        where:{
            id_perfil: idPerfil
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarPerfil = async (idPerfil: number) => {
    await prisma.perfiles.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_perfil: idPerfil
        }
    });
    return RESPONSE_DELETE_OK;
}
