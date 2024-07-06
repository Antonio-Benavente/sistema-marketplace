import { compras, estados_compra, perfiles, usuarios } from "@prisma/client";
import { fromPrismaUsuario } from "./usuarioMapper";
import { fromPrismaEstadoCompra } from "./estadoCompraMapper";
import { ICompra } from "../models/compra";
import { fromPrismaPerfil } from "./perfilMapper";

export const fromPrismaCompra = (compra: compras, usuario: usuarios, estado: estados_compra): any => ({
    idCompra: compra.id_compra,
    //usuario: fromPrismaUsuario(usuario, perfil),
    idUsuario: usuario.id_usuario,
    perfilUsuario: usuario.id_perfil,
    usuario: usuario.nombres + ' ' + usuario.apellido_paterno + ' ' + usuario.apellido_materno,
    //estadoCompra: fromPrismaEstadoCompra(estado),
    estado: estado.descripcion,
    metodoPago: compra.metodo_pago,
    numeroTarjeta: compra.numero_tarjeta,
    total: compra.total
});

export const toPrismaCompra = (compra: ICompra): any => ({
    id_usuario: compra.usuario,
    id_estado: compra.estado,
    metodo_pago: compra.metodoPago,
    numero_tarjeta: compra.numeroTarjeta,
    total: compra.total
});