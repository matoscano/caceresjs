import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Todo from "../components/Todo";
import { toggleTodo } from "../actions";
import { VISIBILITY_FILTERS } from "../actions/types";

const TodoList = ({ todos, toggleTodo, loading, error }) => {
  const loadingSpinner = (
    <div className="spinner-border text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  const renderErrorMsg = (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  );

  const renderTodos = (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
  const renderContent = error ? renderErrorMsg : renderTodos;

  return loading ? loadingSpinner : renderContent;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VISIBILITY_FILTERS.SHOW_ALL:
      return todos;
    case VISIBILITY_FILTERS.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VISIBILITY_FILTERS.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.todos, state.visibilityFilter),
  loading: state.todos.loading,
  error: state.todos.error
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
