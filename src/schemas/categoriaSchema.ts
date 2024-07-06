import Joi from "joi";

const categoriaBaseSchema = {
    nombre: Joi.string()
        .max(1024)
};

export const insertarCategoriaSchema = Joi.object({
    ...categoriaBaseSchema,
    nombre: categoriaBaseSchema.nombre.required()
});

export const modificarCategoriaSchema = Joi.object({
    ...categoriaBaseSchema
});