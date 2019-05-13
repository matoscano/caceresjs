import React from "react";
import Link from "../containers/Link";
import { VisibilityFilters } from "../actions";

const Filter = () => (
  <div>
    <span>Show: </span>
    <Link
      filter={VisibilityFilters.SHOW_ALL}
      buttonStyle="btn btn-primary mx-2"
    >
      All
    </Link>
    <Link
      filter={VisibilityFilters.SHOW_ACTIVE}
      buttonStyle="btn btn-warning mx-2"
    >
      Active
    </Link>
    <Link
      filter={VisibilityFilters.SHOW_COMPLETED}
      buttonStyle="btn btn-success mx-2"
    >
      Completed
    </Link>
  </div>
);

export default Filter;
