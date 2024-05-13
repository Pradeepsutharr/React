import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
// import Navbar from "./components/Nav";

function App() {
  return (
    <>
      <h1 className="p-3 mb-2 rounded-lg bg-gray-600  hover:bg-blue-500 duration-500 text-white">
        Hello
      </h1>
      <Card username="Prateek Sir" btnText="Click me" />

      {/* adding variable (username) for dynamic value for each card */}

      <Card username="Jeetu Sir" btnText="Visit here" />

      <Card username="Vipul Sir" />
      {/* here we have'nt passed btnText, so the value of btn will be the default value which is specified in card jsx  */}
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// }

export default App;
