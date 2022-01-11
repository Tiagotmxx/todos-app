import { useState } from "react";

import classes from "./app.module.css";

export default function App() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Seek for a job", done: false },
    { id: 3, text: "Forget everthing" },
  ]);

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const maxId = todos.length ? todos[todos.length - 1].id : 0;

    setTodos([...todos, { id: maxId + 1, text, done: false }]);

    setText("");
  };

  const handleSpanClick = (id) => (event) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      })
    );
  };

  const handleButtonClick = (id) => (event) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What next?"
          autoFocus
          value={text}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <ul>
        {todos.map(({ id, text, done }) => (
          <li key={id} className={done ? classes.done : null}>
            <span onClick={handleSpanClick(id)}>{text}</span>
            <button onClick={handleButtonClick(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
