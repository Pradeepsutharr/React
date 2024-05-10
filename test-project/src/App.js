import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [Length, setLength] = useState(7);
  const [Num, setNum] = useState(false);
  const [Symbol, setSymbol] = useState(false);
  const [Password, setPassword] = useState("");
  const PassRef = useRef(null);

  const GeneratePassword = useCallback(() => {
    let Pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (Num) str += "1234567890";
    if (Symbol) str += "!@#$%&*";

    for (let i = 0; i < str.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      Pass += str.charAt(char);
    }
    setPassword(Pass);
    console.log(Pass);
  }, [Length, Num, Symbol, setPassword]);

  useEffect(() => {
    GeneratePassword();
    let btn = document.getElementById("btn");
    btn.innerText = "Copy";
    btn.classList.replace("bg-green-500", "bg-blue-500");
  }, [Length, Num, Symbol, GeneratePassword]);

  const CopyPass = useCallback(() => {
    PassRef.current?.select();
    window.navigator.clipboard.writeText(Password);
    let btn = document.getElementById("btn");
    btn.innerText = "Copied";
    btn.classList.replace("bg-blue-500", "bg-green-500");
  }, [Password]);

  return (
    <>
      <div className="border-white  border-2 p-3 rounded-lg">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Password"
            readOnly
            value={Password}
            ref={PassRef}
            className="w-96 text-black py-2 px-2 rounded"
          />
          <button
            onClick={CopyPass}
            className=" bg-blue-500 px-6 py-2 rounded"
            id="btn"
          >
            Copy
          </button>
        </div>

        <div className="flex gap-3 mt-5">
          <div className="flex items-center gap-2 border-2 p-1 rounded">
            <input
              type="range"
              min={1}
              max={20}
              value={Length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{Length}</label>
          </div>

          <div className="flex gap-1 px-2 rounded border-2 p-1">
            <input
              id="num"
              type="checkbox"
              style={{ zoom: 1.5 }}
              className=""
              defaultChecked={Num}
              onChange={() => {
                setNum((num) => !num);
              }}
            />
            <label htmlFor="num" className="cursor-pointer">
              Add Num
            </label>
          </div>

          <div className="flex gap-1 px-2 rounded border-2 p-1 cursor-pointer">
            <input
              id="sym"
              type="checkbox"
              style={{ zoom: 1.5 }}
              defaultChecked={Symbol}
              className=""
              onChange={() => {
                setSymbol((sym) => !sym);
              }}
            />
            <label htmlFor="sym" className="cursor-pointer">
              Add Symbol
            </label>
          </div>
        </div>
      </div>

      <div id="clipboard"></div>
    </>
  );
}

export default App;
