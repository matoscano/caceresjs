import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, getTodos, setError } from "../actions";

const AddTodo = ({ onAddTodo, onLoadTodosFromServer, onResetError }) => {
  const [input, setInputValue] = useState("");

  const handleInputValue = val => {
    setInputValue(val.target.value);
  };

  const handleSubmitTodo = event => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    onAddTodo(input);
    onResetError(null);
    setInputValue("");
  };

  const handleLoadTodos = () => {
    onLoadTodosFromServer();
  };

  return (
    <div>
      <form onSubmit={e => handleSubmitTodo(e)} className="form-inline">
        <input
          value={input}
          onChange={val => handleInputValue(val)}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary ml-2">
          Add Todo
        </button>
        <button
          type="button"
          className="btn btn-primary ml-2"
          onClick={handleLoadTodos}
        >
          Load Todos
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: input => dispatch(addTodo(input)),
    onResetError: e => dispatch(setError(e)),
    onLoadTodosFromServer: () => dispatch(getTodos())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
