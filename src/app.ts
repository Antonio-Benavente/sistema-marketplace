import express, { Application } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './routes/swagger';

import perfilRoutes from './routes/perfilRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import productoRoutes from './routes/productoRoutes';
import estadoCompraRoutes from './routes/estadoCompraRoutes';
import compraRoutes from './routes/compraRoutes';
import detalleCompraRoutes from './routes/detalleCompraRoutes';
import comentarioRoutes from './routes/comentarioRoutes';
import bitacoraRoutes from './routes/bitacoraRoutes';

const app: Application = express();
// Genera la especificación de Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions); 

// Database

// Middleware
app.use(express.json());

// Swagger Documentation
// Configura la ruta para la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); 

// Routes
app.use('/api/v1/usuarios', usuarioRoutes);
app.use('/api/v1/perfiles', perfilRoutes);
app.use('/api/v1/categorias', categoriaRoutes);
app.use('/api/v1/productos', productoRoutes);
app.use('/api/v1/estadosCompras', estadoCompraRoutes);
app.use('/api/v1/compras', compraRoutes);
app.use('/api/v1/detallesCompras', detalleCompraRoutes);
app.use('/api/v1/comentarios', comentarioRoutes);
app.use('/api/v1/bitacoras', bitacoraRoutes);

export default app;
