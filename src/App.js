import { useEffect } from "react";
import { connect } from "react-redux";
import { Play, Stop } from "./components/Icons";
import MinuteControl from "./components/MinuteControl";
import Timer from "./components/Timer";
import * as actionCreator from "./store/actions";
import audio from "./assets/beep.mp3";

function App({
  state,
  increment,
  decrement,
  start,
  decrement_seconds,
  interval_id,
  reset,
  interval_reset,
}) {
  useEffect(() => {
    beep();
  });

  const handleIncrement = (typeTimer) => {
    increment(typeTimer);
  };
  const handleDecrement = (typeTimer) => {
    decrement(typeTimer);
  };
  const handleStart = () => {
    if (!state.start) {
      if (state.currentSession === "session") {
        startTimer("session");
      } else {
        startTimer("break");
      }
    } else {
      clearInterval(state.intervalId);
    }
    start(!state.start);
  };

  const startTimer = (typeTimer) => {
    const myTimer = setInterval(() => {
      decrement_seconds(typeTimer);
    }, 1000);
    interval_id(myTimer);
  };

  const beep = () => {
    const sound = new Audio(audio);
    if (state.session === 0 || state.break === 0) {
      clearInterval(state.intervalId);
      if (state.session === 0) {
        interval_reset("session");
        startTimer("break");
      }
      if (state.break === 0) {
        interval_reset("break");
        startTimer("session");
      }
      sound.play();
    }
  };

  const handleReset = () => {
    clearInterval(state.intervalId);
    reset();
  };

  return (
    <div className="font-sans text-white">
      <div
        className="flex justify-center flex-col items-center min-h-screen"
        style={{ background: "linear-gradient(#325d70, #e66465)" }}
      >
        <h1 className="text-4xl font-bold">POMODORO</h1>
        <div className="flex flex-col lg:flex-row">
          <MinuteControl
            name="Session Length"
            handleDecrement={() => handleDecrement("session")}
            handleIncrement={() => handleIncrement("session")}
            seconds={state.userSetSession}
          />
          <MinuteControl
            name="Break Length"
            handleDecrement={() => handleDecrement("break")}
            handleIncrement={() => handleIncrement("break")}
            seconds={state.userSetBreak}
          />
        </div>
        <Timer state={state} />
        <div className="my-8 flex items-center">
          <button
            onClick={() => handleStart()}
            className="focus:outline-none mr-8"
          >
            {state.start ? <Stop /> : <Play />}
          </button>
          <button
            onClick={() => handleReset()}
            className="focus:outline-none px-4 py-1 border rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return { state };
};
let mapDispatchToProps = (dispatch) => {
  return {
    increment: (timerType) => dispatch(actionCreator.increment(timerType)),
    decrement: (timerType) => dispatch(actionCreator.decrement(timerType)),
    start: (timerType) => dispatch(actionCreator.start_stop(timerType)),
    decrement_seconds: (timerType) =>
      dispatch(actionCreator.decrement_seconds(timerType)),
    interval_id: (id) => dispatch(actionCreator.interval_id(id)),
    reset: () => dispatch(actionCreator.reset()),
    interval_reset: (timerType) =>
      dispatch(actionCreator.interval_reset(timerType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
