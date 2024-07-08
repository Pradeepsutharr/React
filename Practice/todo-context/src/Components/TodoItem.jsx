import React from "react";
import { useState } from "react";
import useTodo from "../Contexts/TodoContext";

function TodoItem({ NewTodo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoName, setTodoName] = useState(NewTodo.Title);

  const { EditTodo, ToggleComplete, DeleteTodo } = useTodo();

  const Edit = () => {
    EditTodo(NewTodo.id, { ...NewTodo, Title: todoName });
    setIsEditable(false);
  };

  const completed = () => {
    ToggleComplete(NewTodo.id);
  };

  return (
    <div>
      <input type="checkbox" checked={NewTodo.completed} onChange={completed} />

      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        readOnly={!isEditable}
      />

      <button
        onClick={() => {
          if (NewTodo.completed) return;
          if (isEditable) {
            Edit();
          } else {
            setIsEditable((prev) => !prev);
          }
        }}
        disabled={NewTodo.completed}
      >
        {!isEditable ? "Edit" : "Save"}
      </button>

      <button onClick={() => DeleteTodo(NewTodo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
