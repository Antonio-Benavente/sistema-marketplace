import Joi from "joi";

// Esquemas de Swagger
export const BodyUsuariosPost = {
  type: 'object',
  properties: {
    perfil: {
      type: 'integer',
      description: 'Perfil al que se loguea el usuario (Si es vendedor o comprador).',
    },
    nombres: {
      type: 'string',
      description: 'Nombres del usuario. Deben ser los nombres completos.',
    },
    apellidoPaterno: {
      type: 'string',
      description: 'Apellido Paterno del usuario. Debe ser su apellido real.',
    },
    apellidoMaterno: {
      type: 'string',
      description: 'Apellido Materno del usuario. Debe ser su apellido real.',
    },
    nombreUsuario: {
      type: 'string',
      description: 'Apodo del usuario. Nombre de usuario único.',
    },
    celular: {
      type: 'string',
      description: 'Número telefónico del usuario. Debe ser un número válido.',
    },
    email: {
      type: 'string',
      description: 'Contacto email del usuario. Debe ser un correo electrónico válido.',
    },
    password: {
      type: 'string',
      description: 'Contraseña del usuario. Debe cumplir con los requisitos de seguridad.',
    },
  },
};

export const BodyUsuariosPut = {
  type: 'object',
  properties: {
    perfil: {
      type: 'integer',
      description: 'Perfil al que se loguea el usuario (Si es vendedor o comprador).',
    },
    nombres: {
      type: 'string',
      description: 'Nombres del usuario. Deben ser los nombres completos.',
    },
    apellidoPaterno: {
      type: 'string',
      description: 'Apellido Paterno del usuario. Debe ser su apellido real.',
    },
    apellidoMaterno: {
      type: 'string',
      description: 'Apellido Materno del usuario. Debe ser su apellido real.',
    },
    nombreUsuario: {
      type: 'string',
      description: 'Apodo del usuario. Nombre de usuario único.',
    },
    celular: {
      type: 'string',
      description: 'Número telefónico del usuario. Debe ser un número válido.',
    },
    email: {
      type: 'string',
      description: 'Contacto email del usuario. Debe ser un correo electrónico válido.',
    },
    password: {
      type: 'string',
      description: 'Contraseña del usuario. Debe cumplir con los requisitos de seguridad.',
    },
  },
};

export const ExitoUsuariosGetID = {
  type: 'object',
  properties: {
    id_usuario: {
      type: 'integer',
      description: 'Identificador único del usuario en la base de datos.',
    },
    perfil: {
      type: 'integer',
      description: 'Perfil al que se loguea el usuario (Si es vendedor o comprador).',
    },
    nombres: {
      type: 'string',
      description: 'Nombres del usuario. Deben ser los nombres completos.',
    },
    apellidoPaterno: {
      type: 'string',
      description: 'Apellido Paterno del usuario. Debe ser su apellido real.',
    },
    apellidoMaterno: {
      type: 'string',
      description: 'Apellido Materno del usuario. Debe ser su apellido real.',
    },
    nombreUsuario: {
      type: 'string',
      description: 'Apodo del usuario. Nombre de usuario único.',
    },
    celular: {
      type: 'string',
      description: 'Número telefónico del usuario. Debe ser un número válido.',
    },
    email: {
      type: 'string',
      description: 'Contacto email del usuario. Debe ser un correo electrónico válido.',
    },
    password: {
      type: 'string',
      description: 'Contraseña del usuario. Debe cumplir con los requisitos de seguridad.',
    },
  },
};

// Esquemas de Joi
const usuarioBaseSchema = {
  perfil: Joi.number(),
  nombres: Joi.string(),
  apellidoPaterno: Joi.string()
      .max(150),
  apellidoMaterno: Joi.string()
      .max(150),
  nombreUsuario: Joi.string()
      .max(150),
  celular: Joi.number()
      .min(9),
  email: Joi.string()
      .max(1024),
  password: Joi.string()
      .max(1024)
};

export const insertarUsuarioSchema = Joi.object({
  ...usuarioBaseSchema,
  perfil: usuarioBaseSchema.perfil.required(),
  nombres: usuarioBaseSchema.nombres.required(),
  apellidoPaterno: usuarioBaseSchema.apellidoPaterno.required(),
  apellidoMaterno: usuarioBaseSchema.apellidoMaterno.required(),
  nombreUsuario: usuarioBaseSchema.nombreUsuario.required(),
  celular: usuarioBaseSchema.celular.required(),
  email: usuarioBaseSchema.email.required(),
  password: usuarioBaseSchema.password.required(),
});

export const modificarUsuarioSchema = Joi.object({
  ...usuarioBaseSchema
});