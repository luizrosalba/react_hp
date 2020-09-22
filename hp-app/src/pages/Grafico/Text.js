import React, { Component } from "react";


class Texto extends Component {
  constructor() {
    super();
    this.state =  {
      textAreaValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
    handleChange(event) {
    this.setState({
      textAreaValue: event.target.value,
    })
  }
  // componentDidUpdate(){
  //  console.log("did Updata");
  // }
  
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
         </>
    );
  }
}
export default Texto;



/*
   

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