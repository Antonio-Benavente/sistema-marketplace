import { ICategoria } from "./categoria";
import { IUsuario } from "./usuario";

export interface IProducto {
    idProducto: number,
    categoria: ICategoria,
    usuario: IUsuario,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number,
    imagen: string,
    estadoAuditoria: string,
    fechaCreacion: Date,
    fechaModificacion: Date
}