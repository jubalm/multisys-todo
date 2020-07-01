import React from "react";
import Todo from "components/TodoItem";

type TodoList = { todos: Todo[] };
const TodoList: React.FC<TodoList> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
