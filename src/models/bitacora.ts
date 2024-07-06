import { IUsuario } from "./usuario";

export interface IBitacora {
    idBitacora: number,
    usuario: IUsuario,
    accion: string,
    fechaAccion: Date,
    estadoAuditoria: string,
    fechaCreacion: Date,
    fechaModificacion: Date
}