import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [input, setInputValue] = useState("");

  const handleInputValue = val => {
    setInputValue(val.target.value);
  };

  const handleSubmitTodo = event => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    dispatch(addTodo(input));
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={e => handleSubmitTodo(e)} class="form-inline">
        <input
          value={input}
          onChange={val => handleInputValue(val)}
          class="form-control"
        />
        <button type="submit" class="btn btn-primary ml-2">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
