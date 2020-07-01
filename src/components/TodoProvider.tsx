import React, { createContext, useState, useContext } from "react";
import { makeId } from "lib/helpers";

type TodoContext = {
  todos: Todo[];
  add: () => void;
  remove: (id: string) => void;
  update: (id: string, object: Partial<Todo>) => void;
};

const TodoContext = createContext({} as TodoContext);

type Todo = {
  id: string;
  done: boolean;
  description: string;
};

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const add = () => {
    setTodos([...todos, { id: makeId(), done:false, description: "" }]);
  };

  const remove = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const update = (id: string, object: Partial<Todo>) => {
    const udpatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...object } : todo,
    );
    setTodos(udpatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, add, remove, update }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export function useTodo() {
  return useContext(TodoContext)
}
