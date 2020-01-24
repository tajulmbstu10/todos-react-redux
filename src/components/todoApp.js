import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/VisibleTodoList";
import FooterLinks from "../containers/FooterLinks";

// main component
const TodoApp = () => {

  return (
    <div style={{textAlign:'center'}}>
      <div>
        <h1 style={{ color: "#f48fb1", fontWeight: "bold",fontSize: 60 }}>
          Todos App
        </h1>
        <h4> Developed By MD. Tajul ISlam</h4>
      </div>
      <AddTodo />
      <TodoList />
      <FooterLinks />
    </div>
  );
};

export default TodoApp;
