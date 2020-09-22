import React, { Component } from "react";
import MyChart from './grafico';
import  Palavras  from '../../common/utils/strings.js'

class TextoeGrafico extends Component {

  constructor() {

    super();

    this.handleChange = this.handleChange.bind(this);
    this.atualizaGrafico = this.atualizaGrafico.bind(this);

    this.state =  {
      label: 'Series 1',
      data: [
        { x: 20, y: 100 },
        { x: 30, y: 200 },
        { x: 40, y: 300 },
      ],
      textAreaValue: "",
    };
    
  }

  ValidaEntrada (ent){
    if ( ent.length>1)
    {
      console.log(ent);
      return true; 
    }
    else 
      return false; 
  }

 
  atualizaGrafico(dadosValidos){
     
     this.setState({
      label: 'Series 1',
      data: dadosValidos,
    })
    
    console.log(dadosValidos);
  }

  /// recebe o texto de entrada 
  // valida e retorna para o 
  /// o gráfico 
  formataEValidaTexto(texto){
    if (texto.length>0)
    {
      /// formata entrada
      let pal = new Palavras(texto);
      let formatada= pal.stringToFormatedData();       
      if (this.ValidaEntrada(formatada))
      {
        //console.log(pal.imprimeVetorPalavra(formatada)); 
        this.atualizaGrafico(formatada);
        return (true);
      }
    }
    return false; 
  }

  
  /// se a mudanca produzir um data valido , atualizar o data e acabou :D
  handleChange(event) {
    /// aplicar mudancas no textarea
    this.setState({
      textAreaValue: event.target.value,
    })
    this.formataEValidaTexto(this.state.textAreaValue);
  }

  
  //let grafico = "Dados inválidos entre com os dados na forma correta";
  /// atualiza o grafico se os dados são validos 
  // senao atualizasomente o textarea 
  render() {
    return (
        <>
            <label>Um par de dados por linha: </label>
            <textarea
                  id="areatextoid"
                  name="areatexto"
                  value={this.state.textAreaValue}
                  onChange={this.handleChange}
            />
          <div>
               <MyChart data={this.state.data}  />      
          </div>
         </>
    );
  }
}



export default TextoeGrafico;



/*

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