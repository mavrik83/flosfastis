import { combineReducers } from "redux";
import flowersReducer from "./flowersReducer";
import selectedReducer from "./selectFlower";

export default combineReducers({
  flowers: flowersReducer,
  selectedFlower: selectedReducer,
});
