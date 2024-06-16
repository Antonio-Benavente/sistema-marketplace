import express, { Application } from 'express';

//import Routes from './routes/alumnoRoutes';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());

//Routes
//app.use('/api/v1/alumnos',alumnoRoutes);

export default app;