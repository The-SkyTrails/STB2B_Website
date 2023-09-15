import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import userApi from "../API/api";
import { fetchTwoWay } from "../FlightSearch/TwoWay/twoWay";
import { TWO_WAY_REQUEST } from "../FlightSearch/TwoWay/twoWayActionType";

function* twoWayRequest(action) {
  try {
    const data = yield call(userApi.twoWaySearch, action.payload);
    yield put(fetchTwoWay(data));
  } catch (error) {
    console.log(error);
  }
}
export function* twoWayWatcher() {
  yield takeLatest(TWO_WAY_REQUEST, twoWayRequest);
}
