import React, { useState } from "react";
import axios from "axios";

const ElementTwo = () => {
  const [data, setData] = useState("");

  const updateData = async (data) => {
    const response = await axios.put("/backend", {
      data: data,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateData(data);

    setData("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "8px"}}>
          <h3 style={{ color: "#000000" }}>Update the Data</h3>
          <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
            <input
              type="text"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ElementTwo;
