import { Options } from 'swagger-jsdoc';

export const eliminarUsuario = {
  description: 'Actualiza el estado de un usuario a inactivo (eliminación lógica).',
};

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Marketplace de Productos Locales',
      description: 'Esta API se encarga de manejar todas las entidades de la base de datos de "SW_SIST_MARKETPLACE".',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
      },
    ],
    tags: [
      {
        name: 'usuarios',
        description: 'Este endpoint maneja todo el CRUD de la tabla usuarios. Incluye creación, lectura, actualización y eliminación de usuarios.',
      },
      {
        name: 'insertar',
        description: 'Inserta un nuevo dato a la tabla especificada de la base de datos, permitiendo la creación de nuevos registros.',
      },
      {
        name: 'listar',
        description: 'Lista todos los datos de la tabla especificada de la base de datos, proporcionando una visión general de los registros.',
      },
      {
        name: 'listarID',
        description: 'Lista el dato por el id de la tabla especificada de la base de datos, permitiendo la consulta de un registro específico.',
      },
      {
        name: 'actualizar',
        description: 'Actualiza un dato existente en la tabla especificada de la base de datos, permitiendo modificar registros previamente creados.',
      },
      {
        name: 'eliminar',
        description: 'Actualiza el estado de un usuario a inactivo (eliminación lógica).',
      },
    ],
    paths: {
      '/api/v1/usuarios': {
        post: {
          tags: ['usuarios', 'insertar'],
          summary: 'Inserta un nuevo dato a la tabla usuarios de la base de datos.',
          parameters: [{ $ref: '#/components/parameters/token' }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/BodyUsuariosPost' },
              },
            },
          },
          responses: {
            200: {
              description: '(Ok) Usuario insertado correctamente en la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoUsuariosPost' },
                },
              },
            },
            400: { $ref: '#/components/responses/BadRequest' },
            401: { $ref: '#/components/responses/Unauthorized' },
            404: { $ref: '#/components/responses/NotFound' },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
        get: {
          tags: ['usuarios', 'listar'],
          summary: 'Lista todos los usuarios de la tabla usuarios de la base de datos.',
          parameters: [{ $ref: '#/components/parameters/token' }],
          responses: {
            200: {
              description: '(Ok) Lista de usuarios obtenida correctamente desde la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoUsuariosGetID' }, // Reutilizando el esquema de éxito de listar por ID
                },
              },
            },
            400: { $ref: '#/components/responses/BadRequest' },
            401: { $ref: '#/components/responses/Unauthorized' },
            404: { $ref: '#/components/responses/NotFound' },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
      },
      '/api/v1/usuarios/{id_usuario}': {
        get: {
          tags: ['usuarios', 'listarID'],
          summary: 'Lista el usuario por el id de la tabla usuarios de la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_usuario',
              in: 'path',
              description: 'Identificador del usuario a obtener, necesario para la consulta específica.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            200: {
              description: '(Ok) La información del usuario se obtuvo correctamente de la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoUsuariosGetID' },
                },
              },
            },
            400: { $ref: '#/components/responses/BadRequest' },
            401: { $ref: '#/components/responses/Unauthorized' },
            404: { $ref: '#/components/responses/NotFound' },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
        put: {
          tags: ['usuarios', 'actualizar'],
          summary: 'Actualiza un usuario existente en la tabla usuarios de la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_usuario',
              in: 'path',
              description: 'Identificador del usuario a actualizar, necesario para la operación de actualización.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/BodyUsuariosPut' },
              },
            },
          },
          responses: {
            200: {
              description: '(Ok) Usuario actualizado correctamente en la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoUsuariosPost' },
                },
              },
            },
            400: { $ref: '#/components/responses/BadRequest' },
            401: { $ref: '#/components/responses/Unauthorized' },
            404: { $ref: '#/components/responses/NotFound' },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
        delete: {
          tags: ['usuarios', 'eliminar'],
          summary: 'Actualiza el estado de un usuario a inactivo (eliminación lógica) en la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_usuario',
              in: 'path',
              description: 'Identificador del usuario a eliminar, necesario para la operación de eliminación lógica.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            200: {
              description: '(Ok) Usuario eliminado correctamente de la base de datos',
              content: {
                'application/json': {
                  schema: { type: 'object', properties: { message: { type: 'string', example: 'Usuario eliminado correctamente' } } },
                },
              },
            },
            400: { $ref: '#/components/responses/BadRequest' },
            401: { $ref: '#/components/responses/Unauthorized' },
            404: { $ref: '#/components/responses/NotFound' },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
      },
    },
    components: {
      responses: {
        Unauthorized: {
          description: '(Unauthorized) No hay autorización para llamada al servicio. Requiere un token válido.',
        },
        NotFound: {
          description: '(NotFound) No se encontró la información solicitada en la base de datos.',
        },
        BadRequest: {
          description: '(BadRequest) Los datos enviados son incorrectos o faltan datos obligatorios no enviados.',
        },
        ServerError: {
          description: '(ServerError) Error en el servidor. Intente nuevamente más tarde.',
        },
      },
      parameters: {
        token: {
          in: 'header',
          name: 'token',
          description: 'Token de autenticación, necesario para acceder a los servicios protegidos.',
          required: true,
          schema: { type: 'string' },
        },
      },
      schemas: {
        BodyUsuariosPost: {
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
        },
        BodyUsuariosPut: {
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
        },
        ExitoUsuariosPost: {
          type: 'object',
          properties: {
            respuesta: {
              type: 'integer',
              enum: [1],
              description: 'Bandera que nos señala si fue insertado correctamente. 1 indica éxito.',
            },
          },
        },
        ExitoUsuariosGetID: {
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
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // Ruta a tus archivos de rutas
};

export default swaggerOptions;
