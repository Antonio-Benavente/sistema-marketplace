import Joi from 'joi';

// Esquemas de Swagger

export const BodyComentariosPost = {
  type: 'object',
  properties: {
    usuario: {
      type: 'integer',
      description: 'Usuario que añadira un comentario o reseña a un producto.',
    },
    producto: {
      type: 'integer',
      description: 'Producto al que se le añadira un comentario o reseña.',
    },
    comentario: {
      type: 'string',
      description: 'Comentario o reseña sobre el producto elegido.',
    },
    calificacion: {
      type: 'number',
      description: 'Calificación del producto elegido.',
    }
  },
};

export const BodyComentariosPut = {
  type: 'object',
  properties: {
    usuario: {
      type: 'integer',
      description: 'Usuario que añadira un comentario o reseña a un producto.',
    },
    producto: {
      type: 'integer',
      description: 'Producto al que se le añadira un comentario o reseña.',
    },
    comentario: {
      type: 'string',
      description: 'Comentario o reseña sobre el producto elegido.',
    },
    calificacion: {
      type: 'number',
      description: 'Calificación del producto elegido.',
    }
  },
};

export const ExitoComentariosGetID = {
  type: 'object',
  properties: {
    id_comentario: {
      type: 'integer',
      description: 'Identificador único del comentario en la base de datos.',
    },
    usuario: {
      type: 'integer',
      description: 'Usuario que añadira un comentario o reseña a un producto.',
    },
    producto: {
      type: 'integer',
      description: 'Producto al que se le añadira un comentario o reseña.',
    },
    comentario: {
      type: 'string',
      description: 'Comentario o reseña sobre el producto elegido.',
    },
    calificacion: {
      type: 'number',
      description: 'Calificación del producto elegido.',
    }
  },
};

// Esquemas de Joi

const comentarioBaseSchema = {
  usuario: Joi.number(),
  producto: Joi.number(),
  comentario: Joi.string()
    .max(1024),
  calificacion: Joi.number()
    .max(5)
}

export const insertarComentarioSchema = Joi.object({
  ...comentarioBaseSchema,
  usuario: comentarioBaseSchema.usuario.required(),
  producto: comentarioBaseSchema.producto.required(),
  comentario: comentarioBaseSchema.comentario.required(),
  calificacion: comentarioBaseSchema.calificacion.required()
});

export const modificarComentarioSchema = Joi.object({
  ...comentarioBaseSchema
});