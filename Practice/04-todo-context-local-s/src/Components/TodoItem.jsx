import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

function TodoItem({ myTodo }) {
  const [todoEditable, setTodoEditable] = useState(false);
  const [todoName, setTodoName] = useState(myTodo.title);

  const { editTodo, toggleComplete, deleteTodo } = useTodo();

  const edit = () => {
    editTodo(myTodo.id, { ...myTodo, title: todoName });
    setTodoEditable(false);
  };

  const complete = () => {
    toggleComplete(myTodo.id);
  };

  return (
    <div
      className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        myTodo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={myTodo.completed}
        onChange={complete}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          todoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${myTodo.completed ? "line-through" : ""}`}
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        readOnly={!todoEditable}
      />

      <span>
        {myTodo.completed ? (
          <i class="fa-regular fa-circle-check"></i>
        ) : (
          <i class="fa-solid fa-clock-rotate-left"></i>
        )}
      </span>
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (myTodo.completed) return;

          if (todoEditable) {
            edit();
          } else setTodoEditable((prev) => !prev);
        }}
        disabled={myTodo.completed}
      >
        {todoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(myTodo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
