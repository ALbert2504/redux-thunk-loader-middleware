import { SET_USERS, SET_USER } from "./actionTypes";
import { requestUsers } from "../../services/getUsers";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: {
      users
    }
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: {
      user
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await requestUsers.get();
      const data = response.data;
      dispatch(setUsers(data));
    } catch (e) {
      console.log(e.response);
    }
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await requestUsers.get(`/${id}`);
      const data = response.data;
      dispatch(setUser(data));
    } catch (e) {
      console.log(e.response);
    }
  };
};
