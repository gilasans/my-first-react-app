// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'has-background-danger-light';
      case 'medium':
        return 'has-background-warning-light';
      case 'low':
        return 'has-background-success-light';
      default:
        return '';
    }
  };
  
  return (
    <li className={`box ${getPriorityClass(todo.priority)} ${todo.completed ? 'has-text-grey-light' : ''}`}>
      <p>{todo.text}</p>
      <p className="tag is-primary is-light">{todo.priority.toUpperCase()}</p>
      <div className="buttons">
        <button className="button is-small is-info" onClick={toggleComplete}>
          {todo.completed ? 'Batal' : 'Selesai'}
        </button>
        <button className="button is-small is-danger" onClick={removeTodo}>
          Hapus
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
