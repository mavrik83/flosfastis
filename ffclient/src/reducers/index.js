import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import flowersReducer from "./flowersReducer";
import selectedReducer from "./selectFlower";

export default combineReducers({
  flowers: flowersReducer,
  selectedFlower: selectedReducer,
  form: formReducer,
});
