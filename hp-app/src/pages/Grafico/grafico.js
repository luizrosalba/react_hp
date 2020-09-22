import React from "react";
import { Chart } from "react-charts";
import  Palavras  from '../../common/utils/strings.js'
//import { Resizable } from './Resizable.js';
//import Texto  from "./Text"
import "./styles.css";

/// o { } é para nao ter que colocar { } a cada chamada do props
export default function MyChart ()  {
  /// tem que incluir o props.data como dependecia
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [{x:1,y:2},{x:3,y:4},{x:5,y:6}],
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, /// 
        type: 'ordinal', 
        position: 'bottom',
        showGrid : true
         },
      { 
        type: 'linear', 
        position: 'left' }
    ],
    []
  )

  const series = React.useMemo(
    () => ({
      showPoints: true,
    }),
    []
  );

  return (
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} series={series} axes={axes} tooltip />           
    </div>
  )
}


/*
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
  

