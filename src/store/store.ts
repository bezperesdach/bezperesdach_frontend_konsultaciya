import { configureStore /* ThunkAction, Action */ } from "@reduxjs/toolkit";
import { orderPopup } from "./reducers/orderPopupReducer";
import { generalReducer } from "./reducers/generalReducer";

import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    [orderPopup.name]: orderPopup.reducer,
    [generalReducer.name]: generalReducer.reducer,
  },
  devTools: true,
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
