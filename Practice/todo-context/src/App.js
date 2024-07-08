import logo from "./logo.svg";
import "./App.css";
import AddNewForm from "./Components/AddNewForm";
import TodoItem from "./Components/TodoItem";
import { TodoProvider, useTodo } from "./Contexts/TodoContext";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [AllTodos, setAllTodos] = useState([]);

  const AddNewTodo = (NewTodo) => {
    setAllTodos((oldTodos) => [...oldTodos, { ...NewTodo }]);
  };

  const EditTodo = (id, NewTodo) => {
    setAllTodos((oldTodos) =>
      oldTodos.map((eachTodo) => (eachTodo.id === id ? NewTodo : eachTodo))
    );
  };

  const ToggleComplete = (id) => {
    setAllTodos((oldTodos) =>
      oldTodos.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };

  const DeleteTodo = (id) => {
    setAllTodos((oldTodos) =>
      oldTodos.filter((eachTodo) => eachTodo.id !== id)
    );
  };

  useEffect(() => {
    const StoredTodos = JSON.parse(localStorage.getItem("MyTodos"));
    if (StoredTodos && StoredTodos.length > 0) {
      setAllTodos(StoredTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("MyTodos", JSON.stringify(AllTodos));
  }, [AllTodos]);

  return (
    <TodoProvider
      value={{ AllTodos, AddNewTodo, EditTodo, ToggleComplete, DeleteTodo }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Manage Your Todos</h2>
        <div>
          <AddNewForm />
        </div>

        <div>
          {AllTodos.map((eachTodo) => (
            <div key={eachTodo.id}>
              <TodoItem NewTodo={eachTodo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
