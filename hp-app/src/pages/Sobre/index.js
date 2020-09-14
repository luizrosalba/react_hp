import React from 'react'


const Home = () => {
  return (
    <header className="App-body">
    <div className="container">
      <div className="title_page"> Luiz Fernando Rosalba</div>
      Licenciado em física, com mestrado e doutorado na área de Modelagem Computacional,
      atuei nas áreas de Visão computacional (Pattern Recognition) e Radiação Ionizante (EDXRF). 
      Atualmente sou Docente nas Universidades Estácio de Sá, Candido Mendes e estou cursando Ciências da Computação. 
      <div className= "listagem">
           <a href="mailto:luizrosalba@gmail.com"                       target= "_blank" rel="noopener noreferrer">  E-mail </a>  
           <a href="https://www.linkedin.com/in/luiz-rosalba-92469817/" target= "_blank" rel="noopener noreferrer">  LinkedIn </a>
           <a href="http://lattes.cnpq.br/6417401108821012"             target= "_blank" rel="noopener noreferrer">  Currículo  Lattes </a>
      </div>
    </div>

    </header>
  )
}

/*
const Container = styled.div`
  display: flex;
  flex-direction: column;

`
*/

export default Home
