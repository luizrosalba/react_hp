import React, { useState } from "react";
import { Link } from 'react-router-dom'

import * as S from "./styled";

const Header = () => {

  const [selected, setSelected] = useState(0);

  function RenderButtonSelected (text, index) {
    return (
      selected===index?
        <S.Button selected>
          {text}
        </S.Button>
      :
        <S.Button
          onClick={() => setSelected(index) }>      
          {text}
        </S.Button>
    ) 
  }

  function RenderHeaderLarge (){
    return (
      <S.wrapperHeader>  
      <Link
        to="/"
      >
      {RenderButtonSelected("Sobre",0)}
      </Link>
      <Link
        to="/fisica"
      >
      {RenderButtonSelected("Física",1)}
      </Link>
      <Link
        to="/programacao"
      >
        {RenderButtonSelected("Programação", 2)} 
      </Link>
        
      <Link
        to="/portfolio"
      >
      {RenderButtonSelected("Portfólio", 3)}  
      </Link>
      </S.wrapperHeader>
    );
  }
  return (
    <RenderHeaderLarge>

    </RenderHeaderLarge>
  )
}
export default Header; 