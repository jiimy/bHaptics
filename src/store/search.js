import { createSlice } from "@reduxjs/toolkit";

export const searchStoreSlice = createSlice({
  name: "searchStore",
  initialState: {
    keyword: "",
  },
  reducers: {
    SEARCH: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { SEARCH } = searchStoreSlice.actions;

export default searchStoreSlice.reducer;
