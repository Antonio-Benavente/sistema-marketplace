import Joi from "joi";

// Esquemas de Swagger
export const BodyCategoriasPost = {
    type: 'object',
    properties: {
        nombre: {
            type: 'string',
            description: 'Nombre de la categoría.',
        }
    },
};

export const BodyCategoriasPut = {
    type: 'object',
    properties: {
        nombre: {
            type: 'string',
            description: 'Nombre de la categoría.',
        }
    },
};

export const ExitoCategoriasGetID = {
    type: 'object',
    properties: {
        id_categoria: {
            type: 'integer',
            description: 'Identificador único de la categoría en la base de datos.',
        },
        nombre: {
            type: 'string',
            description: 'Nombre de la categoría.',
        }
    },
};

// Esquemas de Joi
const categoriaBaseSchema = {
    nombre: Joi.string().max(1024)
};

export const insertarCategoriaSchema = Joi.object({
    ...categoriaBaseSchema,
    nombre: categoriaBaseSchema.nombre.required()
});

export const modificarCategoriaSchema = Joi.object({
    ...categoriaBaseSchema
});