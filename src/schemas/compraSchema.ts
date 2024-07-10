import Joi from "joi";

// Esquemas de Swagger

export const BodyComprasPost = {
  type: 'object',
  properties: {
    usuario: {
      type: 'integer',
      description: 'Usuario que realiza la compra.',
    },
    estado: {
      type: 'integer',
      description: 'Estado en el que se encuentra la compra.',
    },
    metodoPago: {
      type: 'string',
      description: 'Forma de pago por la que el cliente realizara el pago.',
    },
    numeroTarjeta: {
      type: 'string',
      description: 'Número de tarjeta del cliente.',
    },
    total: {
      type: 'number',
      description: 'Total de todos los productos adquiridos por el cliente en la compra.',
    }
  },
};

export const BodyComprasPut = {
  type: 'object',
  properties: {
    usuario: {
      type: 'integer',
      description: 'Usuario que realiza la compra.',
    },
    estado: {
      type: 'integer',
      description: 'Estado en el que se encuentra la compra.',
    },
    metodoPago: {
      type: 'string',
      description: 'Forma de pago por la que el cliente realizara el pago.',
    },
    numeroTarjeta: {
      type: 'string',
      description: 'Número de tarjeta del cliente.',
    },
    total: {
      type: 'number',
      description: 'Total de todos los productos adquiridos por el cliente en la compra.',
    }
  },
};

export const ExitoComprasGetID = {
  type: 'object',
  properties: {
    id_compra: {
      type: 'integer',
      description: 'Identificador único de la compra en la base de datos.',
    },
    usuario: {
      type: 'integer',
      description: 'Usuario que realiza la compra.',
    },
    estado: {
      type: 'integer',
      description: 'Estado en el que se encuentra la compra.',
    },
    metodo_pago: {
      type: 'string',
      description: 'Forma de pago por la que el cliente realizara el pago.',
    },
    numero_tarjeta: {
      type: 'number',
      description: 'Número de tarjeta del cliente.',
    },
    total: {
      type: 'number',
      description: 'Total de todos los productos adquiridos por el cliente en la compra.',
    }
  },
};

// Esquemas de Joi

const compraBaseSchema = {
  usuario: Joi.number(),
  estado: Joi.number(),
  metodoPago: Joi.string()
    .max(100),
  numeroTarjeta: Joi.number()
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