import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.allTodos.push(todo);
    },

    deleteTodo: (state, action) => {
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    updateTodo: (state, action) => {
      state.allTodos = state.allTodos.map((todo) =>
        todo.id === action.payload.id
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

export const { addTodo, deleteTodo, updateTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
