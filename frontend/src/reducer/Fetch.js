import { SEND_DATA, SET_ERROR } from "../action/Fetch";

export const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const ReducerFetch = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_DATA:
      return {
        ...state,
        loading: false,
        data: {
          payload,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
