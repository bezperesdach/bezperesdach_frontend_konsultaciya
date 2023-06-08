import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface GeneralState {
  navbarShown: boolean | null;
  pricesSidebarShown: boolean;
}

// Initial state
const initialState: GeneralState = {
  navbarShown: null,
  pricesSidebarShown: false,
};

// Actual Slice
export const generalReducer = createSlice({
  name: "generalReducer",
  initialState,
  reducers: {
    // Action to set the authentication status
    // setAuthState(state, action) {
    //   state.authState = action.payload;
    // },

    setNavbarState(state, action: PayloadAction<boolean | null>) {
      state.navbarShown = action.payload;
    },
    setSidebarState(state, action: PayloadAction<boolean>) {
      state.pricesSidebarShown = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.orderPopup,
      };
    },
  },
});

export const { setNavbarState, setSidebarState } = generalReducer.actions;

export default generalReducer.reducer;
