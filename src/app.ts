import express, { Application } from 'express';

import perfilRoutes from './routes/perfilRoutes';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1/perfiles',perfilRoutes);

export default app;