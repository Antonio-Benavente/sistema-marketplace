import { IEstadoCompra } from "./estadoCompra";
import { IUsuario } from "./usuario";

export interface ICompra {
    idCompra: number,
    usuario: IUsuario,
    estado: IEstadoCompra,
    metodoPago: string,
    numeroTarjeta: number,
    total: number,
    estadoAuditoria: string,
    fechaCreacion: Date,
    fechaModificacion: Date
}