import "./App.css";
import { TodoProvider } from "./Contexts/TodoContext";
import { useEffect, useState } from "react";
import TodoItem from "./Components/TodoItem";
import TodoForm from "./Components/TodoForm";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  const addTodo = (newTodo) => {
    // setAllTodos(newTodo)   // if you pass new todo like this,  previous todods will be deleted and new todo will asign herre
    // we want all previous todo and thn add a new one
    setAllTodos((oldTodods) => [{ id: Date.now(), ...newTodo }, ...oldTodods]);
  };

  const editTodo = (id, newTodo) => {
    setAllTodos((oldTodods) =>
      oldTodods.map((eachTodo) => (eachTodo.id === id ? newTodo : eachTodo))
    );
  };

  const toggleComplete = (id) => {
    setAllTodos((oldTodods) =>
      oldTodods.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setAllTodos((oldTodods) =>
      oldTodods.filter((eachTodo) => eachTodo.id !== id)
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("MyTodos"));

    if (storedTodos && storedTodos.length > 0) {
      setAllTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("MyTodos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <TodoProvider
      value={{ allTodos, addTodo, editTodo, toggleComplete, deleteTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {allTodos.map((Todo) => (
              <div className="w-full" key={Todo.id}>
                <TodoItem myTodo={Todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
