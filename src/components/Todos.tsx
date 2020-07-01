import React, {useMemo} from "react";
import { useTodo } from "components/TodoProvider";
import TodoList from "components/TodoList";
import EditTodo from "components/EditTodo";
import AddTodo from "components/AddTodo";
import { css } from "emotion";

const Todos = () => {
  const { todos } = useTodo();

  return (
    <div className={s.todos}>
      <div className={s.header}>
        <h4 className={s.title}>I need to...</h4>
        <EditTodo />
      </div>
      <TodoList todos={todos} />

      <AddTodo />
    </div>
  );
};

export default Todos;

const s = {
  header: css({
    display: "flex",
    borderBottom: "1px solid #ddd",
    padding: "10px 4px",
    justifyContent: "space-between"
  }),
  title: css({
    margin: 0
  }),
  todos: css({
    margin: "0 auto",
    background: "white",
    height: "100vh",
    padding: 20,
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    boxSizing: "border-box",

    "@media(min-width: 420px)": {
      maxWidth: 400,
    },
  }),
  footer: css({
    color: "#999",
    fontSize: 12 
  })
};
