import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.allTodos.push(todo);
    },

    removeTodo: (state, action) => {
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    editTodo: (state, action) => {
      const todo = state.allTodos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, title: action.payload.title }
          : todo
      );
    },

    toggleComplete: (state, action) => {
      const todo = state.allTodos.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addtodo, removeTodo, editTodo, toggleComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
