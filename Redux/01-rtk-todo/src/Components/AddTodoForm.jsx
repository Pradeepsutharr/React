import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Features/TodoSlice";

function AddTodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length > 0) dispatch(addtodo({ title: input }));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <input type="submit" value="Add Todo" />
    </form>
  );
}

export default AddTodoForm;
