import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header >
    <div className="container_menu">
                <nav className="Menu">
                    <Link to="/">Sobre</Link>
                    <Link to="/Fisica">Física</Link>
                    <Link to="/Programacao">Programacao</Link>
                </nav>
    </div>

  </header>
  )
}

/* 
import React, { useState, useEffect } from 'react'
*/


export default Header
