import { GET_FILTERED_DATA, GET_SEARCH_WORD } from "../types";

const initialState = {
  searchWord: "",
  filteredData: []
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_WORD:
      return { ...state, searchWord:payload };
      case GET_FILTERED_DATA:
        return {...state, filteredData:payload}
    default:
      return state;
  }
};

export default searchReducer;