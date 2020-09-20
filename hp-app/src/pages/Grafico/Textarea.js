import React, { Component } from "react";
import MyChart from './grafico';
import  Palavras  from '../../common/utils/strings.js'

class TextoeGrafico extends Component {

  constructor() {

    super();
    this.state =  {
      label: 'Series 1',
      data: [
        { primary: 20, secondary: 100 },
        { primary: 30, secondary: 200 },
        { primary: 40, secondary: 300 },
      ],
      textAreaValue: "",
    };

    this.handleChange = this.handleChange.bind(this);

  }


  // preencheDados = (palavras) => {
  //   let dadosTemp= [];
  //   let i=0;
  //   for(i=0;i<palavras.length; i=i+2)
  //   {
  //     let prim = (palavras[i]);
  //     let secon= (palavras[i+1]);
  //     let strucDados = { primary:prim, secondary:secon, }
  //     dadosTemp.push(strucDados);
  //   }
  //   console.log(dadosTemp);
    
  //   this.setState({
  //     label: 'Series 1',
  //     data: dadosTemp,
  //   });

  // }


  alteraTexto(texto){
    
    if (texto.length>0)
    {
      let palavra; 
      let textSemFormatacao=texto;
      const objeto = new Palavras(textSemFormatacao);
      objeto.definePalavra = objeto.trocaLinhaPorEspaco();
      objeto.definePalavra = objeto.converteEspacoEmVetor();
      console.log(objeto.pegaPalavra);
      palavra= objeto.pegaPalavra;
       /// se nao termina com espaco e tem um numero par de dados 
    if ( (palavra[texto.length] !=="") && (texto.length%2==0) )
    return (true);
    }
    return (false); 
  }


  /// se a mudanca produzir um data valido , atualizar o data e acabou :D
  handleChange(event,entrada) {
    // verificar se dados sao validos 
    let dadosValidos=this.alteraTexto(this.state.textAreaValue);
    
    /// aplicar mudancas no textarea
    this.setState({
      textAreaValue: event.target.value ,
    })

    // aplica mudancas no gráfico se dados sao validos 
    if (dadosValidos)
    {
      this.setState({
        label: 'Series 1',
        data: [
          { primary: "a", secondary: 1000 },
          { primary: "b", secondary: 2000 },
          { primary: "c", secondary: 3000 },
        ],
      })
    }


  }
  
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

            
            <MyChart data={this.state} >
            </MyChart>

         </>
    );
  }
}



export default TextoeGrafico;



/*

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