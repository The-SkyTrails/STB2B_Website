import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import userApi from "../API/api";
import {} from "../Auth/logIn/actionLogin";
import {
  QUOTE_REQUEST,
  RULE_REQUEST,
  RETURN_QUOTE_REQUEST,
} from "../FlightFareQuoteRule/actionType";
import {
  fetchQuote,
  fetchRule,
  fetchReturnQuote,
} from "../FlightFareQuoteRule/actionFlightQuote";

function* ruleRequest(action) {
  try {
    console.log("Inside Rule Saga");
    const user = yield call(userApi.flightRuleSearch, action.payload);
    yield put(fetchRule(user));
  } catch (error) {
    yield put(fetchRule({}));
  }
}

function* quoteRequest(action) {
  try {
    const user = yield call(userApi.flightQuoteSearch, action.payload);
    yield put(fetchQuote(user));
  } catch (error) {
    yield put(fetchQuote({}));
  }
}

function* returnQuoteRequest(action) {
  try {
    const user = yield call(userApi.flightQuoteSearch, action.payload);
    yield put(fetchReturnQuote(user));
  } catch (error) {
    yield put(fetchReturnQuote({}));
  }
}

export function* flightFareWatcher() {
  yield takeLatest(RULE_REQUEST, ruleRequest);
  yield takeLatest(QUOTE_REQUEST, quoteRequest);
  yield takeLatest(RETURN_QUOTE_REQUEST, returnQuoteRequest);
}
