import React, { Component } from "react";
// import { Link } from 'react-router-dom'

import { Link, animateScroll as scroll } from "react-scroll";


export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <header>
        <div className="container_menu">
          <nav className="Menu">

          <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Sobre 
            </Link>

          <Link
              activeClass="active"
              to="fisica"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Física 
            </Link>

            <Link
              activeClass="active"
              to="programacao"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Programação
            </Link>
            
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Portfolio
            </Link>

            {/* <Link to="/Programacao">Programação</Link> */}
            {/* <Link to="/">Sobre</Link> */}
            {/* <Link to="/Fisica">Física</Link> */}
            {/* <Link to="/Portfolio">Portfolio</Link> */}
            {/* <Link to="/Grafico">Gráficos</Link> */}

          </nav>
        </div>
      </header>
    );
  }
}