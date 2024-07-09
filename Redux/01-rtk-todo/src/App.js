import logo from "./logo.svg";
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  return (
    <>
      <h2>Todo List With Redux Toolkit</h2>
      <AddTodoForm />
      <TodoItem />
    </>
  );
}

export default App;
