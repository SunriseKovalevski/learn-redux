import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MainComponent from "./components/MainComponent";
import { rootReducer } from "./store/reducers";

export const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
export const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById("root")
);
