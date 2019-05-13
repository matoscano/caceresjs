import { combineReducers } from "redux";
import todos from "./todosReducer";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter
});
