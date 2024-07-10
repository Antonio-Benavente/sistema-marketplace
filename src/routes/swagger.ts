import { Options } from 'swagger-jsdoc';
import { BodyUsuariosPost, BodyUsuariosPut, ExitoUsuariosGetID } from '../schemas/usuarioSchema';
import { BodyProductosPost, BodyProductosPut, ExitoProductosGetID } from '../schemas/productoSchema';
import { BodyPerfilesPost, BodyPerfilesPut, ExitoPerfilesGetID } from '../schemas/perfilSchema';
import { BodyCategoriasPost, BodyCategoriasPut, ExitoCategoriasGetID } from '../schemas/categoriaSchema';
import { BodyComprasPost, BodyComprasPut, ExitoComprasGetID } from '../schemas/compraSchema';
import { BodyDetalleComprasPost, BodyDetalleComprasPut, ExitoDetalleComprasGetID } from '../schemas/detalleCompraSchema';
import { BodyEstadoComprasPost, BodyEstadoComprasPut, ExitoEstadoComprasGetID } from '../schemas/estadoCompraSchema';
import { BodyComentariosPost, BodyComentariosPut, ExitoComentariosGetID } from '../schemas/comentarioSchema';
import { BodyBitacorasPost, BodyBitacorasPut, ExitoBitacorasGetID } from '../schemas/bitacoraSchema';

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
      },
      {
        name: 'Compras',
        description: 'Este endpoint maneja todo el CRUD de la tabla compras. Incluye creación, lectura, actualización y eliminación de compras.',
      },
      {
        name: 'DetallesCompras',
        description: 'Este endpoint maneja todo el CRUD de la tabla detallesCompras. Incluye creación, lectura, actualización y eliminación de detallesCompras.',
      },
      {
        name: 'EstadosCompra',
        description: 'Este endpoint maneja todo el CRUD de la tabla estadosCompras. Incluye creación, lectura, actualización y eliminación de estadosCompras.',
      },
      {
        name: 'Comentarios',
        description: 'Este endpoint maneja todo el CRUD de la tabla comentarios. Incluye creación, lectura, actualización y eliminación de comentarios.',
      },
      {
        name: 'Bitacoras',
        description: 'Este endpoint maneja todo el CRUD de la tabla bitacoras. Incluye creación, lectura, actualización y eliminación de bitacoras.',
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

    // COMPRAS
    '/api/v1/compras': {
      post: {
        tags: ['Compras'],
        summary: 'Inserta un nuevo dato a la tabla compras de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyComprasPost' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Compra insertada correctamente en la base de datos',
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
        tags: ['Compras'],
        summary: 'Lista todas las compras de la tabla compras de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        responses: {
          200: {
            description: '(Ok) Lista de compras obtenida correctamente desde la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoComprasGetID' },
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
    '/api/v1/compras/{id_compra}': {
      get: {
        tags: ['Compras'],
        summary: 'Lista la compra por el id de la tabla compras de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_compra',
            in: 'path',
            description: 'Identificador de la compra a obtener, necesario para la consulta específica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) La información de la compra se obtuvo correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoComprasGetID' },
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
        tags: ['Compras'],
        summary: 'Actualiza una compra existente en la tabla compras de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_compra',
            in: 'path',
            description: 'Identificador de la compra a actualizar, necesario para la operación de actualización.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyComprasPut' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Compra actualizada correctamente en la base de datos',
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
        tags: ['Compras'],
        summary: 'Actualiza el estado de una compra a inactivo (eliminación lógica) en la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_compra',
            in: 'path',
            description: 'Identificador de la compra a eliminar, necesario para la operación de eliminación lógica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) Compra eliminada correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { type: 'object', properties: { message: { type: 'string', example: 'Compra eliminada correctamente' } } },
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

    // DETALLE COMPRAS
    '/api/v1/detallesCompras': {
      post: {
        tags: ['DetallesCompras'],
        summary: 'Inserta un nuevo dato a la tabla detalle_compra de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyDetalleComprasPost' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Detalle ompras insertado correctamente en la base de datos',
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
        tags: ['DetallesCompras'],
        summary: 'Lista todos los detalle compra de la tabla detalle_compra de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        responses: {
          200: {
            description: '(Ok) Lista de detalle compra obtenida correctamente desde la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoDetalleComprasGetID' },
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
    '/api/v1/detallesCompras/{id_detalle}': {
      get: {
        tags: ['DetallesCompras'],
        summary: 'Lista el detalle compra por el id de la tabla detalle_compra de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_detalle',
            in: 'path',
            description: 'Identificador del detalle compra a obtener, necesario para la consulta específica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) La información del detalle compra se obtuvo correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoDetalleComprasGetID' },
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
        tags: ['DetallesCompras'],
        summary: 'Actualiza un detalle compra existente en la tabla detalle_compra de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_detalle',
            in: 'path',
            description: 'Identificador del detalle compra a actualizar, necesario para la operación de actualización.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyDetalleComprasPut' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Detalle compra actualizado correctamente en la base de datos',
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
        tags: ['DetallesCompras'],
        summary: 'Actualiza el estado de  un detalle compra a inactivo (eliminación lógica) en la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_detalle',
            in: 'path',
            description: 'Identificador del detalle compra a eliminar, necesario para la operación de eliminación lógica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) Detalle compra eliminado correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { type: 'object', properties: { message: { type: 'string', example: 'Detalle compra eliminado correctamente' } } },
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

    // ESTADOS COMPRAS
    '/api/v1/estadosCompras': {
      post: {
        tags: ['EstadosCompra'],
        summary: 'Inserta un nuevo dato a la tabla estados_compra de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyEstadoComprasPost' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Estado compra insertado correctamente en la base de datos',
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
        tags: ['EstadosCompra'],
        summary: 'Lista todos los estados compra de la tabla estados_compra de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        responses: {
          200: {
            description: '(Ok) Lista de estados compra obtenida correctamente desde la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoEstadoComprasGetID' },
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
    '/api/v1/estadosCompras/{id_estado}': {
      get: {
        tags: ['EstadosCompra'],
        summary: 'Lista el estado compra por el id de la tabla estados_compra de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_estado',
            in: 'path',
            description: 'Identificador del estado compra a obtener, necesario para la consulta específica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) La información del estado compra se obtuvo correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoEstadoComprasGetID' },
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
        tags: ['EstadosCompra'],
        summary: 'Actualiza un estado compra existente en la tabla estados_compra de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_estado',
            in: 'path',
            description: 'Identificador del estado compra a actualizar, necesario para la operación de actualización.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyEstadoComprasPut' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Estado compra actualizado correctamente en la base de datos',
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
        tags: ['EstadosCompra'],
        summary: 'Actualiza el estado de un estado compra a inactivo (eliminación lógica) en la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_estado',
            in: 'path',
            description: 'Identificador del estado compra a eliminar, necesario para la operación de eliminación lógica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) Estado compra eliminado correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { type: 'object', properties: { message: { type: 'string', example: 'Estado compra eliminado correctamente' } } },
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

    // COMENTARIOS
    '/api/v1/comentarios': {
      post: {
        tags: ['Comentarios'],
        summary: 'Inserta un nuevo dato a la tabla comentarios de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyComentariosPost' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Comentario insertado correctamente en la base de datos',
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
        tags: ['Comentarios'],
        summary: 'Lista todos los comentarios de la tabla comentarios de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        responses: {
          200: {
            description: '(Ok) Lista de comentarios obtenida correctamente desde la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoComentariosGetID' },
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
    '/api/v1/comentarios/{id_comentario}': {
      get: {
        tags: ['Comentarios'],
        summary: 'Lista el comentario por el id de la tabla comentarios de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_comentario',
            in: 'path',
            description: 'Identificador del comentario a obtener, necesario para la consulta específica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) La información del comentario se obtuvo correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoComentariosGetID' },
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
        tags: ['Comentarios'],
        summary: 'Actualiza un comentario existente en la tabla comentarios de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_comentario',
            in: 'path',
            description: 'Identificador del comentario a actualizar, necesario para la operación de actualización.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyComentariosPut' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Comentario actualizado correctamente en la base de datos',
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
        tags: ['Comentarios'],
        summary: 'Actualiza el estado de un comentario a inactivo (eliminación lógica) en la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_comentario',
            in: 'path',
            description: 'Identificador del comentario a eliminar, necesario para la operación de eliminación lógica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) Comentario eliminado correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { type: 'object', properties: { message: { type: 'string', example: 'Comentario eliminado correctamente' } } },
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

    // BITACORAS
    '/api/v1/bitacoras': {
      post: {
        tags: ['Bitacoras'],
        summary: 'Inserta un nuevo dato a la tabla bitacoras de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyBitacorasPost' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Bitacora insertada correctamente en la base de datos',
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
        tags: ['Bitacoras'],
        summary: 'Lista todas las bitacoras de la tabla bitacoras de la base de datos.',
        parameters: [{ $ref: '#/components/parameters/token' }],
        responses: {
          200: {
            description: '(Ok) Lista de bitacoras obtenida correctamente desde la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoBitacorasGetID' },
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
    '/api/v1/bitacoras/{id_bitacora}': {
      get: {
        tags: ['Bitacoras'],
        summary: 'Lista la bitacora por el id de la tabla bitacoras de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_bitacora',
            in: 'path',
            description: 'Identificador de la bitacora a obtener, necesario para la consulta específica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) La información de la bitacora se obtuvo correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ExitoBitacorasGetID' },
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
        tags: ['Bitacoras'],
        summary: 'Actualiza una bitacora existente en la tabla bitacoras de la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_bitacora',
            in: 'path',
            description: 'Identificador de la bitacora a actualizar, necesario para la operación de actualización.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/BodyBitacorasPut' },
            },
          },
        },
        responses: {
          200: {
            description: '(Ok) Bitacora actualizada correctamente en la base de datos',
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
        tags: ['Bitacoras'],
        summary: 'Actualiza el estado de una bitacora a inactivo (eliminación lógica) en la base de datos.',
        parameters: [
          { $ref: '#/components/parameters/token' },
          {
            name: 'id_bitacora',
            in: 'path',
            description: 'Identificador de la bitacora a eliminar, necesario para la operación de eliminación lógica.',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: '(Ok) Bitacora eliminada correctamente de la base de datos',
            content: {
              'application/json': {
                schema: { type: 'object', properties: { message: { type: 'string', example: 'Bitacora eliminada correctamente' } } },
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

        // COMPRAS RESPUESTAS
        BodyComprasPost,
        BodyComprasPut,
        ExitoComprasGetID,

        // DETALLE COMPRAS RESPUESTAS
        BodyDetalleComprasPost,
        BodyDetalleComprasPut,
        ExitoDetalleComprasGetID,

        // ESTADO COMPRAS RESPUESTAS
        BodyEstadoComprasPost,
        BodyEstadoComprasPut,
        ExitoEstadoComprasGetID,

        // COMENTARIOS RESPUESTAS
        BodyComentariosPost,
        BodyComentariosPut,
        ExitoComentariosGetID,

        // BITACORAS RESPUESTAS
        BodyBitacorasPost,
        BodyBitacorasPut,
        ExitoBitacorasGetID
      },
    },
  },
  // Ruta a tus archivos de rutas
  apis: ['./src/routes/*.ts'], 
};

export default swaggerOptions;
