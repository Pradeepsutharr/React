import './App.css';
import Input from './component/Input.jsx'
import { useState } from 'react';
import useCurrency from './hook/useCrInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  const [ConvertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrency(from)

  const Options = Object.keys(CurrencyInfo)

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(ConvertedAmount)
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" >
      <div className="w-full  ">
        <div className="w-full shadow-md max-w-md mx-auto border rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>

            <div className="w-full mb-1 border p-1 rounded-md">
              <Input
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(Currency) => setFrom(Currency)}
                selectCurrency={from}
                CurrencyOptions={Options}

              />
            </div>
            <div className="relative w-full h-0.5 ">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                swap </button>
            </div>
            <div className="w-full mt-1 mb-4 border p-1 rounded-md">
              <Input
                label="To"
                amount={ConvertedAmount}
                onCurrencyChange={(Currency) => setTo(Currency)}
                CurrencyOptions={Options}
                selectCurrency={to}

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;