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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
