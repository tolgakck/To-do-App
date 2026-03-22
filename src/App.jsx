import { useState, useEffect } from 'react'
import './css/App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { MdDarkMode, MdLightMode } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
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
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
      </button>
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