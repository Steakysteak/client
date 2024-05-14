import React from 'react'
import { Resizable } from "re-resizable";

const ResizableComponent = ({children, color}) => {
  return (
    <Resizable
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          background: `${color}`,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)"
        }}
        defaultSize={{
          width: 350,
          height: 200,
        }}
        minWidth={300}
        minHeight={200}
      >
        {children}
      </Resizable>
  )
}

export default ResizableComponent
