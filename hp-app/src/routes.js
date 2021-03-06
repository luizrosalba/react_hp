import React from 'react'
import { BrowserRouter, Redirect, Link, Route,Switch } from 'react-router-dom'

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

        <Switch>
           <Route path="/Grafico" component={TextoEGrafico} />
           <Route path="/" component={Sobre} >
                <Header />
                  <Section
                    title=""
                    subtitle={""}
                    dark={true}
                    id="sobre"
                  />
                  {/* <Link to="/" exact={true} component={Sobre} /> */}
                  <Sobre></Sobre>
                  <Section
                    title="Section 1"
                    subtitle={"nada"}
                    dark={true}
                    id="fisica"
                  />

                  {/* <Link to="/Fisica" component={Fisica} /> */}
                  <Fisica></Fisica>
                  <Section
                    title="Section 1"
                    subtitle={"nada"}
                    dark={true}
                    id="programacao"
                  />

                  {/* <Link to="/Programacao" component={Programacao} /> */}
                  <Programacao></Programacao>
                  <Section
                    title="Section 2"
                    subtitle={"nada"}
                    dark={false}
                    id="portfolio"
                  />
                  {/* <Link to="/Portfolio" component={Portfolio} /> */}
                
                  <Portfolio></Portfolio>
                <Redirect from='*' to='/' />
                <Footer />  
           </Route>

        </Switch>
     
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