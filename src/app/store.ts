import { configureStore } from "@reduxjs/toolkit";
import recruitNotificationModalReducer from "./features/recruitNotificationModal/recruitNotificationModal";

const store = configureStore({
  reducer: {
    recruitNotificationModal: recruitNotificationModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
