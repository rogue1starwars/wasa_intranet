import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DescriptionState {
  id: string;
  title: string;
  description: string;
}

const initialState: DescriptionState = {
  id: "",
  title: "",
  description: "",
};

export const descriptionSlice = createSlice({
  name: "description",
  initialState: initialState,
  reducers: {
    initializeDescription: (state) => {
      state.id = "";
      state.title = "";
      state.description = "";
    },
    setDescription: (
      state,
      action: PayloadAction<{ id: string; title: string; description: string }>
    ) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

export const { initializeDescription, setDescription } =
  descriptionSlice.actions;

export default descriptionSlice.reducer;
