import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container_header">
          <nav className="header">
          
          <Link
              activeClass="active"
              style={{cursor: "pointer"}}
              to="/"
            >
              Sobre 
            </Link>

          <Link
              activeClass="active"
              style={{cursor: "pointer"}}
              to="/fisica"
            >
              Física 
            </Link>

            <Link
              activeClass="active"
              style={{cursor: "pointer"}}
              to="/programacao"
            >
              Programação
            </Link>
            
            <Link
              activeClass="active"
              style={{cursor: "pointer"}}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}