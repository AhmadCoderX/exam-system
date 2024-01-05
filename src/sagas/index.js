// sagas/index.js
import { all } from "redux-saga/effects";
import userSaga from "./userSaga";

function* rootSaga() {
  yield all([
    userSaga(),
    // Add other sagas here if needed
  ]);
}

export default rootSaga;
