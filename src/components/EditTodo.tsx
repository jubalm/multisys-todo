import React from "react";
import {useTodo} from "components/TodoProvider";

const EditTodo = () => {
  const { edit, setEdit } = useTodo();
  return (
    <button onClick={() => setEdit(!edit)}>{edit ? `List` : `Edit`}</button>
  );
};

export default EditTodo;
