import React from "react";
import Chart from "react-google-charts";
//import {Resizable} from "re-resizable"

//import Mudar from "./MudarGrafico"
 

const options = {
  title: "Seu título",
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

  colors: ['#8e0152', '#276419'],
  pointSize: 5,
  
};
//               width:220,
///             height:140, estava, excedendo o tamanho da menor pagina 
/// concertei na mao 
class Grafico extends React.Component {
  render() {
    return (
          <Chart
          chartType="LineChart"
          data={this.props.data}
          options={options}
        />
    );
  }
}

export default Grafico;

/*
     width="100%"
          height="100%"
     
*/