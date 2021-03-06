import React from 'react'
import git from '../../img/github.PNG';
import { BrowserRouter,  Redirect,Link ,Route, NavLink } from 'react-router-dom'
import TextoEGrafico from '../Grafico'
import { Button } from 'react-scroll';

{/* <div className="container-foto">
<a href = "https://github.com/luizrosalba?tab=repositories" target= "_blank" rel="noopener noreferrer" >
<img  src={git}  heigth= "50px" width = "50px" alt='logo' className = "photo-git" /> 
</a>
</div> */}

const Programacao  = () => {
  function nada(){
    

  }
  return (
    <div className="App-body">
      <div className="container-corpo">

      <div className="texto_secao">
        Repositórios      
      </div>
        <div className="links ">
         <a href = "https://github.com/luizrosalba?tab=repositories" target= "_blank" rel="noopener noreferrer" >   Conheça meu Github.   </a>
          <br></br>
          <div className="colunas-fisica">
            
            <div>
            <div className="title_page">  Projetos Interessantes <hr></hr></div>
               <p className="links"> 
              
              <a href = "../Grafico"       target="_blank"         rel="noopener noreferrer" > Google Charts and React - Ferramenta gráfica para meus alunos     </a>     
              <a href = "https://github.com/luizrosalba/DadosApiCrptomoedas"                                target= "_blank" rel="noopener noreferrer" > Requisitando dados de uma API de criptomoedas    </a>  
              <a href = "https://github.com/luizrosalba/ChatbotFitTelegramJavaScript-NodeJS"                target= "_blank" rel="noopener noreferrer" > ChatbotFit no Telegram com JavaScript e Node.js    </a>  
              <a href = "https://github.com/luizrosalba/FilasNoNodejs"                                      target= "_blank" rel="noopener noreferrer" > Tratamento de Filas no Node.js   </a>  
              <a href = "https://github.com/luizrosalba/RecriandopaginaInstagram"                           target= "_blank" rel="noopener noreferrer" > Recriando a página do Instagram usando CSS   </a> 
              <a href = "https://github.com/luizrosalba/netflix-clone-master"                               target= "_blank" rel="noopener noreferrer" > Recriando a página do Netflix.   </a> 
              <a href = "https://github.com/luizrosalba/Bootstrap"                                          target= "_blank" rel="noopener noreferrer" > Construindo páginas para internet com Bootstrap   </a> 
              <a href = "https://github.com/luizrosalba/Arduino"                                            target= "_blank" rel="noopener noreferrer" > Alguns projetos interessantes para Arduino   </a> 
              <a href = "https://github.com/luizrosalba/Tarefasem-background-utilizando-Nodejs-e-Redis"     target= "_blank" rel="noopener noreferrer" > Tarefas em Background usando Node.js   </a> 
              <a href = "https://github.com/luizrosalba/Matematica_Basica_Android_Visual_Studio"            target= "_blank" rel="noopener noreferrer" > Matemática Básica Com Oxyplot e Android Studio   </a> 
              <a href = "https://github.com/luizrosalba/MetodosNumericosCpp"                                target= "_blank" rel="noopener noreferrer" > Uma biblioteca em C++ para Métodos Numéricos   </a>                  
              </p>
            </div>
            <div>
            <div className="title_page"> Meus Estudos <hr></hr></div>
                  <p className="links">  
                          <a href = "https://github.com/luizrosalba/aprendendo_git"                                               target= "_blank"  rel="noopener noreferrer" > Aprendendo Git   </a>  
                          <a href = "https://github.com/luizrosalba/js_free_code_camp"                                            target= "_blank"  rel="noopener noreferrer" > Estudos em Javascript   </a>  
                          <a href = "https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas"                           target= "_blank"  rel="noopener noreferrer" > Fundamentos de Arquitetura de Sistemas   </a>  
                          <a href = "https://github.com/luizrosalba/Introducao_ao_ES6"                                            target= "_blank"  rel="noopener noreferrer" > Introdução ao ES6   </a>  
                          <a href = "https://github.com/luizrosalba/javascript_es6"                                               target= "_blank"  rel="noopener noreferrer" > Javascript com ES6    </a>  
                          <a href = "https://github.com/luizrosalba/DesenvolvimentoAvancadoComJSES6"                              target= "_blank"  rel="noopener noreferrer" > Desenvolvimento avançado em Js com ES6   </a>  
                          <a href = "https://github.com/luizrosalba/ArquiteturainternanoNodeefilas.md"                            target= "_blank"  rel="noopener noreferrer" > Arquitetura interna do Node.js  </a>  
                          <a href = "https://github.com/luizrosalba/node-hapijs"                                                  target= "_blank"  rel="noopener noreferrer" > Node com hapijs   </a>  
                          <a href = "https://github.com/luizrosalba/node-websockets"                                              target= "_blank"  rel="noopener noreferrer" > Node com websockets  </a>  
                          <a href = "https://github.com/luizrosalba/node-mongoose"                                                target= "_blank"  rel="noopener noreferrer" > Node com Mongoose  </a>  
                          <a href = "https://github.com/luizrosalba/node-tdd"                                                     target= "_blank"  rel="noopener noreferrer" > Node TDD - Test Driven Development  </a>  
                          <a href = "https://github.com/luizrosalba/Introdu-o-ao-domain-driven-design-e-padr-es-de-arquitetura"   target= "_blank"  rel="noopener noreferrer" > Introdução ao domain driven design (DDD) e padrões de Arquitetura - Programação Ágil  </a>  
                          <a href = "https://github.com/luizrosalba/SCRUM"                                                        target= "_blank"  rel="noopener noreferrer" > O Processo SCRUM  </a>  
                          <a href = "https://github.com/luizrosalba/Arquitetura-de-Sistemas-Avan-ado"                             target= "_blank"  rel="noopener noreferrer" > Arquitetura de Sistemas Avançados </a>   
                          <a href = "https://github.com/luizrosalba/asyncawait"                                                   target= "_blank"  rel="noopener noreferrer" > Como funcionam os métodos Async e Await  </a>                        
                          <a href = "https://github.com/luizrosalba/EntendendoPromisesdeumavezportodas "                          target= "_blank"  rel="noopener noreferrer" > Ententendo Promisses </a>                    
                          <a href = "https://github.com/luizrosalba/aplicacoes_internet_reactjs"                                  target= "_blank"  rel="noopener noreferrer" > React Intermediário   </a>                          
                          <a href = "https://github.com/luizrosalba/advanced-reactjs-dio"                                         target= "_blank"  rel="noopener noreferrer" > React Avançado   </a>        
                 </p>

            </div>
            <div>
            <div className="title_page"> Jogos Desenvolvidos em cursos <hr></hr></div>
                <a href = "https://cobrinha97818.netlify.app/"           target= "_blank"  rel="noopener noreferrer" > Jogo Da cobrinha em JS   </a>  
                <a href = "https://github.com/luizrosalba/jogo_velha_react" target= "_blank"  rel="noopener noreferrer" > Jogo Da velha usando React   </a>  
                <a href = "https://github.com/luizrosalba/jogo-da-memoria-dio-master" target= "_blank"  rel="noopener noreferrer" > Jogo Da memória usando React   </a>  
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}


{/* <div className="title_page">  Simulações em Física</div>
<div className="links">
  <a href = "https://www.vascak.cz/physicsanimations.php?l=pt" target= "_blank" rel="noopener noreferrer">  Vascak Html5    </a>  
  <a href = "http://physics.bu.edu/~duffy/HTML5/"              target= "_blank" rel="noopener noreferrer">  Duffy HTML5    </a>   
</div>                 */}


/*
const Container = styled.div`
  display: flex;
  flex-direction: column;

`

<img align="left" src="img/Capturar.PNG" alt= "Foto de Luiz Fernando Rosalba" class = "photo" height="10%" width="10%" > </img>


*/

export default Programacao 
