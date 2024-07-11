import { useEffect } from "react";
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoItems from "./Components/TodoItems";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./Features/TodoSlice";

function App() {
  const allTodos = useSelector((state) => state.allTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      storedTodos.forEach((todo) => {
        dispatch(
          addTodo({ title: todo.title, completed: todo.completed, id: todo.id })
        );
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <>
      <AddTodoForm />
      {allTodos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default App;
