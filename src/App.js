import Latihan from "./components/Latihan";
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todo , setTodo] = useState([]);
  const [newTodo , setNewTodo] = useState('');

  const addTodo = () => {
    setTodo([...todo,newTodo]);
    setNewTodo('');
  }
  return ( 
    <div>
      <h1> MY todo list</h1>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new to-do"/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map((todo, index) => (
          <Todo key={index} item={todo}/>
        ))}
      </ul>
     {/* <Latihan usia="21" /> */}
     {/* <Counter/> */}
     {/* <Greeting/> */}
     {/* <Welcome name="alice"/> */}
     {/* <Welcome name="rizky"/> */}
    
    </div>
  );
}

export default App;
