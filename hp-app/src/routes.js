import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './common/template/header'
import Footer from './common/template/footer'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Sobre" component={Sobre} />
        <Route path="/Contacto" component={Contato} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes