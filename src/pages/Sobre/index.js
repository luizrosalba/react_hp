import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import * as S from "./styled";

const Barra= () =>{
  return (
    <S.textoSecao> 
      Sobre
    </S.textoSecao>
  )
}

const ColunasBrancas = () => {
  return (
  <>
  <S.WrapperColunasSobre>
    <S.ButtonSobre as="a"  
      href="mailto:luizrosalba@gmail.com" 
      target= "_blank" 
      rel="noopener noreferrer"
    >  
      E-mail 
    </S.ButtonSobre>
    <S.ButtonSobre as="a"
        href="http://lattes.cnpq.br/6417401108821012" 
        target= "_blank" 
        rel="noopener noreferrer"
    >  
      Currículo  Lattes 
    </S.ButtonSobre>
    <S.ButtonSobre as="a"
      href="https://www.linkedin.com/in/luiz-fernando-rosalba-92469817/" 
      target= "_blank" 
      rel="noopener noreferrer"
    >  
    LinkedIn 
    </S.ButtonSobre>
  <S.CardWrapperSobre>
        <center><h1>Seja Bem-Vindo(a)!</h1> </center>
        <div style={{marginTop:"20px"}}></div>
        <p>
          Meu nome é Luiz Rosalba!
        </p>
        <p>
          Licenciado em física.
        </p>
        <p>
          Mestre e Doutor na área de Modelagem Computacional.   
        </p>
        <p>
          Estudante de Ciências da Computação e Desenvolvimento Web.
        </p>
        <p>
          Apaixonado por programação, ciência e tecnologia. 
        </p>
        
    </S.CardWrapperSobre>
    <S.CardWrapperSobre>
    <center><h1>Atuação Profissional:</h1> </center>
      <div style={{marginTop:"20px"}}></div>
      <p>
        Desenvolvedor de Software na <a href="https://deepseedsolutions.com/">Deep Seed Solutions</a>
      </p>
      <p>
        Professor de física.
      </p>
      <p>
        Conheça meus projetos educacionais em meu Curriculo Lattes! 
      </p>
    </S.CardWrapperSobre>
    <S.CardWrapperSobre>
    <center> <h1>Meus Interesses:</h1> </center>
      <div style={{marginTop:"20px"}}></div>
      <p>
        Especialmente interessando em:
      </p>
      <p>
        Desenvolvimento Web 
      </p>
      <p>
        Javascript com ES6, HTML5, CSS.
      </p>
      <p>
        React, React Native, DB's relacionais e não relacionais. 
      </p>
      <p>
        TDD, BDD e Padrões de desenvolvimento.
      </p>
      <p> 
        Conheça meus trabalho em meu LinkedIn
      </p>                           
    </S.CardWrapperSobre>
  </S.WrapperColunasSobre>
</>
  )
}

const Home = () => {
  return (
      <div className="App-body">
        <div className="container-corpo">
          <div className="texto-sobre">
              <Barra />
              <ColunasBrancas />
          </div>
        </div>
      </div>

  )
}

export default Home
