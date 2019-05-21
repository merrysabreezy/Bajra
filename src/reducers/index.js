import { combineReducers } from "redux";
import BajraReducer from "./BajraReducer";

const appReducer = combineReducers({
  bajra: BajraReducer
});

function index(state, action) {
  //   if (action.type === UserActionTypes.LOGOUT_REQUEST) {
  //     state = undefined;
  //   }

  return appReducer(state, action);
}
export default index;
