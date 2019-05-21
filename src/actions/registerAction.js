import { RegisterActionTypes } from "../actionTypes";

export function registerRequest(name, email, password, c_password) {
  console.log("action", name);
  return {
    type: RegisterActionTypes.REGISTER_REQUEST,
    name,
    email,
    password,
    c_password
  };
}
