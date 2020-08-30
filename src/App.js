import React, { useState, useEffect } from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //listen to db when app loads
  useEffect(() => {
    //this ffires when app loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    //adding toDo

    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  function setInputFun(event) {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Todo React App 📒</h1>
      <form>
        <FormControl>
          <TextField
            value={input}
            onChange={setInputFun}
            id="outlined-basic"
            label="Write a Todo"
            variant="outlined"
          />
        </FormControl>

        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          onClick={addTodo}
          type="submit"
        >
          Add
        </Button>
        <h1>{input}</h1>
        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </form>
    </div>
  );
}
export default App;
