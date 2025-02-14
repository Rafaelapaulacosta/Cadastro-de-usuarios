import React from 'react';
import Navbar from './Components/CreateUser';  // Um exemplo de importação de outro componente
import Home from './pages/Home';  // Outro componente de página

function App() {
  return (
    <div>
      <Navbar />  {/* Exibe a barra de navegação */}
      <Home />    {/* Exibe a página inicial */}
    </div>
  );
}

export default App;
