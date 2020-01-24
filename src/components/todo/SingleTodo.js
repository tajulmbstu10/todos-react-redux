import React from "react";
import { Checkbox } from "antd";
import EditTodoForm from "./EditTodoForm";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

//style
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 0
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: 300,
    border: 0,
    textAlign: "left"
  },
  iconButton: {
    padding: 10,
    float: "left"
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

//main component
const SingleTodo = ({
  todo,
  toggleTodo,
  deleteTodo,
  setEditStatus,
  updateTodo
}) => {
  const classes = useStyles();

  const onChange = e => {
    if (e) {
      return toggleTodo(todo.id);
    } else {
      return;
    }
  };

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <Checkbox checked={todo.completed} onChange={onChange}></Checkbox>
      </IconButton>
      {!todo.editing ? (
        <span className={classes.input} onClick={() => setEditStatus(todo.id)}>
          {todo.content}
        </span>
      ) : (
        <span className={classes.input}>
          <EditTodoForm
            updateTodo={updateTodo}
            id={todo.id}
            content={todo.content}
          />{" "}
        </span>
      )}
      <IconButton
        className={classes.iconButton}
        aria-label="menu"
        onClick={() => deleteTodo(todo.id)}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};

export default SingleTodo;
