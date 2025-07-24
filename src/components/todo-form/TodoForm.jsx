import React, { useState } from "react";
import "./TodoForm.css";

import Button from "../button/Button";
import Card from "../card/Card";
import Input from "../input/Input";
import TextArea from "../input/TextArea";

import { generateUUID } from "../../helpers";

function TodoForm(props) {
  const { addTask, closeModal } = props;
  const initialFormData = {
    title: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  console.log(formData);

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title || !formData.description) return;

    const newTask = {
      id: generateUUID(),
      title: formData.title,
      description: formData.description,
      completed: false,
    };
    console.log(newTask);

    addTask(newTask);
    // Clear inputs and close modal
    setFormData(initialFormData);
    closeModal();
  };

  return (
    <Card>
      <h2>Create Todo</h2>
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
        <Button type='submit'>Create</Button>
      </form>
    </Card>
  );
}

export default TodoForm;
