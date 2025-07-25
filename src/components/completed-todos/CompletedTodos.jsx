import React from "react";
import TodoItem from "../todo-item/TodoItem";
import "./CompletedTodos.css";

function CompletedTodos(props) {
  const { todos, updateStatus, deleteTodo, openModal } = props;
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            updateStatus={updateStatus}
            deleteTodo={deleteTodo}
            openModal={openModal}
          />
        ))
      ) : (
        <p>You haven't completed any todos yet ;)</p>
      )}
    </>
  );
}

export default CompletedTodos;
