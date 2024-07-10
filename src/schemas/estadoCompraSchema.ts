import Joi from "joi";

// Esquemas de Swagger

export const BodyEstadoComprasPost = {
  type: 'object',
  properties: {
    descripcion: {
      type: 'string',
      description: 'Estado el cual se le asignara a una compra.',
    }
  },
};

export const BodyEstadoComprasPut = {
  type: 'object',
  properties: {
    descripcion: {
      type: 'string',
      description: 'Estado el cual se le asignara a una compra.',
    }
  },
};

export const ExitoEstadoComprasGetID = {
  type: 'object',
  properties: {
    id_estado: {
      type: 'integer',
      description: 'Identificador único del estado de la compra en la base de datos.',
    },
    descripcion: {
      type: 'string',
      description: 'Estado el cual se le asignara a una compra.',
    }
  },
};

// Esquemas de Joi

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