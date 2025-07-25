import React, { useState } from "react";
import "./TodoForm.css";

import Button from "../button/Button";
import Card from "../card/Card";
import Input from "../input/Input";
import TextArea from "../input/TextArea";

import { generateUUID } from "../../helpers";

function TodoForm(props) {
  const { addTodo, updateTodo, closeModal, data } = props;
  const { id } = data;

  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title || !formData.description) return;

    if (id.length === 0) {
      const newTodo = {
        id: generateUUID(),
        title: formData.title,
        description: formData.description,
        completed: false,
      };

      addTodo(newTodo);
    } else {
      updateTodo(id, {
        title: formData.title,
        description: formData.description,
      });
    }

    // Clear inputs and close modal
    setFormData({
      title: "",
      description: "",
    });
    closeModal();
  };

  return (
    <Card>
      {id.length === 0 ? <h2>Create Todo</h2> : <h2>Update Todo</h2>}

      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          placeholder='Title'
          type='text'
          name='title'
          value={formData.title}
        />
        <TextArea
          onChange={handleChange}
          placeholder='Description'
          name='description'
          value={formData.description}
        />
        <Button type='submit'>{id.length === 0 ? "Create" : "Update"}</Button>
      </form>
    </Card>
  );
}

export default TodoForm;
