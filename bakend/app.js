require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json()); // Para parsear application/json


// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

//  Verificar conexión a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

app.get('/hola', (req, res) => {
  res.send('Hola Mundo');
});

//Endpoint que DEVUELVE TODOS LOS estacionamientos
app.get('/api/estacionamientos', (req, res) => {
  const query = 'SELECT * FROM aparcamiento';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los datos de los parkings');
    } else {
      res.json(results);
    }
  });
});

//Endpoint para INSERTAR UN TICKET
app.post('/api/tickets/ingresar', async (req, res) => {
    const { aparcamiento_id, matricula, precio_hora } = req.body;
    // No necesitas recibir fecha_entrada desde el frontend
  
    // Usa la función NOW() de MySQL para establecer la fecha y hora actuales
    const query = `
      INSERT INTO ticket (aparcamiento_id, matricula, fecha_entrada, precio_hora) 
      VALUES (?, ?, NOW(), ?)
    `;
  
    try {
      const [result] = await db.promise().query(query, [aparcamiento_id, matricula, precio_hora]);
      // Después de insertar el ticket, obtén los datos completos del ticket insertado
      const [fullTicket] = await db.promise().query('SELECT * FROM ticket WHERE id = ?', [result.insertId]);
      
      res.json({ success: true, message: 'Ticket creado con éxito.', ticket: fullTicket[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al crear el ticket.', error: error.message });
    }
  });


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });