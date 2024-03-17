/* eslint-disable import/no-anonymous-default-export */
import { ActionType, REDUCERS } from "../types";

export default (state: any, action: ActionType) => {
  const { payload } = action;

  switch (action.type) {
    case REDUCERS.SET_MENU_STATE:
      return {
        ...state,
        menuOpen: payload,
      };
      
    default:
      return state;
  }
};
