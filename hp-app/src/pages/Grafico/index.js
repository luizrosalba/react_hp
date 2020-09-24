import React from 'react'
import git from '../../img/github.jpeg';
import  Texto  from './Text'



/// dados está sendo passado via props para o grafico. 
/// o clique do botao faz a mudanca do estado inicial para o props
/// agora é fazer que textarea demo altere o dados e pronto :D 

/// cara... o gráfico tem que ser filho do textarea

const TextoEGrafico = () => {
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
            <div className="entradaDados">
                <Texto >
                </Texto>

            </div>
       </div>


    </header>
  )
}

export default TextoEGrafico




/*
  

I would suggest you use a state manager like Redux (personal favorite), MobX reflux, etc to manage your state.

How these works is they allow you to contain all shared state in one state storage (called a store), and whatever component needs access to a part of that shared state, it will just get it from the store.

It looked very hard to get started with but once you get over the small challenges, get 2 or 3 "wtf's" out of the way. It gets easier.

Take a look here: http://redux.js.org/

EDIT: Redux is good but the boilerplate code is really a turn off... for those of you looking for a simpler, more magical (this can be good and bad) solution use mobx : https://mobx.js.org/


<MyChart handleChange={this.handleClick.bind(this)} value={this.state.textAreaValue}/>    
                  

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


  <MyChart/>    


  
<Resizable>
      
    </Resizable>
  
    const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: props.data,
      }
    ],
    [props.data]
  )
  ValidaEntrada (ent){
    if ( ent.length>1)
    {
      //console.log(ent);
      return true; 
    }
    else 
      return false; 
  }
  /// recebe o texto de entrada 
  // valida e retorna para o 
  /// o gráfico 
  formataValidaTexto(texto){
    if (texto.length>0)
    {
      /// formata entrada
      let pal = new Palavras(texto);
      let formatada= pal.stringToFormatedData();       
      if (this.ValidaEntrada(formatada))
      {
        //console.log(pal.imprimeVetorPalavra(formatada)); 
        //console.log(formatada);
        return {valida:(true), dados:formatada};
      }
    }
    return {valida:(false)};
  }
  
  // componentDidMount(){
  //  console.log("did mount") ; 
  // }
  
  // componentWillUnmount(){
  //   console.log("will unmount") ; 
  //  }



*/

