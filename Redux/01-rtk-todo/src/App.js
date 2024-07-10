import logo from "./logo.svg";
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoItem from "./Components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addtodo } from "./Features/TodoSlice";

function App() {
  const allTodos = useSelector((state) => state.allTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("RTK Todos"));
    if (storedTodos && storedTodos.length > 0) {
      storedTodos.forEach((todo) => {
        dispatch(
          addtodo({ title: todo.title, completed: todo.completed, id: todo.id })
        );
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("RTK Todos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <>
      <h2>Todo List With Redux Toolkit</h2>
      <AddTodoForm />
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default App;
