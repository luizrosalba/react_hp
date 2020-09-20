import React , {Component} from "react";
import { Chart } from "react-charts";
import ResizableBox from "./ResizableBox";
import "./styles.css";


class  MyChart extends Component  {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state =  {
      label: 'Series 1',
      data: [
        { primary: 2, secondary: 10 },
        { primary: 3, secondary: 20 },
        { primary: 4, secondary: 30 },
      ],
    };
    this.handleMudanca = this.handleMudanca.bind(this);
  }

  handleMudanca = () => {
    //console.log(this.props.data);
    this.setState( {
        label: 'Series 1',
        data: this.props.data,
      })

    
  }
  
  /// define os dados 
  render (){
    const data = this.props.data;
    const series = {showPoints: true,};
    const axes = [{primary: true,type: "ordinal",position: "bottom", },
                  { type: "linear", position: "left" }, ];
    return(
      <div ref={this.wrapper}>
        <ResizableBox>
          <Chart data={[data]} series={series} axes={axes} tooltip />  
        </ResizableBox>
        
      </div>
    );
  }
   
}

export default MyChart;


/*

this.state = [
      {
        label: 'Series 1',
        data: [
          { primary: 2, secondary: 10 },
          { primary: 3, secondary: 20 },
          { primary: 4, secondary: 30 },
        ],
      },
    ]



        <br />
        <br />

<button onClick={randomizeData}>Randomize Data</button>

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          { primary: 1, secondary: 10 },
          { primary: 2, secondary: 20 },
          { primary: 3, secondary: 30 },
        ],
      },
    ],
    []
  )


    /// define a serie 
  const series = React.useMemo(
    () => ({
      showPoints: true,
    }),
    []
  );
  /// define o eixos 
  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "ordinal",
        position: "bottom",
        // filterTicks: (ticks) =>
        //   ticks.filter((date) => +timeDay.floor(date) === +date),
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  <Chart data={data} series={series} axes={axes} tooltip />

*/