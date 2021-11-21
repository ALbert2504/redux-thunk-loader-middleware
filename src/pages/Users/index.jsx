import React, { useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as usersActions from "../../store/users/actions";

const Users = ({ getUsers, users, isLoading }) => {
  const handleGetUsers = () => {
    getUsers();
  };

  console.log(isLoading);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <p>Hello users</p>
      <button onClick={handleGetUsers}>Get users</button>
      <div>
        {users.length ? (
          users.map((u) => (
            <div key={u.id}>
              <Link to={`/user/${u.id}`}>{u.name}</Link>
            </div>
          ))
        ) : (
          <p>No users</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.getUsersReducer.users,
    isLoading: state.uiReducer.loading
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(usersActions.fetchUsers())
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Users);
