import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};
const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: {},
});
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
