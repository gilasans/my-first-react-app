// src/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, index, toggleComplete, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [editedPriority, setEditedPriority] = useState(todo.priority);

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    editTodo(index, editedText, editedPriority);
    setIsEditing(false);
  };

  return (
    <>
      <li className={`box ${getPriorityClass(todo.priority)} ${todo.completed ? 'has-text-grey-light' : ''}`}>
        <p>{todo.text}</p>
        <p className="tag is-primary is-light">{todo.priority.toUpperCase()}</p>
        <div className="buttons">
          <button className="button is-small is-info" onClick={toggleComplete}>
            {todo.completed ? 'Batal' : 'Selesai'}
          </button>
          <button className="button is-small is-warning" onClick={handleEdit}>
            Edit
          </button>
          <button className="button is-small is-danger" onClick={removeTodo}>
            Hapus
          </button>
        </div>
      </li>

      {isEditing && (
        <div className={`modal ${isEditing ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Edit Tugas</p>
              <button className="delete" onClick={() => setIsEditing(false)} aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Teks Tugas</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Prioritas</label>
                <div className="control">
                  <div className="select">
                    <select
                      value={editedPriority}
                      onChange={(e) => setEditedPriority(e.target.value)}
                    >
                      <option value="low">Rendah</option>
                      <option value="medium">Sedang</option>
                      <option value="high">Tinggi</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success " onClick={saveEdit}>Update</button>
              <button className="button" onClick={() => setIsEditing(false)}>Batal</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;
