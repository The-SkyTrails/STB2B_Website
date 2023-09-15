import * as types from "./twoWayActionType";

const initState = {
  twoWayData: [],

  isLoading: false,

  isError: false,

  showSuccessMessage: false,
};

export const twoWayReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.TWO_WAY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.TWO_WAY_SUCCESS:
      return {
        ...state,
        twoWayData: payload,
        isLoading: false,
        isError: false,
        showSuccessMessage: true,
      };

    default:
      return state;
  }
};
