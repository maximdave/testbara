import {
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
} from "../types";

const initialState = {
  pending: false,
  categories: [],
  error: null,
};

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES_PENDING:
      return { ...state, pending: true };

    case GET_CATEGORIES_SUCCESS:
      return { ...state, pending: false, categories: payload, error: "" };
    case GET_CATEGORIES_ERROR:
      return { ...state, pending: false, error: payload };
    default:
      return state;
  }
};

export default categoriesReducer;
