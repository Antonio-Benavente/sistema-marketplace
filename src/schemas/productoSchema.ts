import Joi from "joi";

// Esquemas de Swagger
export const BodyProductosPost = {
    type: 'object',
    properties: {
        categoria: {
            type: 'integer',
            description: 'Categoría del producto.',
        },
        usuario: {
            type: 'integer',
            description: 'Usuario que registra el producto.',
        },
        nombre: {
            type: 'string',
            description: 'Nombre del producto.',
        },
        descripcion: {
            type: 'string',
            description: 'Descripción del producto.',
        },
        precio: {
            type: 'number',
            description: 'Precio del producto.',
        },
        stock: {
            type: 'integer',
            description: 'Stock de productos disponibles.',
        },
        imagen: {
            type: 'string',
            description: 'Imagen del producto.',
        }
    },
};

export const BodyProductosPut = {
    type: 'object',
    properties: {
        categoria: {
            type: 'integer',
            description: 'Categoría del producto.',
        },
        usuario: {
            type: 'integer',
            description: 'Usuario que registra el producto.',
        },
        nombre: {
            type: 'string',
            description: 'Nombre del producto.',
        },
        descripcion: {
            type: 'string',
            description: 'Descripción del producto.',
        },
        precio: {
            type: 'number',
            description: 'Precio del producto.',
        },
        stock: {
            type: 'integer',
            description: 'Stock de productos disponibles.',
        },
        imagen: {
            type: 'string',
            description: 'Imagen del producto.',
        }
    },
};

export const ExitoProductosGetID = {
    type: 'object',
    properties: {
        id_producto: {
            type: 'integer',
            description: 'Identificador único del producto en la base de datos.',
        },
        categoria: {
            type: 'integer',
            description: 'Categoría a la que pertenece el producto.',
        },
        usuario: {
            type: 'integer',
            description: 'Usuario que registró el producto.',
        },
        nombre: {
            type: 'string',
            description: 'Nombre del producto.',
        },
        descripcion: {
            type: 'string',
            description: 'Descripción del producto.',
        },
        precio: {
            type: 'number',
            description: 'Precio del producto.',
        },
        stock: {
            type: 'integer',
            description: 'Stock de productos disponibles.',
        },
        imagen: {
            type: 'string',
            description: 'Imagen del producto.',
        }
    },
};

// Esquemas de Joi
const productoBaseSchema = {
    categoria: Joi.number(),
    usuario: Joi.number(),
    nombre: Joi.string().max(150),
    descripcion: Joi.string().max(1024),
    precio: Joi.number(),
    stock: Joi.number(),
    imagen: Joi.string()
};

export const insertarProductoSchema = Joi.object({
    ...productoBaseSchema,
    categoria: productoBaseSchema.categoria.required(),
    usuario: productoBaseSchema.usuario.required(),
    nombre: productoBaseSchema.nombre.required(),
    descripcion: productoBaseSchema.descripcion.required(),
    precio: productoBaseSchema.precio.required(),
    stock: productoBaseSchema.stock.required()
});

export const modificarProductoSchema = Joi.object({
    ...productoBaseSchema
});