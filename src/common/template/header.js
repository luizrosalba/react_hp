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
      <S.wrapperHeaderBig>  
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
        to="/certificados"
      >
      {RenderButtonSelected("Certificados", 3)}  
      </Link>
      </S.wrapperHeaderBig>
    );
  }
  function RenderHeaderSmall (){
    return (
      <S.wrapperHeaderSmall>  
        <Link
          to="/"
        >
        <i className="bi bi-file-person"></i>
        </Link>
        <Link
          to="/fisica"
        >
        <i className="bi bi-book"></i>
        </Link>
        <Link
          to="/programacao"
        >
          <i className="bi bi-code-slash"></i>
        </Link>
          
        <Link
          to="/portfolio"
        >
         <i className="bi bi-briefcase"></i>
        </Link>
      </S.wrapperHeaderSmall>
    );
  }
  return (
    <>
    <RenderHeaderLarge>
    </RenderHeaderLarge>
    <RenderHeaderSmall>
    </RenderHeaderSmall >
    </>
  )
}
export default Header; 