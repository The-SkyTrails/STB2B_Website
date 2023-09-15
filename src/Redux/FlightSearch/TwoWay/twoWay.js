import * as types from "./twoWayActionType";

export const fetchTwoWay = (data) => {
  return {
    type: types.TWO_WAY_SUCCESS,
    payload: data,
  };
};

export const twoWayAction = (data) => {
  if (data) {
    return {
      type: types.TWO_WAY_REQUEST,
      payload: data,
    };
  }
};

export const clearTwoWayReducer = () => {
  return {
    type: types.CLEAR_TWOWAY_REDUCER,
  };
};
