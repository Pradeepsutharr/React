import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/TodoSlice";

function AddTodoForm() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length > 0) {
      dispatch(addTodo({ title: input }));
    }
    setinput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-3 border p-2 rounded-md flex justify-between"
    >
      <input
        className="w-full"
        type="text"
        placeholder="Write Todo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <input
        className="bg-blue-600 text-white px-3 py-1 rounded"
        type="submit"
        value="Add Todo"
      />
    </form>
  );
}

export default AddTodoForm;
