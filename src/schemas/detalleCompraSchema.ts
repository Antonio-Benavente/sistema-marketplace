import Joi from 'joi';

// Esquemas de Swagger

export const BodyDetalleComprasPost = {
  type: 'object',
  properties: {
    compra: {
      type: 'integer',
      description: 'Compra a la cual se le asignara el detalle.',
    },
    producto: {
      type: 'integer',
      description: 'Producto que sera agregado al detalle.',
    },
    cantidad: {
      type: 'integer',
      description: 'Cantidad del producto elegido.',
    },
    precio: {
      type: 'number',
      description: 'Precio del producto elegido.',
    },
    descuento: {
      type: 'number',
      description: 'Descuento otorgado por la compra (Es opcional).',
    },
    impuesto: {
      type: 'number',
      description: 'Impuesto otorgado por la compra.',
    },
    departamentoEntrega: {
      type: 'string',
      description: 'Departamento en el que sera entregada la compra.',
    },
    distritoEntrega: {
      type: 'string',
      description: 'Distrito en el que sera entregada la compra.',
    },
    direccionEntrega: {
      type: 'string',
      description: 'Dirección en la que sera entregada la compra.',
    }
  },
};

export const BodyDetalleComprasPut = {
  type: 'object',
  properties: {
    compra: {
      type: 'integer',
      description: 'Compra a la cual se le asignara el detalle.',
    },
    producto: {
      type: 'integer',
      description: 'Producto que sera agregado al detalle.',
    },
    cantidad: {
      type: 'integer',
      description: 'Cantidad del producto elegido.',
    },
    precio: {
      type: 'number',
      description: 'Precio del producto elegido.',
    },
    descuento: {
      type: 'number',
      description: 'Descuento otorgado por la compra (Es opcional).',
    },
    impuesto: {
      type: 'number',
      description: 'Impuesto otorgado por la compra.',
    },
    departamentoEntrega: {
      type: 'string',
      description: 'Departamento en el que sera entregada la compra.',
    },
    distritoEntrega: {
      type: 'string',
      description: 'Distrito en el que sera entregada la compra.',
    },
    direccionEntrega: {
      type: 'string',
      description: 'Dirección en la que sera entregada la compra.',
    }
  },
};

export const ExitoDetalleComprasGetID = {
  type: 'object',
  properties: {
    id_detalle: {
      type: 'integer',
      description: 'Identificador único del detalle de la compra en la base de datos.',
    },
    compra: {
      type: 'integer',
      description: 'Compra a la cual se le asignara el detalle.',
    },
    producto: {
      type: 'integer',
      description: 'Producto que sera agregado al detalle.',
    },
    cantidad: {
      type: 'number',
      description: 'Cantidad del producto elegido.',
    },
    precio: {
      type: 'number',
      description: 'Precio del producto elegido.',
    },
    descuento: {
      type: 'number',
      description: 'Descuento otorgado por la compra (Es opcional).',
    },
    impuesto: {
      type: 'number',
      description: 'Impuesto otorgado por la compra.',
    },
    departamento_entrega: {
      type: 'string',
      description: 'Departamento en el que sera entregada la compra.',
    },
    distrito_entrega: {
      type: 'string',
      description: 'Distrito en el que sera entregada la compra.',
    },
    direccion_entrega: {
      type: 'string',
      description: 'Dirección en la que sera entregada la compra.',
    }
  },
};

// Esquemas de Joi

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