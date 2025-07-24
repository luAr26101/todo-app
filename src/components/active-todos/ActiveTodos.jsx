import React from "react";
import TodoItem from "../todo-item/TodoItem";
import "./ActiveTodos.css";

function ActiveTodos(props) {
  const { todos } = props;
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
}

export default ActiveTodos;
