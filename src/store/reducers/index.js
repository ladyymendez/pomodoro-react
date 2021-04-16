import { INCREMENT } from "../actionTypes";

const initialState = {
  increment: 300,
};

export default function clock(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, increment: 400 };
    default:
      return state;
  }
}
