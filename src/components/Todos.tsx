import React, { useState } from "react";
import { useTodo } from "./TodoProvider";

const Todos = () => {
  const [removing, setRemoving] = useState<boolean>(false);
  const { todos } = useTodo();

  return (
    <div>
      <div style={{ display: "flex" }}>
        <AddTodo />
        <button onClick={() => setRemoving(!removing)}>
          {removing ? `Done` : `Edit`}
        </button>
      </div>
      {todos.map((todo) => (
        <Todo removing={removing} {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todos;

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

const Todo: React.FC<Todo & { removing: boolean }> = (props) => {
  const { removing, id, description, done } = props;
  const { remove, update } = useTodo();
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
      {removing ? (
        <button onClick={handleRemove}>&times;</button>
      ) : (
        <input type="checkbox" checked={done} onChange={handleToggle} />
      )}

      <input type="text" value={description} onChange={handleDescription} disabled={!removing} />
    </div>
  );
};
