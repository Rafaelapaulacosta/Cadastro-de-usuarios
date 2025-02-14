import React from 'react';
import CreateUser from '..Components/CreateUser'; // Importando o componente CreateUser

const CreateUserPage = () => {
  return (
    <div>
      <h1>Criar Usuário</h1>
      <CreateUser /> {/* Renderizando o formulário de criação de usuário */}
    </div>
  );
};

export default CreateUserPage;
