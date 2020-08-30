import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take meow",
    " mow mow ",
    "wowowowowowowo",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    //adding toDo

    event.preventDefault();
    setTodos([...todos, input]);
  };

  function setInputFun(event) {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Todo React App 📒</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={setInputFun} />
        </FormControl>

        <Button
          disabled={!input}
          variant="contained"
          color="secondary"
          onClick={addTodo}
          type="submit"
        >
          Add
        </Button>
        <h1>{input}</h1>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
export default App;
