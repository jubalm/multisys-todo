import React, { useState } from "react";
import { useTodo } from "./TodoProvider";

const Todos = () => {
  const { todos } = useTodo();

  return (
    <div>
      <AddTodo />
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
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

const Todo: React.FC<Todo> = ({ id, description, done }) => {
  const { remove, update } = useTodo();
  const handleToggle = () => {
    update(id, { done: !done });
  };

  const handleDescription: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    update(id, { description: e.target.value });
  };

  const handleRemove = () => {
    remove(id)
  }

  return (
    <div>
      <button onClick={handleRemove}>&times;</button>
      <input type="checkbox" checked={done} onChange={handleToggle} />
      <input type="text" value={description} onChange={handleDescription} />
    </div>
  );
};
