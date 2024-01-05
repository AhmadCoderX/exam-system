import { takeLatest, call, put } from "redux-saga/effects";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
} from "../actions/userActions";
// import userLoginAPI from "../services/userLoginAPI";
import userData from "../services/userData";

function* loginUser(action) {
  try {
    const user = yield call(
      authenticateUser,
      action.payload.username,
      action.payload.password
    );
    yield put({ type: USER_LOGIN_SUCCESS, payload: user });
  } catch (error) {
    yield put({ type: USER_LOGIN_FAILURE, payload: error.message });
  }
}

function authenticateUser(username, password) {
  const user = userData.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return { id: user.id, username: user.username };
  } else {
    throw new Error("Invalid Credentials");
  }
}

function* userSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, loginUser);
}

export default userSaga;
