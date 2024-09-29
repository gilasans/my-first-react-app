// src/App.js
import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import 'bulma/css/bulma.min.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState('low');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, priority, completed: false }]);
      setNewTodo('');
      setPriority('low');
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText, newPriority) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText, priority: newPriority } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="title is-3 has-text-centered">To-Do List</h1>

      <div className="columns">
      <div className="column is-6">
          <div className="field">
            <div className="control">
              <div className="select">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="low">Rendah</option>
                  <option value="medium">Sedang</option>
                  <option value="high">Tinggi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Tambah tugas baru"
              />
            </div>
            <div className="control">
              <button className="button is-primary" onClick={addTodo}>
                Tambah Tugas
              </button>
            </div>
          </div>
        </div>

        
      </div>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleComplete={() => toggleComplete(index)}
            removeTodo={() => removeTodo(index)}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
