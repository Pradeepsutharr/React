import { createContext, useContext } from "react";

export const TodoContext = createContext({
  allTodos: [
    // (newTodo = {
    //   id: 1,
    //   title: "new",
    //   completed: false,
    // }),
  ],
  addTodo: (newTodo) => {},
  editTodo: (id, newTodo) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
