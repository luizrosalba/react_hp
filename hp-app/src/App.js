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


 /*{
  
  
    <div className="App">
      <header className="App-header">
            <div className="container">
                <nav>
                    <a href="#sobre" >   Sobre   </a>
                    <a href="#fisica" >   Física   </a>
                    <a href="#Prog" >   Programação   </a>
                </nav>
            </div>
        </header>
    </div>



  import logo from './logo.svg';
          <img src={logo} className="App-logo" alt="logo" />
       <p>
           <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
       
        }*/