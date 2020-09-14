import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="App-body">
    <div className="container">
                <nav className="Menu">
                    <Link to="/">Home</Link>
                    <Link to="/Sobre">Sobre</Link>
                    <Link to="/Contato">Conteúdo</Link>
                </nav>
    </div>

  </header>
  )
}

/* 

*/


export default Header
