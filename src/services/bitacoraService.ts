import { PrismaClient } from "@prisma/client";
import { fromPrismaBitacora, toPrismaBitacora } from "../mappers/bitacoraMapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { IBitacora } from "../models/bitacora";

const prisma = new PrismaClient();

export const insertarBitacora = async (bitacora: IBitacora) => {
    await prisma.bitacora.create({
        data: toPrismaBitacora(bitacora)
    });
    return RESPONSE_INSERT_OK;
};

export const listarBitacoras = async () => {
    const bitacoras: any[] = await prisma.bitacora.findMany({
        include: {
            usuarios: true
        },
        where: {
            estado_auditoria: '1'
        }
    });
    return bitacoras.map((bitacora: any)=> fromPrismaBitacora(bitacora, bitacora.usuarios));
}

export const obtenerBitacora = async (idBitacora: number) => {
    const bitacora: any =  await prisma.bitacora.findUnique({
        include: {
            usuarios: true
        },
        where: {
            id_bitacora: idBitacora,
            estado_auditoria: '1'
        }
    });
    return fromPrismaBitacora(bitacora, bitacora.usuarios);
}

export const modificarBitacora = async (idBitacora: number, bitacora: IBitacora) => {
    await prisma.bitacora.update({
        data: toPrismaBitacora(bitacora),
        where:{
            id_bitacora: idBitacora
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarBitacora = async (idBitacora: number) => {
    await prisma.bitacora.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_bitacora: idBitacora
        }
    });
    return RESPONSE_DELETE_OK;
}