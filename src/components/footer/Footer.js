import React from "react";
import LinkToDoFilter from "../../containers/LinkToDoFilter";
import { VisibilityFilters } from "../../redux-store/todoVisibility/todoVisibilityType";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

//
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 10,
    borderBottom: "double",
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
  },
  buttonDesign: {
    fontSize: 10
  }
}));

const Footer = ({
  visible,
  onClick,
  visibleCompleteDeleteLink,
  todosLength
}) => {
  const classes = useStyles();

  return visible ? (
    <Paper className={classes.root}>
      <span className={classes.iconButton}>
        {" "}
        {todosLength > 0 ? todosLength : 0} items left{" "}
      </span>

      <LinkToDoFilter filter={VisibilityFilters.SHOW_ALL}>All</LinkToDoFilter>
      <LinkToDoFilter filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </LinkToDoFilter>
      <LinkToDoFilter filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </LinkToDoFilter>

      {visibleCompleteDeleteLink ? (
        <Button size="small" className={classes.buttonDesign} onClick={onClick}>
          Delete Completed
        </Button>
      ) : (
        ""
      )}
    </Paper>
  ) : (
    ""
  );
};

export default Footer;
