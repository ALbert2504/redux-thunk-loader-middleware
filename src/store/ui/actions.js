import { START_LOADING, STOP_LOADING } from "./actionTypes";

export const startLoading = () => {
  return {
    type: START_LOADING,
    payload: true
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
    payload: false
  };
};
