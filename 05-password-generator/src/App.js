import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [Length, setLength] = useState(4);
  const [AllowNums, setAllowNums] = useState(false);
  const [AllowChar, setAllowChar] = useState(false);
  const [Password, setPassword] = useState("");

  const GeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (AllowNums) str += "0123456789";
    if (AllowChar) str += "@#$%&?";

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

      console.log(char);
      console.log(pass);
    }
    setPassword(pass);
  }, [Length, AllowChar, AllowNums, setPassword]);

  useEffect(() => {
    GeneratePassword();
  }, [Length, AllowChar, AllowNums, GeneratePassword]);

  const CopyPass = () => {
    navigator.clipboard.writeText(Password);
  };

  return (
    <div className="  px-5 py-4  mx-auto shadow-md bg-gray-600 rounded-lg">
      <h1 className="text-white text-2xl font-semibold text-center mb-4">
        Password Generator
      </h1>
      <div className="rounded-md flex justify-center lg:justify-between overflow-hidden ">
        <input
          type="text"
          value={Password}
          placeholder="Password"
          readOnly
          className="w-full p-2"
        />
        <button
          className="text-white  bg-blue-600 py-2 px-10"
          onClick={CopyPass}
        >
          Copy
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 item-center lg:justify-between mt-4">
        <div className="flex flex-wrap items-center">
          <input
            type="range"
            min={1}
            max={20}
            value={Length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white">Length:{Length}</label>
        </div>

        <div className="flex  bg-blue-600 px-3 py-2 rounded-lg items-center">
          <input
            type="checkbox"
            defaultChecked={AllowNums}
            onChange={() => {
              setAllowNums((prev) => !prev);
            }}
            className="me-1"
            style={{ zoom: 1.5 }}
            id="num"
          />
          <label htmlFor="num" className="text-white cursor-pointer">
            Allow Num
          </label>
        </div>

        <div className="flex bg-blue-600 px-3 py-2  rounded-lg items-center">
          <input
            type="checkbox"
            defaultChecked={AllowChar}
            onChange={() => {
              setAllowChar((prev) => !prev);
            }}
            className="me-1 "
            style={{ zoom: 1.5 }}
            id="char"
          />
          <label htmlFor="char" className="text-white cursor-pointer">
            Allow Char
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
