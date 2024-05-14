import React from "react";
import { Resizable } from "re-resizable";
import ElementOne from "./components/ElementOne";
import ElementTwo from "./components/ElementTwo";
import ElementThree from "./components/ElementThree";

import axios from "axios";

axios.defaults.baseURL = "https://13.54.227.3:8443";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      flexWrap: "wrap",
      alignItems: "center",
      width: "100vw",
    }}
  >
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Resizable
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          background: " #3F88C5",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)"
        }}
        defaultSize={{
          width: 350,
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
          background: " #FF6F61",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)"
        }}
        defaultSize={{
          width: 350,
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
        background: " #A8D5BA",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)"
      }}
      defaultSize={{
        width: 350,
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
