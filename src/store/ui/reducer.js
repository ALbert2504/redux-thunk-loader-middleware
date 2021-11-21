import { START_LOADING, STOP_LOADING } from "./actionTypes";

const initialState = {
  loading: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_LOADING:
    case STOP_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
