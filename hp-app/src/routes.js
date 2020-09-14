import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './common/template/header'
import Footer from './common/template/footer'


import { NavBar } from './components/NavBar';

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

/* 
Vale ressaltar que o path="/" pode ser combinado 
com um atributo extra chamado exact para garantir 
que se a rota tiver somente "/" ele vai ser renderizado 
e evitar conflito com as outras rotas que possuam o 
valor passado no path.
<Route path='*' component={ComponenteDePagina404} />
*/
function Routes() {
  return (
    <BrowserRouter>
    <Header />
    <div>
      <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Sobre" component={Sobre} />
          <Route path="/Contato" component={Contato} />
          
          <Redirect from='*' to='/' />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
 
  )
}


export default Routes


/*
<BrowserRouter>
      <Header />
       <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Sobre" component={Sobre} />
        <Route path="/Contacto" component={Contato} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </BrowserRouter>


*/