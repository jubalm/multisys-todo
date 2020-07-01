import React from "react";
import Todo from "components/TodoItem";
import { css } from "emotion";

type TodoList = { todos: Todo[] };
const TodoList: React.FC<TodoList> = ({ todos }) => {
  if (!todos.length)
    return (
      <div className={s.message}>
        <p>Now that's a lot of free time! Try adding a todo using the form below.</p>
      </div>
    );
  return (
    <div>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;

const s = {
  message: css({
    color: "#999",
    fontSize: 14,
    maxWidth: "60%",
    margin: "0 auto",
    textAlign: "center",
  }),
};
