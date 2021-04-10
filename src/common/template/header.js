import React, { Component } from "react";
import { Link } from 'react-router-dom'

import * as S from "./styled";

export default class Header extends Component {
  render() {
    return (
        <S.container_header>
          <S.header>    
          <Link
              style={{cursor: "pointer"}}
              to="/"
            >
              <S.Button>Sobre</S.Button> 
            </Link>

          <Link
              style={{cursor: "pointer"}}
              to="/fisica"
            >
              Física 
            </Link>

            <Link
              style={{cursor: "pointer"}}
              to="/programacao"
            >
              Programação
            </Link>
            
            <Link
              style={{cursor: "pointer"}}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </S.header>
        </S.container_header>
    );
  }
}