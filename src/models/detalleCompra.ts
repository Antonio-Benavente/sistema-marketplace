import { ICompra } from "./compra";
import { IProducto } from "./producto";

export interface IDetalleCompra {
    idDetalle: number,
    compra: ICompra,
    producto: IProducto,
    cantidad: number,
    precio: number,
    descuento: number,
    impuesto: number,
    departamentoEntrega: string,
    distritoEntrega: string,
    direccionEntrega: string,
    estadoAuditoria: string,
    fechaCreacion: Date
}