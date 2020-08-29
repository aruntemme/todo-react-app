import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Take meow", " mow mow "]);

  return (
    <div className="App">
      <h1>Todo React App 📒</h1>
      <input />
      <button>add +</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
