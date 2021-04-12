import React from 'react'

import * as S from "./styled";

const Barra= () =>{
  return (
    <S.textoSecao> 
      Sobre Mim
    </S.textoSecao>
  )
}

const ColunasBrancas = () => {
  return (
  <S.WrapperColunasSobre>
    <S.CardWrapperSobre>
        <h1>Seja Bem-Vindo(a)!</h1> 
        <p>
          Meu nome é Luiz Fernando, mas todo mundo me chama de Rosalba!
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
        <S.ButtonSobre 
        href="mailto:luizrosalba@gmail.com" 
        target= "_blank" 
        rel="noopener noreferrer"
      >  
         E-mail 
      </S.ButtonSobre>
    </S.CardWrapperSobre>
    <S.CardWrapperSobre>
      <h1>Atuação Profissional:</h1> 
      <p>
        Sou docente de física há mais de 7 anos nas Universidades Estácio de Sá e Candido Mendes.
      </p>
      <p>
        Já desenvolvi diversos projetos na área de ensino. 
      </p>
      <p>
        Conheça meu curriculo Lattes.
      </p>
      <S.ButtonSobre 
        href="http://lattes.cnpq.br/6417401108821012" 
        target= "_blank" 
        rel="noopener noreferrer"
      >  
        Currículo  Lattes 
      </S.ButtonSobre>
    </S.CardWrapperSobre>
    <S.CardWrapperSobre>
      <h1>Meus Interesses:</h1> 
      <p>
        Estou especialmente interessando em:
      </p>
      <p>
        Desenvolvimento Web Front e Back End
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
        Trabalho há mais de 10 anos com programação 
      </p>                           
        Venha conhecer meu LinkedIn: 
        <S.ButtonSobre 
        href="https://www.linkedin.com/in/luiz-fernando-rosalba-92469817/" 
        target= "_blank" 
        rel="noopener noreferrer"
      >  
        LinkedIn 
      </S.ButtonSobre>
    </S.CardWrapperSobre>
</S.WrapperColunasSobre>
  
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
