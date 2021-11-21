import { SET_USERS, SET_USER } from "./actionTypes";

const initialStata = {
  users: [],
  user: {}
};

export default (state = initialStata, action = {}) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.payload.users
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: action.payload.user
      };
    }
    default: {
      return state;
    }
  }
};
