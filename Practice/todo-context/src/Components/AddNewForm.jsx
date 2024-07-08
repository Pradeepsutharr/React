import React from "react";
import { useState } from "react";
import useTodo from "../Contexts/TodoContext";

function AddNewForm() {
  const [NewTodo, setNewTodo] = useState("");

  const { AddNewTodo } = useTodo();

  const Add = (e) => {
    e.preventDefault();

    if (!NewTodo) return;
    AddNewTodo({ id: Date.now(), Title: NewTodo, completed: false });
    setNewTodo("");
  };

  return (
    <div>
      <form onSubmit={Add}>
        <input
          type="text"
          value={NewTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Write Todo"
        />

        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default AddNewForm;
