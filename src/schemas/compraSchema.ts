import Joi from "joi";

const compraBaseSchema = {
    usuario: Joi.number(),
    estado: Joi.number(),
    metodoPago: Joi.string()
        .max(100),
    numeroTarjeta: Joi.string()
        .min(16), 
    total: Joi.number()
        .min(10)
};

export const insertarCompraSchema = Joi.object({
    ...compraBaseSchema,
    usuario: compraBaseSchema.usuario.required(),
    estado: compraBaseSchema.estado.required(),
    metodoPago: compraBaseSchema.metodoPago.required(),
    numeroTarjeta: compraBaseSchema.numeroTarjeta.required(),
    total: compraBaseSchema.total.required()
});

export const modificarCompraSchema = Joi.object({
    ...compraBaseSchema
});