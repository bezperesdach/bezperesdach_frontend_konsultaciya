import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import {
  additionalInfoParams,
  AntiplagiatTypes,
  ContactTypes,
  getProjectType,
  getVolumeDataUnitNouns,
  OrderPopupStage,
  ProjectTypes,
} from "@/utils/popupOrder/utils";
import { getNoun, getYYYYmmddFromDate } from "@/utils/utils";
import { ym } from "@/utils/yandex-metrika";

// Type for our state
export interface PopupState {
  popupShown: boolean;
  errorPopupShown: boolean;
  errorPopupMessage: string;
  popupLoading: boolean;
  projectType: ProjectTypes | null;
  workTheme: string;
  subject: string;
  stage: OrderPopupStage;
  dueDateEpoch: number | null;
  originality: number | null;
  antiplagiatType: AntiplagiatTypes | null;
  volume: number | null;
  additionalInfo: string;
  contactType: ContactTypes | null;
  contact: string;
  expectedPrice: number | null;
  isSubmitting: boolean;
  orderId: string;
}

// Initial state
const initialState: PopupState = {
  popupShown: false,
  errorPopupShown: false,
  errorPopupMessage: "",
  popupLoading: false,
  projectType: null,
  workTheme: "",
  subject: "",
  stage: "theme",
  dueDateEpoch: null,
  originality: null,
  antiplagiatType: null,
  volume: null,
  additionalInfo: "",
  contactType: null,
  contact: "",
  expectedPrice: null,
  isSubmitting: false,
  orderId: "",
};

// Actual Slice
export const orderPopup = createSlice({
  name: "orderPopup",
  initialState,
  reducers: {
    // Action to set the authentication status
    // setAuthState(state, action) {
    //   state.authState = action.payload;
    // },

    setPopupShown(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        ym("reachGoal", "openedOrderPopupMenu");
        state.popupLoading = true;
      } else {
        if (state.stage === "final") {
          ym("reachGoal", "closedOrderPopupOnLastStage");
        }
      }

      state.popupShown = action.payload;
    },
    setPopupLoading(state, action: PayloadAction<boolean>) {
      state.popupLoading = action.payload;
    },
    setProjectType(state, action: PayloadAction<ProjectTypes>) {
      const projectType = getProjectType(action.payload);
      if (projectType) {
        state.projectType = projectType;
      }
    },
    setWorkTheme(state, action: PayloadAction<string>) {
      state.workTheme = action.payload;
    },
    setSubject(state, action: PayloadAction<string>) {
      state.subject = action.payload;
    },
    setStage(state, action: PayloadAction<OrderPopupStage>) {
      state.stage = action.payload;
    },
    setDueDateEpoch(state, action: PayloadAction<number>) {
      state.dueDateEpoch = action.payload;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    setOriginality(state, action: PayloadAction<number>) {
      state.originality = action.payload;
    },
    setAntiplagiatType(state, action: PayloadAction<AntiplagiatTypes>) {
      state.antiplagiatType = action.payload;
    },
    setAdditionalInfo(state, action: PayloadAction<string>) {
      state.additionalInfo = action.payload;
    },
    setContactType(state, action: PayloadAction<ContactTypes>) {
      state.contactType = action.payload;
    },
    setContact(state, action: PayloadAction<string>) {
      state.contact = action.payload;
    },
    setExpectedPrice(state, action: PayloadAction<number | null>) {
      state.expectedPrice = action.payload;
    },
    setSubmitting(state, action: PayloadAction<boolean>) {
      state.isSubmitting = action.payload;
    },
    setOrderId(state, action: PayloadAction<string>) {
      state.orderId = action.payload;
    },
    resetStateToStart(state, action: PayloadAction<ProjectTypes>) {
      if (state.projectType !== action.payload) {
        const newState = { ...initialState };
        newState.projectType = action.payload;
        return newState;
      }
    },
    resetAdditionalData(state) {
      state.originality = null;
      state.antiplagiatType = null;
      state.volume = null;
      state.additionalInfo = "";
    },
    fullReset() {
      return { ...initialState };
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

export const {
  setPopupShown,
  setPopupLoading,
  setProjectType,
  setWorkTheme,
  setSubject,
  setStage,
  setDueDateEpoch,
  setVolume,
  setOriginality,
  setAntiplagiatType,
  setAdditionalInfo,
  setContactType,
  setContact,
  setExpectedPrice,
  setSubmitting,
  setOrderId,
  resetStateToStart,
  resetAdditionalData,
  fullReset,
} = orderPopup.actions;

export const selectAllOrderData = (state: AppState) => {
  let volumeText = "";
  if (state.orderPopup.projectType && state.orderPopup.volume) {
    const volumeUnit = additionalInfoParams[state.orderPopup.projectType];
    if (volumeUnit.volumeData) {
      const volumeNouns = getVolumeDataUnitNouns(volumeUnit.volumeData?.unit);
      volumeText = state.orderPopup.volume + " " + getNoun(state.orderPopup.volume, volumeNouns.one, volumeNouns.two, volumeNouns.five);
    } else {
      volumeText = state.orderPopup.volume + "";
    }
  }

  return {
    contactType: state.orderPopup.contactType,
    contact: state.orderPopup.contact,
    projectType: state.orderPopup.projectType ?? "",
    subject: state.orderPopup.subject,
    projectName: state.orderPopup.workTheme.trim().replace(/\n/g, " "),
    description: state.orderPopup.additionalInfo.trim().replace(/\n/g, " "),
    dueDate: state.orderPopup.dueDateEpoch ? getYYYYmmddFromDate(new Date(state.orderPopup.dueDateEpoch)) : "",
    originality: state.orderPopup.originality ? state.orderPopup.originality + "%" : "",
    volume: volumeText,
    antiPlagiarism: state.orderPopup.antiplagiatType ? state.orderPopup.antiplagiatType : "none",
    expectedPrice: state.orderPopup.expectedPrice ? state.orderPopup.expectedPrice + "" : "",
  };
};

export default orderPopup.reducer;
