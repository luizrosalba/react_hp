import React from 'react'
import git from '../../img/github.jpeg';
import  TextoeGrafico  from './Textarea'



/// dados está sendo passado via props para o grafico. 
/// o clique do botao faz a mudanca do estado inicial para o props
/// agora é fazer que textarea demo altere o dados e pronto :D 

/// cara... o gráfico tem que ser filho do textarea

const Grafico = () => {
  
  return (
    <header className="App-body">
      <div className="container-corpo">
        <div className="container-foto">
            <a href = "https://github.com/luizrosalba?tab=repositories" target= "_blank" rel="noopener noreferrer" >
            <img  src={git}  heigth= "140px" width = "140px" alt='logo' className = "photo" /> 
            </a>
        </div>
       <div className="texto_secao">
           <h2>Ferramenta Estatística e Gráficos </h2>
            <a href = "https://github.com/luizrosalba?tab=repositories" target= "_blank" rel="noopener noreferrer" > 
            Uma Ferramenta online para Estatística e Gráficos </a>                
        </div>
       <div className="title_page"> Digite seus dados   </div>
            <div className="links">
              
                <TextoeGrafico >
                </TextoeGrafico>
              
            </div>
       <div className="title_page"> Gráfico dos seus dados: </div>
            <p className="links">
               
            </p>
            
       </div>


    </header>
  )
}




/*

  <button onClick={alteraTexto}>
                valor 
              </button>


<MyChart data={dados} >
              </MyChart>            


<a href = "https://github.com/luizrosalba/MetodosNumericosCpp"                                target= "_blank" rel="noopener noreferrer" > Uma biblioteca em C++ para Métodos Numéricos   </a> 
const Container = styled.div`
  display: flex;
  flex-direction: column;

`
*/

export default Grafico
