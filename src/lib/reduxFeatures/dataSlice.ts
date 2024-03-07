import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: {
      id: {
        title: "",
        description: "",
        shelf: "",
      },
    },
  },
  reducers: {}, 
});
