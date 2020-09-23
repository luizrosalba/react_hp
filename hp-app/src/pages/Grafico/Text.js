import React, { Component } from "react";
import  Grafico  from './grafico'
import  Palavras  from '../../common/utils/strings.js'


class Texto extends Component {
  constructor() {
    super();
    this.state =  {
      textAreaValue: "",
      data : [
        ["Variável x", "Variável y"],
        ["1", 1],
        ["2", 2],
        ["3", 3],
        ["4", 4]
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  ValidaEntrada (ent){
    if ( ent.length>1)
    {
      //console.log(ent);
      return true; 
    }
    else 
      return false; 
  }

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


    handleChange(event) {
    
    let saida = (this.formataValidaTexto(this.state.textAreaValue))
    if (saida.valida===true)  /// se valido atualiza os dados 
    {
      this.setState({
        data: saida.dados,
       })
       //console.log(saida.dados);
    } /// sempre atualiza o texto 
          this.setState({
        textAreaValue: event.target.value,
      })
    }

  //let grafico = "Dados inválidos entre com os dados na forma correta";
  /// atualiza o grafico se os dados são validos 
  // senao atualizasomente o textarea 
  render() {
    const formStyle = {
      textArea: {
        border: 20,
        boxShadow: 'none',
        margin: 10,
        overflow: 'scroll',
        resize: 'true',
        ariaHidden: 'true',
        rows:"6",
      }
    }
    return (
        <>
            <label>Um par de dados por linha: </label>
            <textarea
                  id="areatextoid"
                  name="areatexto"
                  placeholder='Insira aqui seus dados '
                  style={formStyle.textArea}
                  value={this.state.textAreaValue}
                  onChange={this.handleChange}
            />
             
            
            

          

            <div className="title_page"> Gráfico dos seus dados: 
              <div className="exibegrafico">
                Seu grafico
                
                <Grafico data={this.state.data}>
                </Grafico>
              
              </div>
             </div>



         </>
    );
  }
}
export default Texto;



/*

style="margin:0px; width:439px; height:41px;"

   <Grafico data={this.state.data}>
                </Grafico>

  // componentDidUpdate(){
  //  console.log("did Updata");
  // }


    /// aplicar mudancas no textarea
    let saida = (this.formataValidaTexto(this.state.textAreaValue))
    if (saida.valida===true) 
    {
      //console.log(saida.dados);
    }



 //      for(i=0;i<palavra.length; i=i+2)
      //      {
      //        let prim = (palavra[i]);
      //        let secon= (palavra[i+1]);
      //        let strucDados = { primary:prim, secondary:secon, }
      //        dadosTemp.push(strucDados);
      //      }


  /// prenche os dados com os dados formatados
    preencheDados = () => {
      let dadosTemp= [];
      let i=0;
      for(i=0;i<10; i++)
      {
        let prim = ();
        let secon= ();
        let strucDados = { primary:prim, secondary:secon, }
        dadosTemp.push(strucDados);
      }
      console.log(dadosTemp);
      
      this.setState({
        label: 'Series 1',
        data: dadosTemp,
      });

    }




 <button onClick={this.preencheDados}> clique </button>

      //for(let i=0;i<dadosFormatados; i=i+2)
      for(let i=0;i<10; i=i+2)
      {
        let prim = parseFloat(i);
        let secon= parseFloat(i+1);
        let strucDados  =
        {
          primary:prim,//prim,
          secondary:secon,//secon,
        }
        dadosTemp.push(strucDados);
      }
      console.log(dadosTemp);



<MyChart data={this.state.data} changeText={this.changeDados}>

var dados = [{ primary: 200, secondary: 10 },{ primary: 300, secondary: 20 },      { primary: 400, secondary: 30 },]  ;

  function preencheDados(dadosFormatados){
    dados = [];
    for(let i=0;i<dadosFormatados; i=i+2)
    {
      let prim = parseFloat(dadosFormatados[i]);
      let secon= parseFloat(dadosFormatados[i+1]);
      let strucDados  =
      {
        primary:prim,
        secondary:secon,
      }
      dados.push(strucDados);
    }



  }

 



*/