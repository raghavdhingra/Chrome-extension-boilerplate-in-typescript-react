import { createSlice } from "@reduxjs/toolkit";

interface ISettingReducerInterface {
  user: null;
}

const initialState: ISettingReducerInterface = { user: null };

export const settingReducer = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});

export const {} = settingReducer.actions;
