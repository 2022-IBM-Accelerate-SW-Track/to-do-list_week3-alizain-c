import React from "react";
import "../component/todos.css";
import { Card, Grid, ListItemButton, ListItemText, Checkbox} from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      let color = "#ffffffff";

      if (new Date(todo.due) <= new Date()){
        color = "#ff0000"; //Red
      }

      return (
        <Grid key={todo.id}>
          <Card style={{marginTop:10, background:color}} data-testid={todo.content}>
            {/* Remember, we set the local state of this todo item when the user submits the form in
            AddTodo.js. All we need to do is return the todo list item {todo.content} as well as its
            current date/time {todo.date}. Also, the item's id is utilized in order to correctly delete an item from the Todo list*/}
            <ListItemButton component="a" href="#simple-list">
              <Checkbox style={{paddingLeft:0}} color="primary" onClick={() => deleteTodo(todo.id)}/>
              <ListItemText primary={todo.content} secondary={todo.due}/>
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
