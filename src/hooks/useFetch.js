import { useCallback, useReducer } from "react";

const fetchReducer = (state, action) => {
  if (action.type === "SENDING") {
    return {
      status: "pending",
      data: null,
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.payload,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.payload,
    };
  }
  return state;
};

const useFetch = (apiFunction, startingWithPending) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    status: startingWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const requestFunction = useCallback(
    async (requestData) => {
      try {
        dispatch({ type: "SENDING" });
        const responseData = await apiFunction(requestData);
        dispatch({ type: "SUCCESS", payload: responseData });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    },
    [apiFunction]
  );

  return {
    ...state,
    requestFunction,
  };
};

export default useFetch;
