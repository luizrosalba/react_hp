import React from "react";
import Chart from "react-google-charts";
//import {Resizable} from "re-resizable"

//import Mudar from "./MudarGrafico"
 


class Grafico extends React.Component {
  render() {
    return (
            <Chart
            chartType="LineChart"
            data={this.props.data}
            options={this.props.options}
             />
    );
  }
}

export default Grafico;

/*
     width="100%"
          height="100%"
     
*/