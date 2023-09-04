import * as types from "./oneWayEMTActionType";

const initState = {
  oneWayData: [],

  isLoading: false,

  isError: false,

  showSuccessMessage: false,
};

export const oneWayEMTReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ONE_WAY_EMT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.ONE_WAY_EMT_SUCCESS:
      return {
        ...state,
        oneWayData: payload,
        isLoading: false,
        isError: false,
        showSuccessMessage: true,
      };

    default:
      return state;
  }
};
