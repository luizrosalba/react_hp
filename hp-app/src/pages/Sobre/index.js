import React from 'react'
import minha from '../../img/Capturar.PNG';


const Home = () => {
  return (
    
    <header className="App-body">
      <div className="container-corpo">
        <img  src={minha} className="foto" alt='luiz rosalba' /> 
        <div className="texto_secao">
        <h2>Luiz Fernando Rosalba </h2>
          
          Olá ! Meu nome é Luiz Fernando, mas todo mundo me chama de Rosalba ! :D 
          Sou licenciado em física, tenho mestrado e doutorado na área de Modelagem Computacional.
          Durante estas formações, atuei nas áreas de Visão Computacional (Pattern Recognition) e Radiação Ionizante (EDXRF). 
          Sou docente de física há mais de 7 anos nas Universidades Estácio de Sá e Candido Mendes e já desenvolvi alguns projetos interessantes na área de ensino (lá no
          meu curriculo Lattes tem tudo que já fiz :D ! ). Atualmente estou cursando Ciências da Computação e estou devorando livros, tutoriais e cursos  
          sobre desenvolvimento web (front e back end). Estou especialmente interessando em Javascript com ES6, HTML5, CSS, React, DB's relacionais e não relacionais. 
          Amo programação e tenho mais de 15 anos de experiência e durante este tempo programei com: C, C++, programação em paralelo utilizando CUDA C#, Android, Arduino, CMS's comerciais e educativos
          (Prestashop, moodle, drupal ... ) dentre muitos outros trabalhos! Sinta-se a vontade para me contatar nas minhas redes sociais e e-mail:    

          <div className="Contato">
            <br></br>
            
            <a href="mailto:luizrosalba@gmail.com"                       target= "_blank" rel="noopener noreferrer"> E-mail </a>  
            <br></br>
            
            <a href="https://www.linkedin.com/in/luiz-rosalba-92469817/" target= "_blank" rel="noopener noreferrer">  LinkedIn </a>
            <br></br>
            
            <a href="http://lattes.cnpq.br/6417401108821012"              target= "_blank" rel="noopener noreferrer">  Currículo  Lattes </a>
            <br></br>
            <br></br>
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
