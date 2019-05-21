import { RegisterActionTypes } from "../actionTypes";

const INITIAL_STATE = { registration: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: false
      };
    case RegisterActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        data: action.list
      };
    case RegisterActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
