import React from "react";
import { Resizable } from "re-resizable";
import ElementOne from "./components/ElementOne";
import ElementTwo from "./components/ElementTwo";
import ElementThree from "./components/ElementThree";

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000';


const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      flexWrap: "wrap",
    }}
  >
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Resizable
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 1px #ddd",
          background: "#FF0000",
        }}
        defaultSize={{
          width: 200,
          height: 200,
        }}
        minWidth={200}
        minHeight={200}
      >
        <ElementOne />
      </Resizable>
      <Resizable
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 1px #ddd",
          background: "#00FF00",
        }}
        defaultSize={{
          width: 200,
          height: 200,
        }}
        minWidth={200}
        minHeight={200}
      >
        <ElementTwo />
      </Resizable>
    </div>
    <Resizable
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        background: "#0000FF",
      }}
      defaultSize={{
        width: 200,
        height: 200,
      }}
      minWidth={200}
      minHeight={200}
    >
      <ElementThree />
    </Resizable>
  </div>
);

export default App;
