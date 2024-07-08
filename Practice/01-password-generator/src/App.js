import './App.css';
import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength] = useState(4)
  const [addNum, setAddNum] = useState(false)
  const [addSymbole, setAddSymbole] = useState(false)
  const [password, setPassword] = useState('')
  const PassRef = useRef(null)

  //Here We Will Generate Random Text
  const GeneratePassword = useCallback(() => {
    let Pass = ""
    let PassStr = "ABCDEFGHabcdefgh"

    if (addNum) PassStr += '1234567890' //if Add Numbers Is Checked Than add number in PassStr
    if (addSymbole) PassStr += '@#$%&'

    // this loop will Pick Characters From PassStr to Create a Password
    for (let i = 1; i <= length; i++) {
      const Char = Math.floor(Math.random() * PassStr.length)
      Pass += PassStr.charAt(Char)
    }
    setPassword(Pass)
  }, [length, addNum, addSymbole, setPassword])

  useEffect(() => {
    GeneratePassword()
    document.getElementById('copied').innerText = null
    document.getElementById('copyBtn').innerText = 'Copy'
  }, [length, addNum, addSymbole, GeneratePassword])


  //copy password
  const CopyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    PassRef.current?.select()
    PassRef.current?.setSelectionRange(0, 10)
    document.getElementById('copied').innerText = `Copied: ${password}`
    document.getElementById('copyBtn').innerText = 'Copied'
  }, [password])



  return (
    <>
      <div className='container' style={{ textAlign: "center" }}>

        <div className="input">
          <input type="text" readOnly value={password} ref={PassRef} />
          <button style={{ cursor: 'pointer' }} onClick={CopyPassword} id='copyBtn'>Copy</button>
        </div>

        <br />

        <div>
          <input type="range"
            style={{ cursor: 'pointer' }}
            min={1}
            max={10}
            value={length}
            onChange={(e) => setLength(e.target.value)} />
          <label>( {length} )</label>
        </div>

        <br />

        <button>
          <input type="checkbox" name="" id="num"
            defaultChecked={addNum}
            onChange={(e) => setAddNum((nums) => !nums)}
          />
          <label style={{ cursor: 'pointer' }} htmlFor="num">Add Numbers</label>
        </button>

        <button>
          <input type="checkbox" name="" id="sym"
            defaultChecked={addSymbole}
            onChange={(e) => setAddSymbole((sym) => !sym)}
          />
          <label style={{ cursor: 'pointer' }} htmlFor="sym">Add Symboles</label>
        </button>

        <h2 id='copied'></h2>

      </div>
    </>

  )

}

export default App;
