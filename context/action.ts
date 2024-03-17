import { Dispatch } from "react";
import { DispatchType } from "../interface";
import { REDUCERS } from "../types";

export const handleSetMenuClicked = (
  dispatch: Dispatch<DispatchType>,
  payload: boolean
) => {
  dispatch({
    type: REDUCERS.SET_MENU_STATE,
    payload,
  });
};
