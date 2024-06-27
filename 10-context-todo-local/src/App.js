import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { TodoProvider } from './Contexts';
import { TodoForm, TodoItem } from './Components';

function App() {
  const [todos, setTodods] = useState([])

  const addTodo = (todo) => {
    setTodods((allTodo) => [{ id: Date.now(), ...todo }, ...allTodo])
  }

  const updateTodo = (id, todo) => {
    setTodods((allTodo) => allTodo.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo)))

    // prev.map((eachTodo) => {
    //   if (eachTodo.id === id) {
    //     todo
    //   } else {
    //     eachTodo
    //   }
    // })
  }


  const deleteTodo = (id) => {
    setTodods((allTodo) => allTodo.filter((eachTodo) => eachTodo.id !== id))
  }


  const toggleComplete = (id) => {
    setTodods((allTodo) => allTodo.map((todoVals) => todoVals.id === id ? { ...todoVals, completed: !todoVals.completed } : todoVals))
  }


  // Local Storage

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodods(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  })


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
