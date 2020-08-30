import React from "react";
import "./Todo.css";
import db from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@material-ui/core";

function Todo(props) {
  return (
    <List className="todo_list">
      <tr>
        <td>
          <ListItem>
            <ListItemAvatar></ListItemAvatar>{" "}
            <ListItemText primary={props.todo.todo} secondary="momo" />{" "}
          </ListItem>
        </td>
        <td>
          <DeleteIcon
            color="secondary"
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
          >
            ❌ Delete
          </DeleteIcon>
        </td>
      </tr>
    </List>
  );
}

export default Todo;
