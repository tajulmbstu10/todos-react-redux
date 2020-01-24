import { SET_VISIBILITY_FILTER } from "./todoVisibilityType";

// set the visibility status in the root state
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
