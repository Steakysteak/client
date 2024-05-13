import React from "react";
import { Resizable } from "re-resizable";
import ElementOne from "./components/ElementOne";
import ElementTwo from "./components/ElementTwo";
import ElementThree from "./components/ElementThree";

import axios from "axios";

axios.defaults.baseURL = "http://13.54.227.3:8000";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      flexWrap: "wrap",
      alignItems: "center",
      width: "100vw",
    }}
  >
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Resizable
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          background: "#FF0000",
        }}
        defaultSize={{
          width: 200,
          height: 200,
        }}
        minWidth={300}
        minHeight={200}
      >
        <ElementOne />
      </Resizable>
      <Resizable
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          background: "#00FF00",
        }}
        defaultSize={{
          width: 200,
          height: 200,
        }}
        minWidth={300}
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
        borderRadius: "12px",
        background: "#0000FF",
      }}
      defaultSize={{
        width: 200,
        height: 200,
      }}
      minWidth={300}
      minHeight={200}
    >
      <ElementThree />
    </Resizable>
  </div>
);

export default App;
