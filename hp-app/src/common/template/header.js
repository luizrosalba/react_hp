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
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 1
                    </Link>

            <Link to="/">Sobre</Link>
            
            <Link to="/Fisica">Física</Link>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
                    </Link>
            <Link to="/Programacao">Programação</Link>
            <Link to="/Portfolio">Portfolio</Link>
            {/* <Link to="/Grafico">Gráficos</Link> */}
          </nav>
        </div>
      </header>
    );
  }
}