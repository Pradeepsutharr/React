import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/TodoSlice";

function TodoItem() {
  const allTodos = useSelector((state) => state.allTodos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {allTodos.map((todo) => (
          <div
            key={todo.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h3>{todo.title}</h3>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoItem;
