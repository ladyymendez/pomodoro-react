import * as action from "../actionTypes";

export const increment = (timerType) => ({
  type: action.INCREMENT,
  timerType,
});

export const decrement = (timerType) => ({
  type: action.DECREMENT,
  timerType,
});

export const start_stop = (start) => ({
  type: action.START_STOP,
  start,
});

export const decrement_seconds = (timerType) => ({
  type: action.DECREMENT_SECONDS,
  timerType,
});

export const interval_id = (id) => ({
  type: action.INTERVAL_ID,
  id,
});

export const reset = () => ({
  type: action.RESET,
});

export const interval_reset = (timerType) => ({
  type: action.INTERVAL_RESET,
  timerType,
});
