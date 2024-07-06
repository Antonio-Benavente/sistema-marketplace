import { estados_compra } from "@prisma/client";
import { IEstadoCompra } from "../models/estadoCompra";

export const fromPrismaEstadoCompra = (estadoCompra: estados_compra): any=> ({
    idEstado: estadoCompra.id_estado,
    descripcion: estadoCompra.descripcion
});

export const toPrismaEstadoCompra = (estadoCompra: IEstadoCompra): any => ({
    descripcion: estadoCompra.descripcion
})