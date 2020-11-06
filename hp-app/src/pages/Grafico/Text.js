import React, { Component } from "react";
import  Grafico  from './grafico'

import formataValidaTexto from './validacao'
import funcEstatistica from './estatistica'

import "./styles.css"

class Texto extends Component {
  constructor() {
    super();
    this.titulo = "Seu titulo";
    this.legenda = "Sua legenda";
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
  
  

  handleChange(event) {
    let saida = (formataValidaTexto(this.state.textAreaValue));
    if (saida.valida===true)  /// se valido atualiza os dados 
    {
      this.setState({
        data: saida.dados,
        estatistica: funcEstatistica(saida.dados),  
       })
    } /// sempre atualiza o texto 
          this.setState({
          textAreaValue: event.target.value,
      })
  }
  
  tituloHandler = (event) => {
    this.setState({titulo: event.target.value});
  }


  //let grafico = "Dados inválidos entre com os dados na forma correta";
  /// atualiza o grafico se os dados são validos 
  // senao atualizasomente o textarea 
  render() {
    const formStyle = {
      textArea: {
        boxSizing:"border-box",
        border: "none",
        margin: "0px 0",
        overflow: 'hidden',
        resize: 'true',
        width:"30vw",
        height:"10vw",
        padding:"5px",
        textAlign:"left",
      }
    }
    const options = {
      title: this.state.titulo,
      curveType: "function",
      legend: { position: "bottom" },
      hAxis: {
        gridlines: {
          color: '#333', 
          count: 2,
          minValue: 0,
          baseline: 1
        }
      },
      height:"30vw",  /// excedendo o tamanho da menor pagina  concertei na mao 
      width:"35vw",
      colors: ['#8e0152', '#276419'],
      pointSize: 5,
    };
    return (
        <>
            <div className="Insiratexto">
              
            <textarea
                  id="areatextoid"
                  name="areatexto"
                  placeholder='Insira: x1 y1 x2 y2 ...'
                  style={formStyle.textArea}
                  value={this.state.textAreaValue}
                  onChange={this.handleChange}
            />
             </div>
            <div className="title_page"> 
              Gráfico dos seus dados: 
            </div>

            <div className="graph">
                <div> Escolha o título do seu gráfico : 
                  <input 
                  defaultValue="Titulo"
                  type="text" 
                  value={this.state.value}
                  onChange={this.tituloHandler} /> 
                </div>
            
                 <Grafico data={this.state.data} options={options}/>
              </div>

              <div className="title_page"> Estatística     </div>
              <div> 
              <div className="PedidoDados">
                  <label> 
                      Médiax : {this.state.estatistica.medx}
                      <br></br>
                      Médiay : {this.state.estatistica.medy}
                      <br></br>
                      Desvio x : {this.state.estatistica.devx}
                      <br></br>
                      Desvio y : {this.state.estatistica.devy}
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