import express, { Application } from 'express';

import perfilRoutes from './routes/perfilRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import usuarioRoutes from './routes/usuarioRoutes';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());


//Routes
app.use('/api/v1/usuarios',usuarioRoutes);
app.use('/api/v1/perfiles',perfilRoutes);
app.use('/api/v1/categorias',categoriaRoutes);

export default app;