import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      alert("Please provide both description and amount!");
      return;
    }

    addExpense({ description, amount: parseFloat(amount) });
    setDescription("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md mb-4"
    >
      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
