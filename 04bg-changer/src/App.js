// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("grey");

  return (
    <div
      className="w-full flex duration-500  justify-center h-screen"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-6xl font-semibold my-auto">Bg Changer</h1>
      <div className="fixed bottom-5 flex gap-5 flex-wrap bg-white py-4 px-8 rounded-lg">
        <button
          className=" rounded-md bg-red-500 px-4 py-2 capitalize"
          onClick={() => setcolor("red")}
        >
          red
        </button>
        <button
          className=" rounded-md bg-blue-500 px-4 py-2 capitalize"
          onClick={() => setcolor("blue")}
        >
          blue
        </button>
        <button
          className=" rounded-md bg-green-500 px-4 py-2 capitalize"
          onClick={() => setcolor("green")}
        >
          green
        </button>
        <button
          className=" rounded-md bg-yellow-500 px-4 py-2 capitalize"
          onClick={() => setcolor("yellow")}
        >
          yellow
        </button>
        <button
          className=" rounded-md bg-orange-500 px-4 py-2 capitalize"
          onClick={() => setcolor("orange")}
        >
          orange
        </button>
      </div>
    </div>
  );
}

export default App;
