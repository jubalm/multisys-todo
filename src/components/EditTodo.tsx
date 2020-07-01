import React from "react";
import { css } from "emotion";
import { useSelector, useDispatch } from "react-redux";

const EditTodo = () => {
  const edit = useSelector<TodoContext, boolean>((state) => state.edit);
  const dispatch = useDispatch();

  return (
    <button
      className={s.edit}
      onClick={() => dispatch({ type: "EDIT_TODO", edit })}
    >
      {edit ? `List` : `Edit`}
    </button>
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
    cursor: "pointer",
  }),
};
