import React, { useState } from 'react'; // Importando React e useState

const CreateUser = () => {
  // Definindo os estados para armazenar os valores do formulário
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  // Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página
    console.log({ name, email, cpf, endereco, telefone }); // Imprime os dados no console
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <br />
      <label>
        CPF:
        <input 
          type="text" 
          value={cpf} 
          onChange={(e) => setCpf(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Endereço:
        <input 
          type="text" 
          value={endereco} 
          onChange={(e) => setEndereco(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Telefone:
        <input 
          type="text" 
          value={telefone} 
          onChange={(e) => setTelefone(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Criar Usuário</button>
    </form>
  );
};

export default CreateUser;
