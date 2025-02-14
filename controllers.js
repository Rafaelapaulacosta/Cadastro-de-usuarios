const { criarUser, buscarUser, editarUser, deleteUser } = require('../Sistema de Usuarios/Model'); // Importa as funções do modelo

// Função para criar usuário
const criarUsuarioController = (req, res) => {
  const { nome, email, cpf, telefone, endereco, senha } = req.body; // Dados recebidos da requisição
  criarUser(nome, email, cpf, telefone, endereco, senha, (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao criar usuário'); // Retorna erro se houver falha
    }
    res.status(201).send(`Usuário ${nome} criado com sucesso!`); // Retorna sucesso com a criação do usuário
  });
};

// Função para buscar usuário
const buscarUsuarioController = (req, res) => {
  const cpf = req.params.cpf; // Pega o CPF da URL
  buscarUser(cpf, (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao buscar usuário'); // Retorna erro se houver falha
    }
    res.status(200).json(result); // Retorna os dados do usuário encontrado
  });
};

// Função para editar usuário
const editarUsuarioController = (req, res) => {
  const { nome, email, telefone, endereco, cpf } = req.body; // Dados recebidos da requisição
  editarUser(nome, email, telefone, endereco, cpf, (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao editar usuário'); // Retorna erro se houver falha
    }
    res.status(200).send(`Usuário com CPF ${cpf} atualizado com sucesso!`); // Retorna sucesso com a atualização
  });
};

// Função para excluir usuário
const excluirUsuarioController = (req, res) => {
  const cpf = req.params.cpf; // Pega o CPF da URL
  deleteUser(cpf, (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao excluir usuário'); // Retorna erro se houver falha
    }
    res.status(200).send(`Usuário com CPF ${cpf} excluído com sucesso!`); // Retorna sucesso com a exclusão
  });
};

module.exports = { criarUsuarioController, buscarUsuarioController, editarUsuarioController, excluirUsuarioController }; // Exporta os controladores para as rotas
