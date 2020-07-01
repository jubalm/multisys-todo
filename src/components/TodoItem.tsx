import React from "react";
import { css } from "emotion";
import { useDispatch, useSelector } from "react-redux";

const Todo: React.FC<Todo> = (props) => {
  const { id, description, done } = props;
  const edit = useSelector<TodoContext, boolean>((state) => state.edit);
  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      {edit ? (
        <div className={s.close}>
          <button onClick={() => dispatch({ type: "REMOVE_TODO", id })}>
            &times;
          </button>
        </div>
      ) : (
        <input
          className={s.check}
          type="checkbox"
          checked={done || false}
          onChange={() =>
            dispatch({ type: "UPDATE_TODO", payload: { id, done: !done } })
          }
        />
      )}

      <input
        className={s.input}
        type="text"
        value={description}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_TODO",
            payload: { id, description: e.target.value },
          })
        }
        disabled={!edit}
      />
    </div>
  );
};

export default Todo;

const s = {
  check: css({}),
  close: css({
    width: 20,
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& button": {
      appearance: "none",
      border: "0 none",
      background: "transparent",
      fontSize: "1.4em",
      padding: 0,
    },
  }),
  item: css({
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    height: 38,
    padding: "0 4px",
  }),
  input: css({
    appearance: "none",
    backgroundColor: "#fcfcfc",
    color: "inherit",
    outline: "none",
    flex: 1,
    border: "1px solid transparent",
    borderBottom: "1px solid #ddd",
    padding: " 4px 6px",
    marginLeft: 4,

    ":disabled": {
      border: "1px solid transparent",
      background: "transparent",
    },
  }),
};
