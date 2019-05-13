import React from "react";
import Link from "../containers/Link";
import { VISIBILITY_FILTERS } from "../actions/types";

const Filter = () => (
  <div>
    <span>Show: </span>
    <Link
      filter={VISIBILITY_FILTERS.SHOW_ALL}
      buttonStyle="btn btn-primary mx-2"
    >
      All
    </Link>
    <Link
      filter={VISIBILITY_FILTERS.SHOW_ACTIVE}
      buttonStyle="btn btn-warning mx-2"
    >
      Active
    </Link>
    <Link
      filter={VISIBILITY_FILTERS.SHOW_COMPLETED}
      buttonStyle="btn btn-success mx-2"
    >
      Completed
    </Link>
  </div>
);

export default Filter;
