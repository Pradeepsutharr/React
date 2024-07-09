import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
};

//
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
      };
      state.allTodos.push(todo);
    },
    removeTodo: (state, action) => {
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addtodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
