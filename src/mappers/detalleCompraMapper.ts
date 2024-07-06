import { categorias, compras, detalle_compra, estados_compra, perfiles, productos, usuarios } from "@prisma/client";
import { fromPrismaCompra } from "./compraMapper";
import { fromPrismaProducto } from "./productoMapper";
import { IDetalleCompra } from "../models/detalleCompra";

export const fromPrismaDetalleCompra = (detalleCompra: detalle_compra, compra: compras, producto: productos): any => ({
    idDetalle: detalleCompra.id_detalle,
    idCompra: compra.id_compra,
    idProducto: producto.id_producto,
    producto: producto.nombre,
    cantidad: detalleCompra.cantidad,
    precio: detalleCompra.precio,
    descuento: detalleCompra.descuento,
    impuesto: detalleCompra.impuesto,
    departamentoEntrega: detalleCompra.departamento_entrega,
    distritoEntrega: detalleCompra.distrito_entrega,
    direccionEntrega: detalleCompra.direccion_entrega
});

export const toPrismaDetalleCompra = (detalleCompra: IDetalleCompra): any => ({
    id_compra: detalleCompra.compra,
    id_producto: detalleCompra.producto,
    cantidad: detalleCompra.cantidad,
    precio: detalleCompra.precio,
    descuento: detalleCompra.descuento,
    impuesto: detalleCompra.impuesto,
    departamento_entrega: detalleCompra.departamentoEntrega,
    distrito_entrega: detalleCompra.distritoEntrega,
    direccion_entrega: detalleCompra.direccionEntrega
});