import React from "react";
import Chart from "react-google-charts";
import {Resizable} from "re-resizable"

//import Mudar from "./MudarGrafico"
 

// const data = [
//   ["Year", "Sales", "Expenses"],
//   ["2004", 1000, 400],
//   ["2005", 1170, 460],
//   ["2006", 660, 1120],
//   ["2007", 1030, 540]
// ];
const options = {
  title: "Seu título",
  curveType: "function",
  legend: { position: "bottom" },
  chartArea: {
    width: '50%',
    height: '50%',
  },
  colors: ['#8e0152', '#276419'],
  pointSize: 5,
  
};
class Grafico extends React.Component {
  render() {
    return (
      
          <Resizable
            defaultSize={{
              width:320,
              height:200,
            }}
          >
          <Chart
          chartType="LineChart"
          width="100%"
          height="100%"
          data={this.props.data}
          options={options}
        />
          </Resizable>

        
        
       
      
    );
  }
}


export default Grafico;

/*
     width="100%"
          height="100%"
     
*/