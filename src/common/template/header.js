import React, { Component } from "react";
import { Link } from 'react-router-dom'

import * as S from "./styled";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  RenderButtonSelected(text, index){
  return (
    this.state.selected===index?
      <S.Button selected>
        {text}
      </S.Button>
    :
      <S.Button
        onClick={ ()=>
          this.setState({ 
            selected: index
      })}>      
        {text}
      </S.Button>
  ) 
}

  render() {
    return (
        <S.wrapper_header>  
          <Link
            to="/"
          >
          {this.RenderButtonSelected("Sobre",0)}
          </Link>
          <Link
            to="/fisica"
          >
          {this.RenderButtonSelected("Física",1)}
          </Link>
          <Link
            to="/programacao"
          >
            {this.RenderButtonSelected("Programação", 2)} 
          </Link>
            
          <Link
            to="/portfolio"
          >
          {this.RenderButtonSelected("Portfólio", 3)}  
          </Link>
        </S.wrapper_header>
    );
  }
}