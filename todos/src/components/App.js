import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Filter from "./Filter";

const App = () => (
  <div class="container bg-light d-flex align-items-center flex-column mt-5 shadow-lg rounded">
    <div class="row m-1">
      <h1>CáceresJs - Redux Basic</h1>
    </div>
    <div class="row m-3">
      <AddTodo />
    </div>
    <div class="row m-3">
      <Filter />
    </div>
    <div class="row m-3">
      <TodoList />
    </div>
  </div>
);

export default App;
