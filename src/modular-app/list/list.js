import classes from "./list.module.css";

export default function List({ todos, onSpanClick, onButtonClick }) {
  return (
    <ul>
      {todos.map(({ id, text, done }) => (
        <li key={id} className={done ? classes.done : null}>
          <span onClick={(event) => onSpanClick(id)}>{text}</span>
          <button onClick={(event) => onButtonClick(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
