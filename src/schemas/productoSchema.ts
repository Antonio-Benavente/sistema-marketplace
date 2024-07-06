import Joi from "joi";

const productoBaseSchema = {
    categoria: Joi.number(),
    usuario: Joi.number(),
    nombre: Joi.string()
        .max(150),
    descripcion: Joi.string()
        .max(1024),
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