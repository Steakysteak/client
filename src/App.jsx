import React from "react";

import ElementOne from "./components/ElementOne";
import ElementTwo from "./components/ElementTwo";
import ElementThree from "./components/ElementThree";

import axios from "axios";
import { ResizableComponent } from "./components/Resizable";

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
      <ResizableComponent color={"#3F88C5"}>
        <ElementOne />
      </ResizableComponent>
      <ResizableComponent color={"#FF6F61"}>
        <ElementTwo />
      </ResizableComponent>
    </div>
    <ResizableComponent color={"#A8D5BA"}>
      <ElementThree />
    </ResizableComponent>
  </div>
);

export default App;
