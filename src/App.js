import { useEffect } from "react";
import { connect } from "react-redux";
import { Play, Stop } from "./components/Icons";
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
      startTimer("session");
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
    if (state.session === 0 && state.intervalId !== null) {
      clearInterval(state.intervalId);
      reset();
      sound.play();
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="font-sans text-white">
      <div
        className="flex justify-center flex-col items-center min-h-screen"
        style={{ background: "linear-gradient(#325d70, #e66465)" }}
      >
        <h1 className="text-4xl font-bold">POMODORO</h1>
        <div className="flex flex-col items-center my-5">
          <div>Session Length</div>
          <div>
            <button
              className="bg-primary px-4 py-2 rounded-full focus:outline-none active:bg-pink-200"
              onClick={() => handleDecrement("session")}
            >
              -
            </button>
            <input
              className="w-10 text-black m-2 rounded px-2 outline-none"
              value={Math.floor(state.session / 60)}
              type="text"
              readOnly
              // onChange={(e) => console.log(e.target.value)}
            />
            <button
              className="bg-primary px-4 py-2 rounded-full focus:outline-none active:bg-pink-200"
              onClick={() => handleIncrement("session")}
            >
              +
            </button>
          </div>
        </div>
        <div className="text-6xl rounded-full border-2 border-solid px-8 py-6">
          {Math.floor(state.session / 60)} :{" "}
          {Math.ceil(state.session % 60) === 0
            ? "00"
            : Math.ceil(state.session % 60)}
        </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
