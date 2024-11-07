import { createSlice } from "@reduxjs/toolkit";

export const recruitNotificationModalSlice = createSlice({
  name: "recruitNotificationModal",
  initialState: {
    showConfirmModal: false,
    showErrorModal: false,
  },
  reducers: {
    setShowConfirmModal: (state, action) => {
      state.showConfirmModal = action.payload;
    },
    setShowErrorModal: (state, action) => {
      state.showErrorModal = action.payload;
    },
  },
});

export const { setShowConfirmModal, setShowErrorModal } =
  recruitNotificationModalSlice.actions;
export default recruitNotificationModalSlice.reducer;
