import React from "react";
import {useTodo} from "components/TodoProvider";
import { css } from "emotion";

const EditTodo = () => {
  const { edit, setEdit } = useTodo();
  return (
    <button className={s.edit} onClick={() => setEdit(!edit)}>{edit ? `List` : `Edit`}</button>
  );
};

export default EditTodo;

const s = {
  edit: css({
    appearance: "none",
    border: "0 none",
    backgroundColor: "transparent",
    textTransform: "uppercase",
    fontWeight: "bold",
    outline: "none",
    cursor: "pointer"
  })
}
