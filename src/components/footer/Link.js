import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  linkButton: {
    fontSize: 10
  }
}));

const Link = ({ active, children, onClick }) => {
  const classes = useStyles();

  return active ? (
    <Button size="small" className={classes.linkButton} disabled>
      {children}
    </Button>
  ) : (
    <Button size="small" className={classes.linkButton} onClick={onClick}>
      {" "}
      {children}{" "}
    </Button>
  );
};

export default Link;
