import { useEffect, useState } from "react";

import List from "./list";
import Form from "./form";

import * as api from "./api";

export default function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const todos = await api.fetchAll("todos");
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (text) => {
    await api.create("todos", { text, done: false });

    fetchTodos();
  };

  const handleSpanClick = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    await api.update("todos", id, { done: !todo.done });
    fetchTodos();
  };

  const handleButtonClick = async (id) => {
    await api.remove("todos", id);
    fetchTodos();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <List
        todos={todos}
        onSpanClick={handleSpanClick}
        onButtonClick={handleButtonClick}
      />
    </>
  );
}
