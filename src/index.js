import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Providers from "./providers";
import * as serviceWorker from './serviceWorker';

/* Procura o item root no index.html e renderiza a pagina  */

/*Assim como o Fragment, o StrictMode não renderiza 
nenhum elemento visível na interface. 
Ele ativa, no entanto, verificações e avisos adicionais 
para os seus descendentes.*/

ReactDOM.render(
  
<React.StrictMode>
  <Providers />
</React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
