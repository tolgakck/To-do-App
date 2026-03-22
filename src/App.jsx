import { useState, useEffect } from 'react'
import './css/App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) setTodos(savedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  const updateTodo = (todoId, newContent) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== todoId) return todo;
      return { ...todo, content: newContent };
    });
    setTodos(updatedTodos);
  }

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate oncreateTodo={createTodo} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  )
}

export default App;