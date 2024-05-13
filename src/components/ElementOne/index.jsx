import React, { useState } from "react";
import axios from "axios";

const ElementOne = () => {
  const [data, setData] = useState("");

  const addData = async (data) => {
    const response = await axios.post("/backend", {
      data: data,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data, "Event submit");
    addData(data);

    setData("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
        <h3 style={{color: '#000000'}} >Add the Data</h3>
          <div style={{ display: "flex", gap: "0.625rem", flexWrap: 'wrap' }}>
            <input
              type="text"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              style={{borderRadius: '10px'}}
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ElementOne;
