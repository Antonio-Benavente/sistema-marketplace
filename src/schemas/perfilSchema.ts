import Joi from "joi";

// Esquemas de Swagger
export const BodyPerfilesPost = {
    type: 'object',
    properties: {
        descripcion: {
            type: 'string',
            description: 'Descripción del perfil.',
        }
    },
};

export const BodyPerfilesPut = {
    type: 'object',
    properties: {
        descripcion: {
            type: 'string',
            description: 'Descripción del perfil.',
        }
    },
};

export const ExitoPerfilesGetID = {
    type: 'object',
    properties: {
        id_perfil: {
            type: 'integer',
            description: 'Identificador único del perfil en la base de datos.',
        },
        descripcion: {
            type: 'string',
            description: 'Descripción del perfil.',
        }
    },
};

// Esquemas de Joi
const perfilBaseSchema = {
    descripcion: Joi.string().max(1024)
};

export const insertarPerfilSchema = Joi.object({
    ...perfilBaseSchema,
    descripcion: perfilBaseSchema.descripcion.required()
});

export const modificarPerfilSchema = Joi.object({
    ...perfilBaseSchema
});