import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { InputBox } from "./Components";
import useCurrency from "./Hooks/UseCurrency";

function App() {
  const [inputAmount, setInputAmount] = useState(0);
  const [convertFrom, setConvertFrom] = useState("usd");
  const [convertTo, setConvertTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const Currency = useCurrency(convertFrom); // here we pass "convertFrom" in currency variable which was created in custom hook
  const allCurrencies = Object.keys(Currency);

  const swap = () => {
    setConvertFrom(convertTo);
    setConvertTo(convertFrom);
    setInputAmount(convertedAmount);
    setConvertedAmount(inputAmount);
  };

  useEffect(() => {
    setConvertedAmount(inputAmount * Currency[convertTo]);
  }, [inputAmount, convertFrom, convertTo, Currency, swap]);

  return (
    <>
      <h1>Currency</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <InputBox
          label="From"
          amount={inputAmount}
          currencyOptions={allCurrencies}
          selectCurreny={convertFrom}
          onAmountChange={(inputAmount) => setInputAmount(inputAmount)}
          onCurrencyChange={(currentVal) => setConvertFrom(currentVal)}
        />

        <button onClick={swap}>Swap</button>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={allCurrencies}
          selectCurreny={convertTo}
          onCurrencyChange={(currentVal) => setConvertTo(currentVal)}
        />

        {/* <input type="submit" value="Convert" /> */}
      </form>
    </>
  );
}

export default App;
