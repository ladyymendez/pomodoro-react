import React from "react";

export default function Timer({ state }) {
  let minuts = Math.floor(state.session / 60);
  let seconds = Math.ceil(state.session % 60);
  if (state.currentSession === "break") {
    minuts = Math.floor(state.break / 60);
    seconds = Math.ceil(state.break % 60);
  }
  return (
    <div className="text-6xl rounded-full border-2 border-solid px-8 py-6">
      {minuts < 10 ? `0${minuts}` : minuts} :{" "}
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
