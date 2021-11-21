import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import * as usersActions from "../../store/users/actions";

const User = ({ user, isLoading, getUser }) => {
  const {
    params: { id }
  } = useRouteMatch();
  useEffect(() => {
    getUser(id);
  }, [id, getUser]);

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <p>I am a simple user yet</p>
      <div style={{ border: "solid 1px red", padding: "5px" }}>
        <h3>{user.name}</h3>
        <p>{user.username}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.getUsersReducer.user,
    isLoading: state.uiReducer.loading
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(usersActions.fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(User);
