import Joi from 'joi';
import { format } from 'path';

// Esquemas de Swagger

export const BodyBitacorasPost = {
  type: 'object',
  properties: {
    usuario: {
      type: 'integer',
      description: 'Usuario que realizara una acción (Venta o Compra).',
    },
    accion: {
      type: 'string',
      description: 'Acción que realiza el usuario.',
    },
    fechaAccion: {
      type: 'string',
      format: 'date',
      description: 'Fecha en la cual el usuario realiza la acción.',
    }
  },
};

export const BodyBitacorasPut = {
  type: 'object',
  properties: {
    usuario: {
      type: 'integer',
      description: 'Usuario que realizara una acción (Venta o Compra).',
    },
    accion: {
      type: 'string',
      description: 'Acción que realiza el usuario.',
    },
    fechaAccion: {
      type: 'string',
      format: 'date',
      description: 'Fecha en la cual el usuario realiza la acción.',
    }
  },
};

export const ExitoBitacorasGetID = {
  type: 'object',
  properties: {
    id_bitacora: {
      type: 'integer',
      description: 'Identificador único de la bitacora en la base de datos.',
    },
    usuario: {
      type: 'integer',
      description: 'Usuario que realizara una acción (Venta o Compra).',
    },
    accion: {
      type: 'integer',
      description: 'Acción que realiza el usuario.',
    },
    fechaAccion: {
      type: 'string',
      format: 'date',
      description: 'Fecha en la cual el usuario realiza la acción.',
    }
  },
};

// Esquemas de Joi

const bitacoraBaseSchema = {
  usuario: Joi.number(),
  accion: Joi.string()
    .max(100),
  fechaAccion: Joi.string()
    .isoDate()
};

export const insertarBitacoraSchema = Joi.object({
  ...bitacoraBaseSchema,
  usuario: bitacoraBaseSchema.usuario.required(),
  accion: bitacoraBaseSchema.accion.required(),
  fechaAccion: bitacoraBaseSchema.fechaAccion.required()
});

export const modificarBitacoraSchema = Joi.object({
  ...bitacoraBaseSchema
});