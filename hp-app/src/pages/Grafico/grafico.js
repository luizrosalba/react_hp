import React from "react";
import { Chart } from "react-charts";
import ResizableBox from "./ResizableBox";
import "./styles.css";

/// o { } é para nao ter que colocar { } a cada chamada do props
export default function MyChart (props)  {
  
  /// tem que incluir o props.data como dependecia
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: props.data,
      }
    ],
    [props.data]
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' }
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
    <>
      <ResizableBox>
         <Chart data={data} series={series} axes={axes} tooltip />  
      </ResizableBox>
    </>
  )
}

  

