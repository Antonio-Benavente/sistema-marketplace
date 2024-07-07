import app from "./app";

const port = 3000;

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
  console.log(`Documentación de la API en http://localhost:${port}/api-docs`); // Log para la URL de la documentación de Swagger
});
