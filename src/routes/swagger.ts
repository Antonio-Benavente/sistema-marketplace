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
        name: 'Usuarios',
        description: 'Este endpoint maneja todo el CRUD de la tabla usuarios. Incluye creación, lectura, actualización y eliminación de usuarios.',
      },
      {
        name: 'Productos',
        description: 'Este endpoint maneja todo el CRUD de la tabla productos. Incluye creación, lectura, actualización y eliminación de usuarios.',
      },
      {
        name: 'Perfiles',
        description: 'Este endpoint maneja todo el CRUD de la tabla perfiles. Incluye creación, lectura, actualización y eliminación de usuarios.',
      },
      {
        name: 'Insertar',
        description: 'Inserta un nuevo dato a la tabla especificada de la base de datos, permitiendo la creación de nuevos registros.',
      },
      {
        name: 'Listar',
        description: 'Lista todos los datos de la tabla especificada de la base de datos, proporcionando una visión general de los registros.',
      },
      {
        name: 'Listar ID',
        description: 'Lista el dato por el id de la tabla especificada de la base de datos, permitiendo la consulta de un registro específico.',
      },
      {
        name: 'Actualizar',
        description: 'Actualiza un dato existente en la tabla especificada de la base de datos, permitiendo modificar registros previamente creados.',
      },
      {
        name: 'Eliminar',
        description: 'Actualiza el estado de un campo a inactivo (eliminación lógica).',
      }
    ],
    paths: {
      '/api/v1/usuarios': {
        post: {
          tags: ['Usuarios', 'Insertar'],
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
          tags: ['Usuarios', 'Listar'],
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
          tags: ['Usuarios', 'Listar ID'],
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
          tags: ['Usuarios', 'Actualizar'],
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
          tags: ['Usuarios', 'Eliminar'],
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

      //PRODUCTOS
      '/api/v1/productos': {
        post: {
          tags: ['Productos', 'Insertar'],
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
          tags: ['Productos', 'Listar'],
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
          tags: ['Productos', 'Listar ID'],
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
          tags: ['Productos', 'Actualizar'],
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
          tags: ['Productos', 'Eliminar'],
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

      //PERFILES
      '/api/v1/perfiles': {
        post: {
          tags: ['Perfiles', 'Insertar'],
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
          tags: ['Perfiles', 'Listar'],
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
          tags: ['Perfiles', 'Listar ID'],
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
          tags: ['Perfiles', 'Actualizar'],
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
          tags: ['Perfiles', 'Eliminar'],
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

      //CATEGORIAS
    '/api/v1/categorias': {
      post: {
        tags: ['Categorias', 'Insertar'],
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
        tags: ['Categorias', 'Listar'],
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
        tags: ['Categorias', 'Listar ID'],
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
        tags: ['Categorias', 'Actualizar'],
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
        tags: ['Categorias', 'Eliminar'],
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

        //PRODUCTOS
        BodyProductosPost: {
          type: 'object',
          properties: {
            categoria: {
              type: 'integer',
              description: 'Categoria del producto.',
            },
            usuario: {
              type: 'integer',
              description: 'Usuario que registra el producto.',
            },
            nombre: {
              type: 'string',
              description: 'Nombre del producto.',
            },
            descripcion: {
              type: 'string',
              description: 'Descripcion del producto.',
            },
            precio: {
              type: 'number',
              description: 'Precio del producto.',
            },
            stock: {
              type: 'integer',
              description: 'Stock de productos disponibles.',
            },
            imagen: {
              type: 'string',
              description: 'Imagen del producto.',
            }
          },
        },
        BodyProductosPut: {
          type: 'object',
          properties: {
            categoria: {
              type: 'integer',
              description: 'Categoria del producto.',
            },
            usuario: {
              type: 'integer',
              description: 'Usuario que registra el producto.',
            },
            nombre: {
              type: 'string',
              description: 'Nombre del producto.',
            },
            descripcion: {
              type: 'string',
              description: 'Descripcion del producto.',
            },
            precio: {
              type: 'number',
              description: 'Precio del producto.',
            },
            stock: {
              type: 'integer',
              description: 'Stock de productos disponibles.',
            },
            imagen: {
              type: 'string',
              description: 'Imagen del producto.',
            }
          },
        },
        ExitoProductosGetID: {
          type: 'object',
          properties: {
            id_producto: {
              type: 'integer',
              description: 'Identificador único del producto en la base de datos.',
            },
            categoria: {
              type: 'integer',
              description: 'Categoria a la que pertenece el producto.',
            },
            usuario: {
              type: 'integer',
              description: 'Usuario que registro el producto',
            },
            nombre: {
              type: 'string',
              description: 'Nombre del producto.',
            },
            descripcion: {
              type: 'string',
              description: 'Descripcion del producto.',
            },
            precio: {
              type: 'number',
              description: 'Precio del producto.',
            },
            stock: {
              type: 'integer',
              description: 'Stock de productos disponibles.',
            },
            imagen: {
              type: 'string',
              description: 'Imagen del producto.',
            }
          },
        },

        //PERFILES
        BodyPerfilesPost: {
          type: 'object',
          properties: {
            descripcion: {
              type: 'string',
              description: 'Descripcion del perfil.',
            }
          },
        },
        BodyPerfilesPut: {
          type: 'object',
          properties: {
            descripcion: {
              type: 'string',
              description: 'Descripcion del perfil.',
            }
          },
        },
        ExitoPerfilesGetID: {
          type: 'object',
          properties: {
            id_perfil: {
              type: 'integer',
              description: 'Identificador único del perfil en la base de datos.',
            },
            descripcion: {
              type: 'string',
              description: 'Descripcion del perfil.',
            }
          },
        },

        //PERFILES
        BodyCategoriasPost: {
          type: 'object',
          properties: {
            nombre: {
              type: 'string',
              description: 'Nombre de la categoria.',
            }
          },
        },
        BodyCategoriasPut: {
          type: 'object',
          properties: {
            nombre: {
              type: 'string',
              description: 'Nombre de la categoria.',
            }
          },
        },
        ExitoCategoriasGetID: {
          type: 'object',
          properties: {
            id_categoria: {
              type: 'integer',
              description: 'Identificador único de la categoria en la base de datos.',
            },
            nombre: {
              type: 'string',
              description: 'Nombre de la categoria.',
            }
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // Ruta a tus archivos de rutas
};

export default swaggerOptions;
