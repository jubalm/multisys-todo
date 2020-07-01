import React from "react";
import TodoProvider from "components/TodoProvider";
import Todos from "components/Todos";

const App = () => {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
};

export default App;
