import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleComplete } from "../Features/TodoSlice";

function TodoItem({ todo }) {
  const [todoText, setTodoText] = useState(todo.title);
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleComplete(todo.id))}
        />

        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          readOnly={!editable}
        />

        <button
          onClick={() => {
            if (todo.completed) return;
            if (editable) {
              dispatch(editTodo({ id: todo.id, title: todoText }));
              setEditable(false);
            } else {
              setEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {editable ? "save" : "Edit"}
        </button>

        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
      </div>
    </>
  );
}

export default TodoItem;
