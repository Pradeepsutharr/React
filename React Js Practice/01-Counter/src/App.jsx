import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // increases value by 4 on each click

    // if (count < 10) count = count + 1;
    // console.log("Clicked", count);
    // setCount(count);
  };

  const removeValue = () => {
    // if (count > 0) count = count - 1;
    // console.log("Clicked", count);
    // setCount(count);
    setCount(count - 1);
  };

  return (
    <>
      {/* <h2>Counter : {count}</h2>
      <button onClick={() => (count < 10 ? setCount(count + 1) : setCount(10))}>
        Add Value
      </button>
      {"  "}
      <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
        Remove Value
      </button> */}
      <h2>Counter : {count}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
