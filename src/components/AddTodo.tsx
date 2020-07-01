import React, { useState } from "react";
import { useTodo } from "components/TodoProvider";
import { css } from "emotion";

const AddTodo = () => {
  const [description, setDescription] = useState<string>("");
  const { add } = useTodo();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // no need to submit blank fields
    if (!description) return;
    add(description);
    setDescription("");
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.add}>
        <input
          className={s.input}
          type="text"
          placeholder="Write your task here"
          value={description}
          onChange={handleInputChange}
        />
        <button className={s.button} type="submit">
          add task
        </button>
      </div>
    </form>
  );
};

export default AddTodo;

const s = {
  add: css({
    display: "flex",
    padding: "10px 4px",
    borderBottom: "1px solid #ddd",
  }),
  input: css({
    flex: 1,
    appearance: "none",
    border: "0 none",
    marginRight: 10,
    outline: "none",
  }),
  button: css({
    appearance: "none",
    border: "0 none",
    backgroundColor: "transparent",
    fontWeight: "bold",
    textTransform: "uppercase",
    outline: "none",
  }),
};
