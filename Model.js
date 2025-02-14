const connection = require('../Sistema de Usuarios/Db'); // Conexão com o banco

// Função para criar usuário
const criarUser = (nome, email, cpf, telefone, endereco, senha, callback) => {
    const query = 'INSERT INTO usuarios (nome, email, cpf, telefone, endereco, senha) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [nome, email, cpf, telefone, endereco, senha], (err, result) => {
        if (err) {
            return callback(err); // Retorna erro se ocorrer
        }
        callback(null, result); // Retorna o resultado da inserção
    });
};

// Função para buscar usuário (usando cpf para buscar)
const buscarUser = (cpf, callback) => {
    const query = cpf 
        ? 'SELECT * FROM usuarios WHERE cpf = ?' 
        : 'SELECT * FROM usuarios';  // Se o CPF for passado, busca por ele; caso contrário, busca todos
    connection.query(query, cpf ? [cpf] : [], (err, result) => {
        if (err) {
            return callback(err); // Retorna erro se ocorrer
        }
        callback(null, result); // Retorna os usuários encontrados
    });
};

// Função para editar usuário
const editarUser = (nome, email, telefone, endereco, cpf, callback) => {
    const query = 'UPDATE usuarios SET nome = ?, email = ?, telefone = ?, endereco = ? WHERE cpf = ?';
    connection.query(query, [nome, email, telefone, endereco, cpf], (err, result) => {
        if (err) {
            return callback(err); // Retorna erro se ocorrer
        }
        callback(null, result); // Retorna o resultado da atualização
    });
};
