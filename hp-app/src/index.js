import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Procura o item root no index.html e renderiza a pagina  */

/*Assim como o Fragment, o StrictMode não renderiza 
nenhum elemento visível na interface. 
Ele ativa, no entanto, verificações e avisos adicionais 
para os seus descendentes.*/

ReactDOM.render(
  
    <App />,
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
tirei o strict mode para evitar o warning 
  <React.StrictMode>
    <App />
  </React.StrictMode>,

*/