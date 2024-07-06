import Joi from 'joi';

const bitacoraBaseSchema = {
    usuario: Joi.number(),
    accion: Joi.string()
        .max(100),
    fechaAccion: Joi.string()
        .isoDate()
};

export const insertarBitacoraSchema = Joi.object({
    ...bitacoraBaseSchema,
    usuario: bitacoraBaseSchema.usuario.required(),
    accion: bitacoraBaseSchema.accion.required(),
    fechaAccion: bitacoraBaseSchema.fechaAccion.required()
});

export const modificarBitacoraSchema = Joi.object({
    ...bitacoraBaseSchema
});