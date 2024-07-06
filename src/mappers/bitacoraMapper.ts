import { bitacora, perfiles, usuarios } from "@prisma/client";
import { fromPrismaUsuario } from "./usuarioMapper";
import { IBitacora } from "../models/bitacora";

export const fromPrismaBitacora = (bitacora: bitacora, usuario: usuarios): any => ({
    idBitacora: bitacora.id_bitacora,
    idUsuario: usuario.id_usuario,
    usuario: usuario.nombres + ' ' + usuario.apellido_paterno + ' ' + usuario.apellido_materno,
    accion: bitacora.accion,
    fechaAccion: bitacora.fecha_accion
});

export const toPrismaBitacora = (bitacora: IBitacora): any => ({
    id_usuario: bitacora.usuario,
    accion: bitacora.accion,
    fecha_accion: bitacora.fechaAccion
});