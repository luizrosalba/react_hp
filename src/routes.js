import React from 'react'
import { 
  BrowserRouter as Router,
  Redirect, 
  Route,
  Switch 
} from 'react-router-dom'

import Header from './common/template/header'
import Footer from './common/template/footer'

import Sobre from './pages/Sobre'
import Fisica from './pages/Fisica'
import Programacao from './pages/Programacao'
import TextoEGrafico from './pages/Grafico'
import Certificados from './pages/Certificados'

function Routes() {

  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Sobre} />
          <Route path="/fisica" component={Fisica} />
          <Route path="/programacao" component={Programacao} />
          <Route path="/Grafico" component={TextoEGrafico} />
          <Route path="/certificados" component={Certificados} />
          <Redirect from='*' to='/' />
        </Switch>
        <Footer />
    </Router>
  )
}

export default Routes

/* 
  Vale ressaltar que o path="/" pode ser combinado 
  com um atributo extra chamado exact para garantir 
  que se a rota tiver somente "/" ele vai ser renderizado 
  e evitar conflito com as outras rotas que possuam o 
  valor passado no path.
  <Route path='*' component={ComponenteDePagina404} />
*/