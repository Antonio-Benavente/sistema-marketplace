import { IPerfil } from "./perfil";

export interface IUsuario {
    idUsuario:number;
    perfil:IPerfil;
    nombres:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    nombreUsuario:string;
    celular:string;
    email:string;
    password:string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}