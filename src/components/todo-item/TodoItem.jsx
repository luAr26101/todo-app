import React from "react";
import Checkbox from "../checkbox/CheckBox";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { id, title, description, completed, updateStatus, deleteTodo } = props;
  const handleStatusChange = (status) => {
    updateStatus(id, status);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className={`todo-item ${completed && "todo-completed"}`}>
      <div className='todo-item-header'>
        <div className='title-area'>
          <Checkbox checked={completed} statusChange={handleStatusChange} />

          <h4>{title}</h4>
        </div>
        <div>
          <i className='fa fa-pencil' aria-hidden='true'></i>
          <i
            className='fa fa-trash'
            aria-hidden='true'
            onClick={handleDelete}
          ></i>
        </div>
      </div>

      <div className='separator'></div>

      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
