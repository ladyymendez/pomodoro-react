import React from "react";

export default function MinuteControl({
  name,
  seconds,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <div className="flex flex-col items-center mb-4 lg:my-4">
      <div>{name}</div>
      <div className="px-4">
        <button
          disabled={seconds <= 60}
          className="bg-primary px-4 py-2 rounded-full focus:outline-none active:bg-pink-200"
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          className="w-10 text-black m-2 rounded px-2 outline-none"
          value={Math.floor(seconds / 60)}
          type="text"
          readOnly
          // onChange={(e) => console.log(e.target.value)}
        />
        <button
          className="bg-primary px-4 py-2 rounded-full focus:outline-none active:bg-pink-200"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
