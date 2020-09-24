import React, { Component } from "react";
import  Grafico  from './grafico'
import  Palavras  from '../../common/utils/strings.js'
import {
  mean,std
} from 'mathjs'


import "./styles.css"

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
      estatistica:{
        medx:"0",
        medy:"0"}

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

  funcEstatistica(entrada){
    let saida = { };
    let x = [];
    let y = [];
    //console.log(entrada[1][0]);

    
    saida.medx = "10";
    saida.medy = "20";
    return saida ; 
  }

  handleChange(event) {
    
    let saida = (this.formataValidaTexto(this.state.textAreaValue))
    if (saida.valida===true)  /// se valido atualiza os dados 
    {
      this.setState({
        data: saida.dados,
        estatistica: this.funcEstatistica(saida.dados),  
       })
           
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
        boxSizing:"border-box",
        border: "2px solid red",
        margin: "10px 0",
        overflow: 'hidden',
        resize: 'true',
        rows:"6",
        width:"60vw",
        height:"10vw",
        textAlign:"center",
      }
    }
    return (
        <>
            <div className="PedidoDados">
                  <label>Um par de dados por linha: </label>
            </div>
            <div>
            </div>
            <div className="Insiratexto">
            <textarea
                  id="areatextoid"
                  name="areatexto"
                  placeholder='Insira aqui seus dados '
                  style={formStyle.textArea}
                  value={this.state.textAreaValue}
                  onChange={this.handleChange}
            />
             </div>
            <div className="title_page"> Gráfico dos seus dados: 
                  <div className="exibegrafico">
                      <div>
                      Seu gráfico
                      </div>
                  </div>
            </div>
              <div >
                 <Grafico data={this.state.data}>
                        </Grafico>
              </div>
              <div className="title_page"> Gráfico dos seus dados:  Estatística 
              </div>
              <div> 
              <div className="PedidoDados">
                  <label> 
                      Médiax : {this.state.estatistica.medx}
                      <br></br>
                      Médiay : {this.state.estatistica.medy}
                      <br></br>
                 </label>
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