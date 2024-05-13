import React, { useEffect, useState } from "react";
import axios from "axios";

const ElementThree = () => {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const response = await axios.get("/");
    setCount(response.data.count);
  };

  useEffect(() => {
    getCount();
  }, []);

  return <div>Count of Changes: {count}</div>;
};

export default ElementThree;
