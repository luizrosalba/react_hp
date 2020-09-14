import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header >
    <div className="container">
                <nav className="Menu">
                    <Link to="/">Home   </Link>
                    <Link to="/Sobre">Sobre   </Link>
                    <Link to="/Programacao">Programacao</Link>
                </nav>
    </div>

  </header>
  )
}

/* 

*/


export default Header
