import * as action from "../actionTypes";

export const increment = (timerType) => ({
  type: action.INCREMENT,
  timerType,
});
