const express = require('express');
const router = express.Router();
const { criarUsuarioController, buscarUsuarioController, editarUsuarioController, excluirUsuarioController } = require('./controllers');

// Rota para listar usuários (GET)
router.get('/usuarios/:cpf', buscarUsuarioController);

// Rota para criar um novo usuário (POST)
router.post('/usuarios', criarUsuarioController);

// Rota para editar um usuário (PUT)
router.put('/usuarios/:cpf', editarUsuarioController);

// Rota para excluir um usuário (DELETE)
router.delete('/usuarios/:cpf', excluirUsuarioController);

module.exports = router;
