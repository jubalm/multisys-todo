import React from "react";
import { useTodo } from "components/TodoProvider";
import TodoList from "components/TodoList";
import EditTodo from "components/EditTodo";
import AddTodo from "components/AddTodo";

const Todos = () => {
  const { todos } = useTodo();

  return (
    <div>
      <div style={{ display: "flex" }}>
        <AddTodo />
        <EditTodo />
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;

