type TodoContext = {
  todos: Todo[];
  edit: boolean;
};

type Todo = {
  id: string;
  done: boolean;
  description: string;
};

