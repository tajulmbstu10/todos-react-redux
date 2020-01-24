import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux-store";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// style
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
    border: 0
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

// main component
const AddTodo = ({ dispatch }) => {
  const classes = useStyles();
  let input;

  return (
    <div>
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <ExpandMoreIcon />
        </IconButton>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addTodo(input.value));
            input.value = "";
          }}
        >
          <input
            ref={node => (input = node)}
            placeholder="Whats need to be done"
            className={classes.input}
          />
        </form>
      </Paper>
    </div>
  );
};

export default connect()(AddTodo);
