import React from "react";
import TodoItem from "../todo-item/TodoItem";
import "./ActiveTodos.css";

function ActiveTodos(props) {
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
        <div>
          <p>You don't have any active todos.</p>
          <p>
            Click the <strong>"Add +"</strong> button to add one ;)
          </p>
        </div>
      )}
    </>
  );
}

export default ActiveTodos;
