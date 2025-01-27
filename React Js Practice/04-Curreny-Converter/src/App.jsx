import { useEffect, useState } from "react";
import useCurrency from "./hooks/useCurrency";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setCovertedAmount] = useState(0);

  const Currency = useCurrency(from);
  const allCurrencies = Object.keys(Currency);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setCovertedAmount(amount);
  };

  const Convert = () => {
    if (!amount) return alert("Please Enter A Valid Amount");
    setCovertedAmount(amount * Currency[to]);
  };

  // useEffect(() => {
  //   if (!amount) return alert("Please Enter A Valid Amount");
  //   setCovertedAmount(amount * Currency[to]);
  // }, [amount, from, to, Currency]);

  return (
    <>
      <div>
        <h2>Currency Converter</h2>

        <div>
          <label style={{ display: "block", textAlign: "left" }} htmlFor="">
            From
          </label>
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {allCurrencies.map((crr) => (
              <option key={crr} value={crr}>
                {crr}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button onClick={handleSwap}>Swap</button>

        <div>
          <label style={{ display: "block", textAlign: "left" }} htmlFor="">
            To
          </label>
          <input
            type="text"
            placeholder="Amount"
            value={convertedAmount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {allCurrencies.map((crr) => (
              <option key={crr} value={crr}>
                {crr}
              </option>
            ))}
          </select>
        </div>
        <button onClick={Convert}>Convert Amount</button>
      </div>
    </>
  );
}

export default App;
