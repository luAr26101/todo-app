import React from "react";
import TodoItem from "../todo-item/TodoItem";
import "./CompletedTodos.css";

function CompletedTodos(props) {
  const { todos, updateStatus, deleteTodo } = props;
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
}

export default CompletedTodos;
