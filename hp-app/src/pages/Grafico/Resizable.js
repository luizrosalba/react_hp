import React from "react";
import { Resizable } from "re-resizable";

export default function Resizable({
  children,
  width = 500,
  height = 300,
  resizable = true,
  style = {},
  className
}) {
  return (
    <div>
      {resizable ? (
        <Resizable width={width} height={height}>
          <div
            style={{
              ...style,
              width: "100%",
              height: "100%"
            }}
            className={className}
          >
            {children}
          </div>
        </Resizable>
      ) : (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            ...style
          }}
          className={className}
        >
          {children}
        </div>
      )}
    </div>
  );
}
