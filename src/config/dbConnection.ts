import { Client } from 'pg'; // Configura los detalles de conexión a tu base de datos
export const client = new Client({
  host: 'localhost',
  port: 5433, // Puerto por defecto de PostgreSQL
  user: 'postgres',
  password: 'password',
  database: 'DB123456',
});

// Conecta a la base de datos
// client
//   .connect()
//   .then(() => {
//     console.log('Conexión exitosa a la base de datos');

//     // Realiza una consulta a la base de datos
//     return client.query('SELECT * FROM tu_tabla');
//   })
//   .then((result) => {
//     console.log('Resultados:', result.rows);
//   })
//   .catch((error) => {
//     console.error('Error al conectar o consultar la base de datos:', error);
//   })
//   .finally(() => {
//     // Cierra la conexión
//     client.end();
//   });
