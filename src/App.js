import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>helloworld 🏉</h1>
      <input />
      <button>add +</button>

      <ul>
        <li> Take meow</li>
        <li> mow mow </li>
      </ul>
    </div>
  );
}
export default App;
