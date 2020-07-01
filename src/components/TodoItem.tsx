import React from "react";
import { useTodo } from "components/TodoProvider";
import { css } from "emotion";

const Todo: React.FC<Todo> = (props) => {
  const { id, description, done } = props;
  const { edit, remove, update } = useTodo();
  const handleToggle = () => {
    update(id, { done: !done });
  };

  const handleDescription: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    update(id, { description: e.target.value });
  };

  const handleRemove = () => {
    remove(id);
  };

  return (
    <div className={s.item}>
      {edit ? (
        <div className={s.close}>
          <button onClick={handleRemove}>&times;</button>
        </div>
      ) : (
        <input
          className={s.check}
          type="checkbox"
          checked={done}
          onChange={handleToggle}
        />
      )}

      <input
        className={s.input}
        type="text"
        value={description}
        onChange={handleDescription}
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
      background: "transparent"
    },
  }),
};
