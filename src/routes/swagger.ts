import { Options } from 'swagger-jsdoc';
import { BodyUsuariosPost, BodyUsuariosPut, ExitoUsuariosGetID } from '../schemas/usuarioSchema';
import { BodyProductosPost, BodyProductosPut, ExitoProductosGetID } from '../schemas/productoSchema';
import { BodyPerfilesPost, BodyPerfilesPut, ExitoPerfilesGetID } from '../schemas/perfilSchema';
import { BodyCategoriasPost, BodyCategoriasPut, ExitoCategoriasGetID } from '../schemas/categoriaSchema';

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
        name: 'Usuarios',
        description: 'Este endpoint maneja todo el CRUD de la tabla usuarios. Incluye creación, lectura, actualización y eliminación de usuarios.',
      },
      {
        name: 'Productos',
        description: 'Este endpoint maneja todo el CRUD de la tabla productos. Incluye creación, lectura, actualización y eliminación de productos.',
      },
      {
        name: 'Perfiles',
        description: 'Este endpoint maneja todo el CRUD de la tabla perfiles. Incluye creación, lectura, actualización y eliminación de perfiles.',
      },
      {
        name: 'Categorias',
        description: 'Este endpoint maneja todo el CRUD de la tabla categorias. Incluye creación, lectura, actualización y eliminación de categorias.',
      }
    ],
    paths: {
      
      // USUARIOS
      '/api/v1/usuarios': {
        post: {
          tags: ['Usuarios'],
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
                  schema: { $ref: '#/components/schemas/ExitoPost' },
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
          tags: ['Usuarios'],
          summary: 'Lista todos los usuarios de la tabla usuarios de la base de datos.',
          parameters: [{ $ref: '#/components/parameters/token' }],
          responses: {
            200: {
              description: '(Ok) Lista de usuarios obtenida correctamente desde la base de datos',
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
      },
      '/api/v1/usuarios/{id_usuario}': {
        get: {
          tags: ['Usuarios'],
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
          tags: ['Usuarios'],
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
                  schema: { $ref: '#/components/schemas/ExitoPost' },
                },
              },
            },
            400: { $ref: '#/components/responses/BadRequest' },
            401: { $ref: '#/components/responses/Unauthorized' },
            404: { $ref: '#/components/responses/NotFound' },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
        patch: {
          tags: ['Usuarios'],
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

      // PRODUCTOS
      '/api/v1/productos': {
        post: {
          tags: ['Productos'],
          summary: 'Inserta un nuevo dato a la tabla productos de la base de datos.',
          parameters: [{ $ref: '#/components/parameters/token' }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/BodyProductosPost' },
              },
            },
          },
          responses: {
            200: {
              description: '(Ok) Producto insertado correctamente en la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoPost' },
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
          tags: ['Productos'],
          summary: 'Lista todos los productos de la tabla productos de la base de datos.',
          parameters: [{ $ref: '#/components/parameters/token' }],
          responses: {
            200: {
              description: '(Ok) Lista de productos obtenida correctamente desde la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoProductosGetID' },
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
      '/api/v1/productos/{id_producto}': {
        get: {
          tags: ['Productos'],
          summary: 'Lista el producto por el id de la tabla productos de la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_producto',
              in: 'path',
              description: 'Identificador del producto a obtener, necesario para la consulta específica.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            200: {
              description: '(Ok) La información del producto se obtuvo correctamente de la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoProductosGetID' },
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
          tags: ['Productos'],
          summary: 'Actualiza un producto existente en la tabla productos de la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_producto',
              in: 'path',
              description: 'Identificador del producto a actualizar, necesario para la operación de actualización.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/BodyProductosPut' },
              },
            },
          },
          responses: {
            200: {
              description: '(Ok) Producto actualizado correctamente en la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoPost' },
                },
              },
            },
            400: { $ref: '#/components/responses/BadRequest' },
            401: { $ref: '#/components/responses/Unauthorized' },
            404: { $ref: '#/components/responses/NotFound' },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
        patch: {
          tags: ['Productos'],
          summary: 'Actualiza el estado de un producto a inactivo (eliminación lógica) en la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_producto',
              in: 'path',
              description: 'Identificador del producto a eliminar, necesario para la operación de eliminación lógica.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            200: {
              description: '(Ok) Producto eliminado correctamente de la base de datos',
              content: {
                'application/json': {
                  schema: { type: 'object', properties: { message: { type: 'string', example: 'Producto eliminado correctamente' } } },
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

      // PERFILES
      '/api/v1/perfiles': {
        post: {
          tags: ['Perfiles'],
          summary: 'Inserta un nuevo dato a la tabla perfiles de la base de datos.',
          parameters: [{ $ref: '#/components/parameters/token' }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/BodyPerfilesPost' },
              },
            },
          },
          responses: {
            200: {
              description: '(Ok) Perfil insertado correctamente en la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoPost' },
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
          tags: ['Perfiles'],
          summary: 'Lista todos los perfiles de la tabla perfiles de la base de datos.',
          parameters: [{ $ref: '#/components/parameters/token' }],
          responses: {
            200: {
              description: '(Ok) Lista de perfiles obtenida correctamente desde la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoPerfilesGetID' },
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
      '/api/v1/perfiles/{id_perfil}': {
        get: {
          tags: ['Perfiles'],
          summary: 'Lista el perfil por el id de la tabla perfiles de la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_perfil',
              in: 'path',
              description: 'Identificador del perfil a obtener, necesario para la consulta específica.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            200: {
              description: '(Ok) La información del perfil se obtuvo correctamente de la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoPerfilesGetID' },
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
          tags: ['Perfiles'],
          summary: 'Actualiza un perfil existente en la tabla perfiles de la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_perfil',
              in: 'path',
              description: 'Identificador del perfil a actualizar, necesario para la operación de actualización.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/BodyPerfilesPut' },
              },
            },
          },
          responses: {
            200: {
              description: '(Ok) Perfil actualizado correctamente en la base de datos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ExitoPost' },
                },
              },
            },
            400: { $ref: '#/components/responses/BadRequest' },
            401: { $ref: '#/components/responses/Unauthorized' },
            404: { $ref: '#/components/responses/NotFound' },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
        patch: {
          tags: ['Perfiles'],
          summary: 'Actualiza el estado de un perfil a inactivo (eliminación lógica) en la base de datos.',
          parameters: [
            { $ref: '#/components/parameters/token' },
            {
              name: 'id_perfil',
              in: 'path',
              description: 'Identificador del perfil a eliminar, necesario para la operación de eliminación lógica.',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            200: {
              description: '(Ok) Perfil eliminado correctamente de la base de datos',
              content: {
                'application/json': {
                  schema: { type: 'object', properties: { message: { type: 'string', example: 'Perfil eliminado correctamente' } } },
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

      // CATEGORIAS
    '/api/v1/categorias': {
      post: {
        tags: ['Categorias'],
        summary: 'Inserta un nuevo dato a la tabla categorias de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyCategoriasPost' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Categoria insertada correctamente en la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoPost' },
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
        tags: ['Categorias'],
        summary: 'Lista todas las categorias de la tabla categorias de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        responses: {
          200: {
            description: '(Ok) Lista de categorias obtenida correctamente desde la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoCategoriasGetID' },
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
    '/api/v1/categorias/{id_categoria}': {
      get: {
        tags: ['Categorias'],
        summary: 'Lista la categoria por el id de la tabla categorias de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_categoria',
            in: 'path',
            description: 'Identificador de la categoria a obtener, necesario para la consulta específica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) La información de la categoria se obtuvo correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoCategoriasGetID' },
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
        tags: ['Categorias'],
        summary: 'Actualiza una categoria existente en la tabla categorias de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_categoria',
            in: 'path',
            description: 'Identificador de la categoria a actualizar, necesario para la operación de actualización.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyCategoriasPut' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Categoria actualizada correctamente en la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoPost' },
              },
            },
          },
          400: { $ref: '#/components/responses/BadRequest' },
          401: { $ref: '#/components/responses/Unauthorized' },
          404: { $ref: '#/components/responses/NotFound' },
          500: { $ref: '#/components/responses/ServerError' },
        },
      },
      patch: {
        tags: ['Categorias'],
        summary: 'Actualiza el estado de una categoria a inactivo (eliminación lógica) en la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_categoria',
            in: 'path',
            description: 'Identificador de la categoria a eliminar, necesario para la operación de eliminación lógica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) Categoria eliminada correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { type: 'object', properties: { message: { type: 'string', example: 'Categoria eliminado correctamente' } } },
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
        ExitoPost: {
          type: 'object',
          properties: {
            respuesta: {
              type: 'integer',
              enum: [1],
              description: 'Bandera que nos señala si fue insertado correctamente. 1 indica éxito.',
            },
          },
        },
        // USUARIOS RESPUESTAS
        BodyUsuariosPost,
        BodyUsuariosPut,
        ExitoUsuariosGetID,

        // PRODUCTOS RESPUESTAS
        BodyProductosPost,
        BodyProductosPut,
        ExitoProductosGetID,

        // PERFILES RESPUESTAS
        BodyPerfilesPost,
        BodyPerfilesPut,
        ExitoPerfilesGetID,

        // CATEGORIAS RESPUESTAS
        BodyCategoriasPost,
        BodyCategoriasPut,
        ExitoCategoriasGetID,
      },
    },
  },
  // Ruta a tus archivos de rutas
  apis: ['./src/routes/*.ts'], 
};

export default swaggerOptions;
