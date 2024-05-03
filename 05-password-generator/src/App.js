import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [Length, setLength] = useState(6);
  const [AllowNums, setAllowNums] = useState(false);
  const [AllowChar, setAllowChar] = useState(false);
  const [Password, setPassword] = useState("");
  const PassRef = useRef(null);

  const GeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (AllowNums) str += "0123456789";
    if (AllowChar) str += "@#$%&?";

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

      // console.log(str.length);
      // console.log(char);
      // console.log(pass);
    }
    setPassword(pass);
  }, [Length, AllowChar, AllowNums, setPassword]);

  useEffect(() => {
    GeneratePassword();
    document.querySelector(".copy").innerText = "Copy";
    document
      .querySelector(".copy")
      .classList.replace("bg-green-600", "bg-blue-600");
  }, [Length, AllowChar, AllowNums, GeneratePassword]);

  const CopyPass = useCallback(() => {
    document.querySelector(".copy").innerText = "Copied";
    document
      .querySelector(".copy")
      .classList.replace("bg-blue-600", "bg-green-600");

    PassRef.current?.select();
    // selecting text which will be copied
    // passRef is a hook (useRef) which is used for get reference of any element
    PassRef.current?.setSelectionRange(0, 3);
    //adding range for selection
    window.navigator.clipboard.writeText(Password);
    // here we are copying text from input which is generated by function
  }, [Password]);

  return (
    <div className="  px-5 py-4  mx-auto shadow-md bg-gray-600 rounded-lg">
      <h1 className="text-white text-2xl font-semibold text-center mb-4">
        Password Generator
      </h1>
      <div className="flex md:flex-row flex-col gap-5 justify-center md:justify-between">
        <input
          type="text"
          value={Password}
          placeholder="Password"
          readOnly
          className="w-full outline-none p-2 rounded-md"
          ref={PassRef}
        />
        <button
          className="text-white  copy rounded-md mx-auto block bg-blue-600 py-2 px-10"
          onClick={CopyPass}
        >
          Copy
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 item-center  md:justify-between lg:justify-between mt-4">
        <div className="flex bg-white px-4 rounded-md justify-center flex-wrap items-center">
          <input
            type="range"
            min={1}
            max={20}
            value={Length}
            className="cursor-pointer me-2"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="font-medium">Length:{Length}</label>
        </div>

        <div className="flex  bg-blue-600 px-3 py-2 rounded-md items-center">
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

        <div className="flex bg-blue-600 px-3 py-2  rounded-md items-center">
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
