import { useReducer } from "react";
import { ReducerFetch, initialState } from "../reducers/Fetch";
import { API } from "../API";
import { SEND_DATA, SET_ERROR } from "../action/Fetch";

export const useFetch = () => {
  const [state, dispatch] = useReducer(ReducerFetch, initialState);

  const getData = async (endpoint) => {
    try {
      let { data } = await API.get(endpoint);
      console.log(data);
      dispatch({ type: SEND_DATA, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR });
    }
  };
  return { state, getData };
};
