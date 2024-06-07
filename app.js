const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Middleware para parsear el body de las peticiones
app.use(express.json());

// Ruta POST para el endpoint único
app.post('/endpoint', (req, res) => {
  // Imprimir el cuerpo recibido en la consola
  console.log('Cuerpo recibido:', req.body);

  // Enviar una respuesta con código de estado 200
  res.sendStatus(200);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});