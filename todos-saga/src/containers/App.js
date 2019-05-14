import React from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "../components/Filter";

const App = () => {
  return (
    <div className="container bg-light d-flex align-items-center flex-column mt-5 shadow-lg rounded">
      <div className="row m-1">
        <h1>CáceresJs - Redux Thunk</h1>
      </div>
      <div className="row m-3">
        <AddTodo />
      </div>
      <div className="row m-3">
        <Filter />
      </div>
      <div className="row m-3">
        <TodoList />
      </div>
    </div>
  );
};

export default connect()(App);
