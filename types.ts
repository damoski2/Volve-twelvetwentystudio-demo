export type ScreenMobileType = "true" | "false" | "unactive";

export enum REDUCERS {
  SET_MENU_STATE = "SET_MENU_STATE",
}

export type ActionType = {
  payload: any;
  type: REDUCERS;
};

export type  OurPeopleType = {
  title: string
  description: string
  shortText: string;
  imgSrc: any;
}
