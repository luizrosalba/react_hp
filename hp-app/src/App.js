import React from 'react';
import Routes from './routes'

import './App.css';

/*A propriedade overflow especifica quando o conteúdo 
de um elemento de nível de bloco deve ser cortado, 
exibido com barras de rolagem ou se transborda do
 elemento. */
 
function App() {
  return (
    <div overflow="hidden">
      <Routes />
    </div>
  )
}


export default App;


