import * as ACTION_TYPE from "../actions/types";

const visibilityFilter = (
  state = ACTION_TYPE.VISIBILITY_FILTERS.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case ACTION_TYPE.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
