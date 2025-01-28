import React from "react";

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="bg-blue-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold">Total Expense</h2>
      <p className="text-lg">${total.toFixed(2)}</p>
    </div>
  );
}

export default ExpenseSummary;
