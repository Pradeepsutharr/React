import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Password, setPassword] = useState("");
  const [Length, setLength] = useState(6);
  const [useNumbs, setNumbs] = useState(true);
  const [useSymbole, setSymbole] = useState(false);
  const PasswordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIabcdefghi";

    if (useNumbs) str += "0123456789";
    if (useSymbole) str += "!@#$%^&*_+";

    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log(pass);
  }, [Length, useNumbs, useSymbole, setPassword]);

  const CopyPassword = useCallback(() => {
    document.getElementById("copybtn").innerText = "Copied";
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
    // alert("copied" + " " + Password);
    // alert(`Copied :  ${Password}`);
  }, [Password]);

  useEffect(() => {
    passwordGenerator();
    document.getElementById("copybtn").innerText = "Copy";
  }, [Length, useNumbs, useSymbole, passwordGenerator]);

  return (
    <>
      <h1>Password</h1>
      <h3>{Password}</h3>
      <div>
        <div>
          <input type="text" readOnly value={Password} ref={PasswordRef} />
          <button id="copybtn" onClick={CopyPassword}>
            Copy
          </button>
        </div>

        <div>
          <div>
            <label htmlFor="">Length : ( {Length} )</label>
            <input
              type="range"
              min={1}
              max={20}
              value={Length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={useNumbs}
              onChange={() => setNumbs(!useNumbs)}
            />
          </div>

          <div>
            <label htmlFor="">Symboles</label>
            <input
              type="checkbox"
              defaultChecked={useSymbole}
              onChange={(e) => setSymbole(!useSymbole)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
