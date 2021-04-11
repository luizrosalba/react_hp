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
      <section>
        <h1>Seja Bem-Vindo(a)!</h1> 
        <p>
          Meu nome é Luiz Fernando, mas todo mundo me chama de Rosalba!
        </p>
        <p>
          Licenciado em física <span role="img" aria-labelledby="universo">🌏🌌</span>
        </p>
        <p>
          Mestre e Doutor na área de Modelagem Computacional. <span role="img" aria-labelledby="prog">&#128187;</span>   
        </p>
        <p>
          Estudante de Ciências da Computação e Desenvolvimento Web <span role="img" aria-labelledby="prog">👨‍💻</span>
        </p>
        <p>
          Apaixonado por programação <span role="img" aria-labelledby="prog">💻</span> ciência<span role="img" aria-labelledby="prog">🧪</span>  e tecnologia.<span role="img" aria-labelledby="prog">📡</span> 
        </p>
      </section>
    </S.CardWrapperSobre>
    <S.CardWrapperSobre>
      Atuação Profissional:
      Sou docente de física há mais de 7 anos nas Universidades Estácio de Sá e Candido Mendes.
      Já desenvolvi diversos projetos na área de ensino. 
      Conheça meu curriculo Lattes. <span role="img" aria-labelledby="piscada">👨‍🏫</span>
    </S.CardWrapperSobre>
    <S.CardWrapperSobre>
      Meus Interesses:
      Estou especialmente interessando em:
      Desenvolvimento Web Front e Back End
      Javascript com ES6, HTML5, CSS.
      React, React Native, DB's relacionais e não relacionais. 
      TDD, BDD e Padrões de desenvolvimento.
      <p> <span>  Trabalho há mais de 10 anos com programação  </span></p>                           
      Venha conhecer meu LinkedIn  <span role="img" aria-labelledby="piscada">&#128188;</span>
    </S.CardWrapperSobre>
</S.WrapperColunasSobre>
  
  )
}
const ColunasBotoes = () => {
  return (
    <div className="colunas-sobre">
    <div className="div-botao">
      <a className="Botao-Contato color-blue" href="mailto:luizrosalba@gmail.com" target="_blank" rel="noopener noreferrer"> E-mail </a>
    </div>
    <div className="div-botao">
      <a className="Botao-Contato color-blue" href="http://lattes.cnpq.br/6417401108821012"             target= "_blank" rel="noopener noreferrer">  Currículo  Lattes </a>
    </div>
    <div className="div-botao">
      <a className="Botao-Contato color-blue" href="https://www.linkedin.com/in/luiz-fernando-rosalba-92469817/" target="_blank" rel="noopener noreferrer">  LinkedIn </a>
    </div>
 </div>

  )
}

const Home = () => {
  return (
      <div className="App-body">
        <div className="container-corpo">
          <div className="texto-sobre">
              <Barra />
              <ColunasBrancas />
              <ColunasBotoes />
          </div>
        </div>
      </div>

  )
}

export default Home
