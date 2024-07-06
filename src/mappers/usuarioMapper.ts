import { perfiles, usuarios } from "@prisma/client";
import { IUsuario } from "../models/usuario";
import { fromPrismaPerfil } from "./perfilMapper";

export const fromPrismaUsuario = (usuario: usuarios, perfil: perfiles): any=> ({
    id_usuario: usuario.id_usuario,
    perfil: fromPrismaPerfil(perfil),
    nombres: usuario.nombres,
    apellidoPaterno: usuario.apellido_paterno,
    apellidoMaterno: usuario.apellido_materno,
    nombreUsuario: usuario.nombre_usuario,
    celular: usuario.celular,
    email: usuario.email,
    password: usuario.password
})

export const toPrismaUsuario = (usuario: IUsuario): any => ({
    id_perfil: usuario.perfil,
    nombres: usuario.nombres,
    apellido_paterno: usuario.apellidoPaterno,
    apellido_materno: usuario.apellidoMaterno,
    nombre_usuario: usuario.nombreUsuario,
    celular: usuario.celular,
    email: usuario.email,
    password: usuario.password
})
