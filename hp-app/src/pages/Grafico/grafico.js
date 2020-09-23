import React from "react";
import Chart from "react-google-charts";

 

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
  legend: { position: "bottom" }
};
class Grafico extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={this.props.data}
          options={options}
        />
      </div>
    );
  }
}


export default Grafico;
