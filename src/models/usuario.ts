import { IPerfil } from "./perfil";

export interface ICurso {
    idUsuario:number;
    idPerfil:IPerfil;
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