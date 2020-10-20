import { combineReducers } from "redux";
import getArticles from "./getArticles";

const rootReducer = combineReducers({
  getArticles,
});

export default rootReducer;