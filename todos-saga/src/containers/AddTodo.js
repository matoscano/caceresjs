import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, saveTodosInLocalStorage } from "../actions";

const AddTodo = ({ onAddTodo, onSaveTodosInLocalStorage, todos }) => {
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
    setInputValue("");
  };

  const handleSaveTodos = () => {
    onSaveTodosInLocalStorage(todos);
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
          onClick={handleSaveTodos}
        >
          Save Todos
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: input => dispatch(addTodo(input)),
    onSaveTodosInLocalStorage: todos => dispatch(saveTodosInLocalStorage(todos))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
