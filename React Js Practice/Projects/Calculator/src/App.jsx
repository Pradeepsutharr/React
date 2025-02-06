import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handlePercentage = () => {
    try {
      const expression = input.split(/([+\-*/])/);
      const lastNumber = expression[expression.length - 1];
      const operator = expression[expression.length - 2];
      const number = parseFloat(lastNumber);

      if (operator === "+" || operator === "-") {
        const percentageValue = (number / 100) * parseFloat(expression[0]);
        const newInput = input.replace(/%/g, "");
        const newResult =
          operator === "+"
            ? parseFloat(newInput) + percentageValue
            : parseFloat(newInput) - percentageValue;
        setResult(newResult);
      } else if (operator === "*" || operator === "/") {
        const percentageValue = number / 100;
        const newInput = input.replace(/%/g, "");
        const newResult =
          operator === "*"
            ? parseFloat(newInput) * percentageValue
            : parseFloat(newInput) / percentageValue;
        setResult(newResult);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const calculateResult = () => {
    try {
      if (input.includes("%")) {
        handlePercentage();
      } else {
        setResult(eval(input).toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("/")}>/</button>

        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("*")}>*</button>

        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("-")}>-</button>

        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={() => handleInput(".")}>.</button>
        <button onClick={() => handleInput("%")}>%</button>
        <button onClick={() => handleInput("+")}>+</button>

        <button onClick={clearInput} className="clear">
          C
        </button>
        <button onClick={calculateResult} className="equal">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
