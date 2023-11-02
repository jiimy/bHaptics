import { createSlice } from "@reduxjs/toolkit";

export const sortStoreSlice = createSlice({
  name: "sortStore",
  initialState: {
    sortKeyword: "",
  },
  reducers: {
    SORT_KEYWORD: (state, action) => {
      // state.data.push(action.payload);
      state.sortKeyword = action.payload;
    },
  },
});

export const { SORT_KEYWORD } = sortStoreSlice.actions;

export default sortStoreSlice.reducer;
