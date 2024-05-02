import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Counts() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);

    // in this scenario the value of counter will increases 4 times in a single click  ,,,,prevcounter is no a new thing its just a name change to avoid confusion
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default Counts;
