import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUser from './CreateUser'; // Componente de criação de usuário
import UserList from './UserList'; // Componente para listar usuários

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar é exibida em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/Create User" element={<CreateUser />} /> {/* Página para criar usuários */}
        <Route path="/User list" element={<UserList />} /> {/* Página para listar usuários */}
      </Routes>
    </Router>
  );
};

export default App;
