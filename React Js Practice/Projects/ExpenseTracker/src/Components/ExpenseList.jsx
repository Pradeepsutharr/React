import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div className="bg-gray-700 p-4 rounded text-white shadow-md w-full">
      <h2 className="text-xl font-bold mb-4">Expense History</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="mb-2 flex justify-between">
              <span>{expense.description}</span>
              <span>${expense.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
