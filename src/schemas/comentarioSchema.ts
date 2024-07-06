import Joi from 'joi';

const comentarioBaseSchema = {
    usuario: Joi.number(),
    producto: Joi.number(),
    comentario: Joi.string()
        .max(1024),
    calificacion: Joi.number()
        .max(5)
}

export const insertarComentarioSchema = Joi.object({
    ...comentarioBaseSchema,
    usuario: comentarioBaseSchema.usuario.required(),
    producto: comentarioBaseSchema.producto.required(),
    comentario: comentarioBaseSchema.comentario.required(),
    calificacion: comentarioBaseSchema.calificacion.required()
});

export const modificarComentarioSchema = Joi.object({
    ...comentarioBaseSchema
});