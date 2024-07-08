import { useContext, createContext } from "react";

export const TodoContext = createContext({
  AllTodos: [],
  AddNewTodo: (NewTodo) => {},
  EditTodo: (id, NewTodo) => {},
  DeleteTodo: (id) => {},
  ToggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
