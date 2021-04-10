import React from 'react'
import minha from '../../img/minha.jpg';


const Barra= () =>{
  return (
    <div className="texto_secao"> Sobre Mim
    </div>
  )
}

const ColunasSaudacao = () => {
  return (
    <div className="colunas-sobre">
    <div style={{textAlign: "center"}}>
      Seja Bem-Vindo(a)! 
    </div>
    <div style={{textAlign: "center"}}>
       Atuação Profissional:
    </div>
    <div style={{textAlign: "center"}}>
       Meus Interesses: 
    </div>
  </div>
  )
}

const ColunasBrancas = () => {
  return (
    <div className="colunas-sobre">
    <div className="cell">
      <div>
        Meu nome é Luiz Fernando, mas todo mundo me chama de Rosalba!
      </div>
      <ul>
        <li>Licenciado em física <span role="img" aria-labelledby="universo">🌏🌌</span>
        </li>
        <li>
          Mestre e Doutor na área de Modelagem Computacional. <span role="img" aria-labelledby="prog">&#128187;</span>   
        </li>
        <li>
          Estudante de Ciências da Computação e Desenvolvimento Web <span role="img" aria-labelledby="prog">👨‍💻</span>
        </li>
        <li>
          Apaixonado por programação <span role="img" aria-labelledby="prog">💻</span> ciência<span role="img" aria-labelledby="prog">🧪</span>  e tecnologia.<span role="img" aria-labelledby="prog">📡</span> 
        </li>
      </ul>
     
    </div>
    <div className="cell">
      <div>
      Sou docente de física há mais de 7 anos nas Universidades Estácio de Sá e Candido Mendes.
      </div>
      <div>
        <br></br>
        <br></br>
      Já desenvolvi diversos projetos na área de ensino. 
      <br></br>
      <br></br>
      Conheça meu curriculo Lattes. <span role="img" aria-labelledby="piscada">👨‍🏫</span>
      </div>
    </div>
    <div className="cell">
     <div>Estou especialmente interessando em:  </div>
      <ul>
        <li>
          Desenvolvimento Web Front e Back End
        </li>
        <li>
          Javascript com ES6, HTML5, CSS.
        </li>
        <li>
          React, React Native, DB's relacionais e não relacionais. 
        </li>
        <li>
          TDD, BDD e Padrões de desenvolvimento.
        </li>
      </ul>
      <p> <span>  Trabalho há mais de 10 anos com programação  </span></p>                           
        Venha conhecer meu LinkedIn  <span role="img" aria-labelledby="piscada">&#128188;</span>
   
 </div>
</div>
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
              <ColunasSaudacao />
              <ColunasBrancas />
              <ColunasBotoes />
          </div>
        </div>
      </div>

  )
}

/*


                  


   
        
        <div>
        
        </div>

        
<a href="mailto:luizrosalba@gmail.com"                       target= "_blank" rel="noopener noreferrer">  E-mail </a>  
<a href="https://www.linkedin.com/in/luiz-rosalba-92469817/" target= "_blank" rel="noopener noreferrer">  LinkedIn </a>
<a href="http://lattes.cnpq.br/6417401108821012"             target= "_blank" rel="noopener noreferrer">  Currículo  Lattes </a>
const Container = styled.div`
  display: flex;
  flex-direction: column;

`
*/

export default Home
