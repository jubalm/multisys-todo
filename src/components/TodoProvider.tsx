import React from "react";
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, UPDATE_TODO } from "lib/constants";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { makeId } from "lib/helpers";

type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: Omit<Todo, "id">;
};

type RemoveTodoAction = {
  type: typeof REMOVE_TODO;
  id: string;
};

type UpdateTodoAction = {
  type: typeof UPDATE_TODO;
  payload: Partial<Todo>;
};

type EditTodosAction = {
  type: typeof EDIT_TODO;
  edit: boolean;
};

type TodoActions =
  | AddTodoAction
  | RemoveTodoAction
  | UpdateTodoAction
  | EditTodosAction;

const initialState: TodoContext = {
  todos: [],
  edit: false,
};

const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { id: makeId(), ...action.payload };
      return { ...state, todos: state.todos.concat([newTodo]) };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case EDIT_TODO:
      return { ...state, edit: !state.edit };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
        ),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

const TodoProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default TodoProvider;
