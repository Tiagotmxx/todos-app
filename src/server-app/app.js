import { useEffect, useState } from "react";

import List from "./list";
import Form from "./form";

export default function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const body = await response.json();
    setTodos(body);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (text) => {
    // const maxId = todos.length ? todos[todos.length - 1].id : 0;
    // setTodos([...todos, { id: maxId + 1, text, done: false }]);
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text, done: false }),
    });
    fetchTodos();
  };

  const handleSpanClick = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleButtonClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
