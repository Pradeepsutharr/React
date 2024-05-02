import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  //count is a variable which will be updated my setcount function

  const addValue = () => {
    // console.log('value Added',Math.floor(Math.random()+1));
    // count = count + 1;
    // setcount(count);
    // console.log("clicked", count);

    if (count < 7) {
      count = count + 1;
      setcount(count);
      console.log("value", count);
    }
  };

  const removeValue = () => {
    // count = count - 1;
    // setcount(count);
    // console.log("clicked", count);

    if (count > 0) {
      count = count - 1;
      setcount(count);
      console.log("value", count);
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <h3>Counter Value: {count}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <hr />
    </>
  );
}

export default App;
// export default Counts;
