import { createStore, combineReducers, applyMiddleware } from "redux";
import { videos, isLoading } from "./videos/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  videos,
  isLoading,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));