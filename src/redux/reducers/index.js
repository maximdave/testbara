import { combineReducers } from "redux";
import categoriesReducer from "./CategoriesReducer";
import profileReducer from "./ProfileReducer";
import searchReducer from "./SearchReducer";

const reducers = combineReducers({
  categoriesReducer,
  profileReducer,
  searchReducer

});

export default reducers;
