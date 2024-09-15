import { combineReducers } from "redux";
import { btShoeReducer } from "./BTShoe/reducer";

export const rootReducer = combineReducers({
  btShoeReducer,
});
