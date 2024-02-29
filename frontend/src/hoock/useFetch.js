import { useReducer } from "react";
import { ReducerFetch, initialState } from "../reducer/Fetch";
import { API } from "../API";
import { SEND_DATA, SET_ERROR } from "../action/Fetch";

export const useFetch = (endpoint) => {
  const [state, dispatch] = useReducer(ReducerFetch, initialState);

  const getData = async (endpoint) => {
    
    try {
      console.log(`GETDATA try`);
      console.log(endpoint);
      let { data } = await API.get(endpoint)
      console.log(`data ${data}`);
      dispatch({ type: SEND_DATA, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_ERROR });
    }
  };
  return { state, getData };
};
