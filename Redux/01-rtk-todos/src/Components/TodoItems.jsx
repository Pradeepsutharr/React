import React, { useState } from "react";
import { updateTodo, deleteTodo, toggleComplete } from "../Features/TodoSlice";
import { useDispatch } from "react-redux";

function TodoItems({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const dispatch = useDispatch();

  return (
    <div className="border px-2 py-1 rounded-md flex items-center">
      <input
        className="me-2 cursor-pointer"
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleComplete(todo.id))}
      />

      <input
        className="py-1"
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        readOnly={!isEditable}
      />

      {!todo.completed ? (
        <button
          className="mx-3 bg-gray-200 px-3 py-1 rounded"
          onClick={() => {
            if (isEditable) {
              dispatch(updateTodo({ id: todo.id, title: newTitle }));
              setIsEditable(false);
            } else {
              setIsEditable((prev) => !prev);
            }
          }}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      ) : (
        <span className="bg-green-600 px-3 py-1 mx-2 rounded text-white ">
          Completed
        </span>
      )}

      <button
        className="bg-red-600 text-white px-3 py-1 rounded "
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItems;
