import React from 'react'
import minha from '../../img/Capturar.PNG';


const Home = () => {
  return (
    
    <header className="App-body">
      <div className="container-corpo">
        <img  src={minha} className="foto" alt='luiz rosalba' /> 
        <div className="texto_secao">
        <h2>Luiz Fernando Rosalba </h2>
          Licenciado em física, com mestrado e doutorado na área de Modelagem Computacional,
          atuou na áreas de Visão Computacional (Pattern Recognition) e Radiação Ionizante (EDXRF). 
          Atualmente é Docente nas Universidades Estácio de Sá, Candido Mendes cursa Ciências da Computação. 
          <div className="Contato">
            <a href="mailto:luizrosalba@gmail.com"                       target= "_blank" rel="noopener noreferrer"> E-mail </a>  
            <a href="https://www.linkedin.com/in/luiz-rosalba-92469817/" target= "_blank" rel="noopener noreferrer">  LinkedIn </a>
            <a href="http://lattes.cnpq.br/6417401108821012"              target= "_blank" rel="noopener noreferrer">  Currículo  Lattes </a>
          </div>
        </div>

        
      </div>
    </header>
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
