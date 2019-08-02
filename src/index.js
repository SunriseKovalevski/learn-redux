import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  firstName: "Oleg",
  secondName: "Pavlov"
};

const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

const changeFirstName = newFirstName => {
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  };
};
const changeSecondName = newSecondName => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload };
  }
  return state;
};

const store = createStore(rootReducer);

class MainComponent extends React.Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.firstName}
            placeholder="First Name"
            onChange={event => {
              dispatch(changeFirstName(event.target.value));
            }}
          />
        </div>

        <div>
          <input
            type="text"
            value={this.props.secondName}
            placeholder="Second Name"
            onChange={event => {
              dispatch(changeSecondName(event.target.value));
            }}
          />
        </div>
        <div>{this.props.firstName + " " + this.props.secondName}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};

const WrappedMainComponent = connect(mapStateToProps)(MainComponent);

ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  document.getElementById("root")
);
