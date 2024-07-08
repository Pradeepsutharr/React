import React, { useId } from "react";

function InputBox({
  label, //label for multiple components
  amount, //value of input field
  onAmountChange, //callback fnc when amount in input changes
  onCurrencyChange, //callback fun when currency in select menu changes
  currencyOptions = [], //curreny options fetched from api
  selectCurreny = "usd", //value for select menu default usd
}) {
  const amountInputId = useId(); //generates a unique id

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <label htmlFor={amountInputId}>{label}</label>
        </div>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div>
        <p>Currency Type</p>
        <select
          value={selectCurreny}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
