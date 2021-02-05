import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import flowersReducer from "./flowersReducer";
import frostReducer from "./frostReducer";

export default combineReducers({
  flowers: flowersReducer,
  form: formReducer,
  frost: frostReducer,
});
