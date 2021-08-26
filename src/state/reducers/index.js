import { combineReducers } from "redux";
import accounterReducer from "./accounterReducer";

const reducers = combineReducers({
  account: accounterReducer,
});
export default reducers;
