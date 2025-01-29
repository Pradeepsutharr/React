import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Add new expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="w-4/5 mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Expense Tracker
      </h1>
      <div className="flex justify-between w-full">
        <div className="w-2/5">
          <ExpenseForm addExpense={addExpense} />
        </div>

        <div className="w-2/5">
          <ExpenseSummary expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
