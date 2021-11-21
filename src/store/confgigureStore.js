import { createStore, combineReducers, applyMiddleware } from "redux";
import loaderMiddleware from "./middlewares/loaderMiddleware";
import thunk from "redux-thunk";

import reducers from "./reducers";

const configureStore = () => {
  return createStore(
    combineReducers(reducers),
    applyMiddleware(loaderMiddleware, thunk)
  );
};

export default configureStore;
