import {
  INCREMENT,
  DECREMENT,
  START_STOP,
  DECREMENT_SECONDS,
  INTERVAL_ID,
  RESET,
  INTERVAL_RESET,
} from "../actionTypes";

const initialState = {
  session: 1500,
  userSetSession: 1500,
  break: 300,
  userSetBreak: 300,
  start: false,
  intervalId: null,
  currentSession: "session",
};

export default function clock(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      if (action.timerType === "session") {
        return {
          ...state,
          session: state.session + 60,
          userSetSession: state.userSetSession + 60,
        };
      } else {
        return {
          ...state,
          break: state.break + 60,
          userSetBreak: state.userSetBreak + 60,
        };
      }
    case DECREMENT:
      if (action.timerType === "session") {
        return {
          ...state,
          session: state.session - 60,
          userSetSession: state.session - 60,
        };
      } else {
        return {
          ...state,
          break: state.break - 60,
          userSetBreak: state.break - 60,
        };
      }
    case START_STOP:
      return { ...state, start: action.start };
    case DECREMENT_SECONDS:
      if (action.timerType === "session") {
        return { ...state, session: state.session - 1 };
      } else {
        return { ...state, break: state.break - 1 };
      }
    case INTERVAL_ID:
      return { ...state, intervalId: action.id };
    case RESET:
      return { ...initialState };
    case INTERVAL_RESET:
      if (action.timerType === "session") {
        return {
          ...state,
          session: state.userSetSession,
          currentSession: "break",
        };
      } else {
        return {
          ...state,
          break: state.userSetBreak,
          currentSession: "session",
        };
      }
    default:
      return state;
  }
}
