import { connect } from "react-redux";

import * as actionCreator from "./store/actions";

function App({ state, increment }) {
  console.log("state", state);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className="text-red-400">POMODORO</h1>
      <button className="bg-red-500" onClick={(e) => console.log("event", e)}>
        Increment
      </button>
    </div>
  );
}

let mapStateToProps = (state) => {
  return { state };
};
let mapDispatchToProps = (dispatch) => {
  return {
    increment: (timerType) => dispatch(actionCreator.increment(timerType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
