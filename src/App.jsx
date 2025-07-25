import React, { useState } from "react";
import "./App.css";
import ActiveTodos from "./components/active-todos/ActiveTodos";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CompletedTodos from "./components/completed-todos/CompletedTodos";
import Modal from "./components/modal/Modal";
import TodoForm from "./components/todo-form/TodoForm";

const TODOS_MOCK = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "Buy groceries",
    description:
      "Pick up milk, bread, eggs, and fresh vegetables from the store.",
    completed: false,
  },
  {
    id: "1c6f78a2-0d77-4c65-9423-f2f52aeffac0",
    title: "Morning workout",
    description:
      "Complete a 30-minute run and a 15-minute strength training session.",
    completed: true,
  },
  {
    id: "65af0ea6-0e5d-4f29-bc89-1e9c112c3e3f",
    title: "Read a chapter of a book",
    description: "Read one chapter from 'Atomic Habits' before bedtime.",
    completed: false,
  },
  {
    id: "d9c67d14-0ae6-4db8-8d4f-3f09e8913b70",
    title: "Respond to emails",
    description: "Reply to all pending work-related emails before lunch.",
    completed: true,
  },
  {
    id: "77e56f62-2896-4e33-8c96-abc9bff8e93f",
    title: "Write blog post",
    description:
      "Draft a new post about JavaScript async/await with practical examples.",
    completed: false,
  },
  {
    id: "e231a648-2939-4bd0-b7c6-143c3c65ef1e",
    title: "Schedule dentist appointment",
    description: "Call Dr. Lewis’ office and book a checkup for next week.",
    completed: true,
  },
  {
    id: "f9a4a3d2-72d5-4c02-90f3-c4e0c3dc9f60",
    title: "Clean workspace",
    description: "Organize desk, clear cables, and wipe down surfaces.",
    completed: false,
  },
  {
    id: "b1c3e01b-0eeb-4d56-b1d5-bf149c45b13c",
    title: "Fix website bug",
    description:
      "Resolve the issue causing the navbar dropdown not to display on mobile.",
    completed: false,
  },
  {
    id: "c2f40136-9d2b-4e0b-9d90-e2b37c3c8f17",
    title: "Update resume",
    description: "Add latest project and update the skills section.",
    completed: true,
  },
  {
    id: "4a8e5b20-90e3-4e9b-81ff-3f6f3efaa0e9",
    title: "Plan weekend trip",
    description:
      "Research hiking trails and book accommodation for Saturday night.",
    completed: false,
  },
];

function App() {
  const initialFormData = {
    id: "",
    title: "",
    description: "",
  };
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const completedTodos = todos.filter((todo) => todo.completed === true);
  const activeTodos = todos.filter((todo) => todo.completed === false);

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  const handleUpdateStatus = (id, status) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: status } : todo;
      });
    });
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetFormData();
  };

  const handleOpenModal = (todoId) => {
    if (!todoId) return setIsModalOpen(true);
    const { id, title, description } = todos.find((t) => t.id === todoId);
    setFormData({ id, title, description });
    setIsModalOpen(true);
  };

  const handleAddTodo = (task) => {
    setTodos((prevTodos) => [task, ...prevTodos]);
    resetFormData();
  };

  const handleUpdateTodo = (id, data) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...data };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className='App'>
      <div className='app-container'>
        {/* <TodoForm /> */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={() => handleOpenModal()}>Add +</Button>
          <div className='list-container'>
            <ActiveTodos
              todos={activeTodos}
              updateStatus={handleUpdateStatus}
              deleteTodo={handleDeleteTodo}
              openModal={handleOpenModal}
            />
          </div>

          <div className='separator'></div>

          <h2>Completed</h2>
          <div className='list-container'>
            <CompletedTodos
              todos={completedTodos}
              updateStatus={handleUpdateStatus}
              deleteTodo={handleDeleteTodo}
              openModal={handleOpenModal}
            />
          </div>
        </Card>
      </div>
      {isModalOpen && (
        <Modal closeModal={handleCloseModal}>
          <TodoForm
            addTodo={handleAddTodo}
            updateTodo={handleUpdateTodo}
            closeModal={handleCloseModal}
            data={formData}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
