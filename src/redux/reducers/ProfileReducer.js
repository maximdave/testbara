import { TOGGLE_PROFILE_HIDDEN } from "../types";

const initialState = {
 hidden:false
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_PROFILE_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default profileReducer;