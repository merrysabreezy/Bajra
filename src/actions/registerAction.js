import { RegisterActionTypes } from "../actionTypes";

export function registerRequest(params) {
  console.log("action", params);
  return {
    type: RegisterActionTypes.REGISTER_REQUEST,
    params
  };
}
