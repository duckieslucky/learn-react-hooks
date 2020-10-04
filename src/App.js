import React, { useEffect, useState } from "react";
import queryString from "query-string";
import "./App.css";
import Irender from "./components/Irender/Irender";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    const uCount = count + 1;
    setCount(uCount);
  }

  return (
    <div className="app">
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
      <Irender name="Khoa123" />
    </div>
  );
}

export default App;
