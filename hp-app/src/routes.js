import React from 'react'
import { BrowserRouter, Switch, Route, Redirect,Link  } from 'react-router-dom'

import Header from './common/template/header'
import Footer from './common/template/footer'


import Sobre from './pages/Sobre'
import Fisica from './pages/Fisica'
import Programacao from './pages/Programacao'
import TextoEGrafico from './pages/Grafico'
import Portfolio from './pages/Portfolio'
import Section from "./common/Components/Section";


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

          <Link path="/" exact={true} component={Sobre} />
            <Section
            title="Section 1"
            subtitle={"nada"}
            dark={true}
            id="section1"
          />
          <Link path="/Fisica" component={Fisica} />
            <Section
            title="Section 2"
            subtitle={"nada"}
            dark={false}
            id="section2"
          />
          <Link path="/Programacao" component={Programacao} />
            <Section
            title="Section 3"
            subtitle={"nada"}
            dark={true}
            id="section3"
          />
          <Link path="/Portfolio" component={Portfolio} />
            <Section
            title="Section 4"
            subtitle={"nada"}
            dark={false}
            id="section4"
          />
          <Link path="/Grafico" component={TextoEGrafico} />
          <Redirect from='*' to='/' />
    </div>
    <Footer />
  </BrowserRouter>
 
  )
}


export default Routes


/*

import { NavBar } from './components/NavBar';


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