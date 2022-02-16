import { useDispatch, useSelector } from "react-redux";
import { selectText } from "../bussiness-logic/todos";
import { setText } from "../bussiness-logic/todos/text";

import FormComponent from "./form";

//Container component

export default function Form({ onSubmit }) {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(setText(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
  };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
