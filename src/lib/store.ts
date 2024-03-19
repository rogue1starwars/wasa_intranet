import { configureStore } from "@reduxjs/toolkit";
import { descriptionSlice } from "./reduxFeatures/description/descriptionSlice";
import descriptionSlicer from "./reduxFeatures/description/descriptionSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      description: descriptionSlicer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
