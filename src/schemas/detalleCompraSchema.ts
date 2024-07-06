import Joi from 'joi';

const detalleCompraBaseSchema = {
    compra: Joi.number(),
    producto: Joi.number(),
    cantidad: Joi.number(),
    precio: Joi.number(),
    descuento: Joi.number(),
    impuesto: Joi.number(),
    departamentoEntrega: Joi.string()
        .max(1024),
    distritoEntrega: Joi.string()
    .max(1024),
    direccionEntrega: Joi.string()
    .max(1024)
};

export const insertarDetalleCompraSchema = Joi.object({
    ...detalleCompraBaseSchema,
    compra: detalleCompraBaseSchema.compra.required(),
    producto: detalleCompraBaseSchema.producto.required(),
    cantidad: detalleCompraBaseSchema.cantidad.required(),
    precio: detalleCompraBaseSchema.precio.required(),
    descuento: detalleCompraBaseSchema.descuento.required(),
    impuesto: detalleCompraBaseSchema.impuesto.required(),
    departamentoEntrega: detalleCompraBaseSchema.departamentoEntrega.required(),
    distritoEntrega: detalleCompraBaseSchema.distritoEntrega.required(),
    direccionEntrega: detalleCompraBaseSchema.direccionEntrega.required()
});

export const modificarDetalleCompraSchema = Joi.object({
    ...detalleCompraBaseSchema
});