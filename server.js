const express = require('express');
const app = express();
const userRoutes = require('./userRoutes'); // Importa as rotas

app.use(express.json()); // Permite que o servidor leia o corpo das requisições JSON

// Usando as rotas definidas no arquivo userRotas
app.use('/api', userRoutes); // Todas as rotas do userRotas vão começar com '/api'

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
