import React from "react";
import { useTodo } from "components/TodoProvider";

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
    <div>
      {edit ? (
        <button onClick={handleRemove}>&times;</button>
      ) : (
        <input type="checkbox" checked={done} onChange={handleToggle} />
      )}

      <input
        type="text"
        value={description}
        onChange={handleDescription}
        disabled={!edit}
      />
    </div>
  );
};

export default Todo;
