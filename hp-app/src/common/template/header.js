import React, { Component } from "react";
// import { Link } from 'react-router-dom'

import { Link, animateScroll as scroll } from "react-scroll";
import './header.css';

export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <header>
        <div className="container_header">
          <nav className="header">

          <Link
              activeClass="active"
              style={{cursor: "pointer"}}
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
              style={{cursor: "pointer"}}
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
              style={{cursor: "pointer"}}
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
              style={{cursor: "pointer"}}
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Portfolio
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}