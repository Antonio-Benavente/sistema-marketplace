import express, { Application } from 'express';

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

//Database

//Midlewares
app.use(express.json());


//Routes
app.use('/api/v1/usuarios',usuarioRoutes);
app.use('/api/v1/perfiles',perfilRoutes);
app.use('/api/v1/categorias',categoriaRoutes);
app.use('/api/v1/productos',productoRoutes);
app.use('/api/v1/estadosCompras',estadoCompraRoutes);
app.use('/api/v1/compras',compraRoutes);
app.use('/api/v1/detallesCompras',detalleCompraRoutes);
app.use('/api/v1/comentarios',comentarioRoutes);
app.use('/api/v1/bitacoras',bitacoraRoutes);

export default app;