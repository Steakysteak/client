import React, { useState } from "react";

const ElementTwo = () => {
  const [data, setData] = useState("");

  const updateData = async (data) => {
    const response = await axios.put("http://localhost:8000/backend", {
      data: data,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data, "Event submit");
    updateData(data);

    setData("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h3 style={{color: '#000000'}} >Update the Data</h3>
          <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
            <input
              type="text"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              style={{borderRadius: '10px'}}
            />
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ElementTwo;
