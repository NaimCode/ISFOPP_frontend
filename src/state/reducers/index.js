import { combineReducers } from "redux";
import LoadingReducer from "./loadingReducer";
import accueilReducer from "./accueilReducer";
const reducers = combineReducers({
  accueil: accueilReducer,
  loading: LoadingReducer,
});
export default reducers;
