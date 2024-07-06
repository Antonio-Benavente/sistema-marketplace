import Joi from "joi";

const usuarioBaseSchema = {
    perfil: Joi.number(),
    nombres: Joi.string(),
    apellidoPaterno: Joi.string()
        .max(150),
    apellidoMaterno: Joi.string()
        .max(150),
    nombreUsuario: Joi.string()
        .max(150),
    celular: Joi.number()
        .min(9),
    email: Joi.string()
        .max(1024),
    password: Joi.string()
        .max(1024)
};

export const insertarUsuarioSchema = Joi.object({
    ...usuarioBaseSchema,
    perfil: usuarioBaseSchema.perfil.required(),
    nombres: usuarioBaseSchema.nombres.required(),
    apellidoPaterno: usuarioBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: usuarioBaseSchema.apellidoMaterno.required(),
    nombreUsuario: usuarioBaseSchema.nombreUsuario.required(),
    celular: usuarioBaseSchema.celular.required(),
    email: usuarioBaseSchema.email.required(),
    password: usuarioBaseSchema.password.required(),
});

export const modificarUsuarioSchema = Joi.object({
    ...usuarioBaseSchema
});