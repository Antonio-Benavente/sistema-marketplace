import { IProducto } from "./producto";
import { IUsuario } from "./usuario";

export interface IComentario {
    idComentario: number,
    usuario: IUsuario,
    producto: IProducto,
    comentario: string,
    calificacion: number,
    estadoAuditoria: string,
    fechaCreacion: Date,
    fechaModificacion: Date
}