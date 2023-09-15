import * as types from "./actionType";

const initialState = {
  flightRuleData: {},
  flightQuoteData: {},
  flightReturnQuoteData: {},
  isLogin: false,
  isLoading: false,
  isError: false,
};

export const flightFareReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.RULE_SUCCESS:
      return {
        ...state,
        flightRuleData: payload?.data?.data?.Response,
        isLoading: false,
        isError: false,
      };

    case types.RULE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.QUOTE_SUCCESS:
      return {
        ...state,
        flightQuoteData: payload?.data?.data?.Response,
        isLoading: false,
        isError: false,
      };

    case types.QUOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.RETURN_QUOTE_SUCCESS:
      return {
        ...state,
        flightReturnQuoteData: payload?.data?.data?.Response,
        isLoading: false,
        isError: false,
      };

    case types.RETURN_QUOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    default:
      return state;
  }
};
