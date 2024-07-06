import Joi from "joi";

const estadoCompraBaseSchema = {
    descripcion: Joi.string()
        .max(250)
};

export const insertarEstadoCompraSchema = Joi.object({
    ...estadoCompraBaseSchema,
    descripcion: estadoCompraBaseSchema.descripcion.required()
});

export const modificarEstadoCompraSchema = Joi.object({
    ...estadoCompraBaseSchema
});



