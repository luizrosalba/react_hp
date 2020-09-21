import React, { Component } from "react";
import MyChart from './grafico';
import  Palavras  from '../../common/utils/strings.js'

class TextoeGrafico extends Component {

  constructor() {

    super();
    this.state =  {
      label: 'Series 1',
      data: [
        { x: 20, y: 100 },
        { x: 30, y: 200 },
        { x: 40, y: 300 },
      ],
      textAreaValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  ValidaEntrada (ent){
    /// deve ser uma pa
    if ( (ent[ent.length] !=="") && (ent.length%2===0) )
      return true; 
    else 
      return false; 
  }

  /// recebe o texto de entrada 
  // valida e retorna para o 
  /// o gráfico 
  alteraTexto(texto){
    let dadosTemp= [];
    let retorno={valido:false,dadosTemp};

    if (texto.length>0)
    {
      /// formata entrada
      let palavra; 
      let textSemFormatacao=texto;
      const objeto = new Palavras(textSemFormatacao);
      objeto.definePalavra = objeto.trocaMultiplosEspacosPorUmSo();
      objeto.definePalavra = objeto.converteEspacoEmVetor();
      palavra= objeto.pegaPalavra;

      
      console.log(palavra);
      

       /// se nao termina com espaco e tem um numero par de dados 
       /// tem outras verificações a fazer ! 

        if (this.ValidaEntrada(palavra))
        {
            console.log(objeto.pegaPalavra);

            retorno = {valido:true,dadosTemp}
        }
    }
      return (retorno); 
  }

  
  /// se a mudanca produzir um data valido , atualizar o data e acabou :D
  handleChange(event) {
    // verificar se dados sao validos 
    let dadosValidos=this.alteraTexto(this.state.textAreaValue);
    
    /// aplicar mudancas no textarea
    this.setState({
      textAreaValue: event.target.value ,
    })

    // aplica mudancas no gráfico se dados sao validos 
    if (dadosValidos.valido)
    {
      
      this.setState({
        label: 'Series 1',
        data: [...dadosValidos.dadosTemp],
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
            <MyChart data={this.state.data} changeText={this.changeDados}>
            </MyChart>
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