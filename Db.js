/*require('dotenv').config();
const mysql = require('mysql2'); // acessando a biblioteca my sql

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})


// Testar a conexão
connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err.message);
      return;
    }
    console.log('Conexão bem-sucedida ao banco de dados!');
  });

  module.exports */