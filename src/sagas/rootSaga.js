import { fork } from "redux-saga/effects";
import { watchRegisterRequest } from "./index";

export default function* rootSaga() {
  yield fork(watchRegisterRequest);
}
