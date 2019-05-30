import { RegisterActionTypes } from "../actionTypes";
import { take, call, put } from "redux-saga/effects";
import { RegisterService } from "../services/RegisterService";
import history from "../config/history";

export function* watchRegisterRequest() {
  while (true) {
    const { name, email, password, c_password } = yield take(
      RegisterActionTypes.REGISTER_REQUEST
    );
    const params = {
      name: name,
      email: email,
      password: password,
      c_password: c_password
    };
    // console.log("saga", params);
    const list = yield call(RegisterService.doRegister, params);
    if (list) {
      yield put({
        type: RegisterActionTypes.REGISTER_SUCCESS,
        list: list,
        loading: false
      });
    } else {
      yield put({
        type: RegisterActionTypes.REGISTER_FAILURE,
        error: list,
        loading: false
      });
    }
    console.log(history);
    history.replace("/home/");
  }
}
