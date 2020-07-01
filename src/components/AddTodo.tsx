import React, {useState} from "react";
import {useTodo} from "components/TodoProvider";

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
      <input
        type="text"
        placeholder="What to do next?"
        value={description}
        onChange={handleInputChange}
      />
      <button type="submit">New Todo</button>
    </form>
  );
};

export default AddTodo;
