import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Grey");

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          height: "100vh",
          width: "100vw",
          textAlign: "center",
        }}
      >
        <button onClick={() => setColor("Blue")}>Blue</button>
        <button onClick={() => setColor("Red")}>Red</button>
        <button onClick={() => setColor("Black")}>Black</button>
        <button onClick={() => setColor("Yellow")}>Yellow</button>
        <button onClick={() => setColor("Green")}>Green</button>
        <h2 style={{ color: "white" }}>Color is : {color}</h2>
      </div>
    </>
  );
}

export default App;
