import { perfiles } from "@prisma/client"
import { IPerfil } from "../models/perfil"

export const fromPrismaPerfil = (perfil: perfiles): any=> ({
    idPerfil: perfil.id_perfil,
    descripcion: perfil.descripcion
});

export const toPrismaPerfil = (perfil: IPerfil): any => ({
    descripcion: perfil.descripcion
})